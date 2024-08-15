import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import userRouter from '../routes/userRouter';
import blogRouter from '../routes/blogRouter';
import { cors } from 'hono/cors';


const app = new Hono<{
	Bindings: {
		DATABASE_URL: string,
    JWTSECRET:string
	},
	Variables : {
		userId: string,
    prisma:any
	}
}>();
app.get('/', (c) => {
  return c.text('Hello Niranjan')
})
app.use('/*', cors())

app.route("/api/v1/user",userRouter)
app.route("/api/v1/blog",blogRouter)


export default app
