import { Hono } from "hono";
import { Prisma, PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from "hono/jwt";
import { createBlogInput, updateBlog } from "@niranjan1309/common";

const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWTSECRET: string;
  };
  Variables: {
    userId: string;
    prisma: any;
  };
}>();
blogRouter.use("/*", async (c, next) => {
  await next();
});
blogRouter.get("/bulk", async (c) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

    const posts = await prisma.post.findMany({});

    return c.json(posts);
  } catch (error) {
    return c.json({
      msg: "Erroe at /bulk endpoint",
    });
  }
});
//
blogRouter.get("/:id", async (c) => {
  console.log("error");

  const id = c.req.param("id");
  try {
    const prisma = await new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const newBlogpost = await prisma.post.findUnique({
      where: {
        id: id,
      },
    });
    return c.json(newBlogpost);
  } catch (error) {
    return c.json({
      what: "This is error",
      msg: error,
    });
  }
});
//
blogRouter.use("/*", async (c, next) => {
  const prisma = await new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  c.set("prisma", prisma);
  const headers = c.req.header("Authorization");
  if (!headers) {
    c.status(404);
    return c.json({
      msg: "Authenticatoin Failed at getting header",
    });
  }
  const token = headers.split(" ")[1];
  const payload = await verify(token, c.env.JWTSECRET);
  if (!payload) {
    return c.json({
      msg: "Authenticatoin Failed at verifying using jwt",
    });
  }
  c.set("userId", payload.id);

  await next();
});

//MiddleWare End

//Create Blog
blogRouter.post("/", async (c) => {
  const userId = c.get("userId");
  const prisma = await c.get("prisma");

  const body = await c.req.json();

  const post = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: userId,
      imageLink: body.imageLink,
    },
  });
  return c.json({
    id: post.id,
  });
});
//Update Blog

blogRouter.put("/", async (c) => {
  const body = await c.req.json();
  const userId = await c.get("userId");
  const res = updateBlog.safeParse(body);
  if (!res) {
    return c.json({
      msg: "There is error while parsing",
    });
  }
  try {
    const prisma = await c.get("prisma");
    const response = await prisma.post.update({
      where: {
        id: body.id,
        authorId: userId,
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });
    return c.json(response);
  } catch (error) {
    return c.json({
      what: "This is error",
      msg: error,
    });
  }
});
// Get blog by id

//Get blog by bulk

//This is Ai route
blogRouter.post("/ai", async (c) => {
  const body = await c.req.json();
  const res = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyCSjYX7KG3XnFK0ayRAxsIZciybBXYzReU",
    {
      method: "POST",
      body: JSON.stringify({
        contents: [{ parts: [{ text: body.prompt }] }],
      }),
    }
  );
  // console.log(await res.json())
  const response:any=await res.json();
  return c.json(response.candidates[0].content.parts[0]);
});

export default blogRouter;
