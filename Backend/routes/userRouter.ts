import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import { signinInput, signupInput } from '@niranjan1309/common';


const userRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string,
    JWTSECRET:string
	},
	Variables : {
		userId: string,
    prisma:any
	}
}>();
userRouter.use("/*", async (c,next) => {
	const prisma = await new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
   c.set("prisma", prisma);
   await next()
})
// userRouter.use('/*', async (c, next) => {
//   const body = await c.req.json();

//   if (!body ||!body.email ||!body.password ||!body.name) {
//     c.status(411)
//     return c.json({
//       msg: "Error: Missing required fields in the request body."
//     });
//   }
//   else{
//     next()
//   }
  
// })

//MiddleWare End




// Sign up Route
userRouter.post('/signup',async (c) => {
  const body = await c.req.json();
  
  
  const prisma = c.get("prisma");

  const res= signupInput.safeParse(body);
  if(!res.success){
    c.status(411)
    return c.json({
      msg:"Error occured due to invalid parsing"
    })
  }
  try {
    const newUser =await prisma.user.create({
      data:{
        email: body.email,
        password: body.password,
        name: body.name
        
      }
    })
    const token =await sign( {id: newUser.id}, c.env.JWTSECRET);
    return c.json({
      msg:"User Created Succesfully",
      token:token
    })
  } catch (error:any) {
    c.status(411)

    return c.text("Error while signing up "+error)
  }
  

  
})
//Sign in Route
userRouter.post('/signin', async (c) => {
  const body = await c.req.json();

  if (!body ||!body.email ||!body.password ) {
    c.status(411)
    return c.json({
      msg: "Error: Missing required fields in the request body."
    });
  }
  const prisma = c.get("prisma");


  const res= signinInput.safeParse(body);
  if(!res.success){
    c.status(411)

    return c.json({
      msg:"Error occured due to invalid parsing"
    })
  }
  try {

    const newUser =await prisma.user.findUnique({
      where:{
        email: body.email ,
        password:body.password
      }
    })
    if(newUser){
      const token =await sign( {id: newUser.id}, c.env.JWTSECRET);
      
    return c.json({
      msg:"User Signed in Succesfully",
      token:token
    })
    }
    else{
      c.status(411)
      return c.notFound()

      // return c.json({
      //   msg:"User Not Found"
      // })
    }
    
  } catch (error:any) {
    c.status(411)
    return c.text("Error while signing in. "+error)
  }
})

export default userRouter;