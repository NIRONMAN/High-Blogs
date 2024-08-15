import { z } from "zod";

export const signupInput = z.object({
    email: z.string(),
    password: z.string(),
    name: z.string()
});

export type signupParams = z.infer<typeof signupInput>;

export const signinInput = z.object({
    email: z.string(),
    password: z.string()
});

export type signinParams = z.infer<typeof signinInput>;

export const updateBlog = z.object({
    id: z.string(),
    title: z.string(),
    content: z.string()
});

export type updateParams = z.infer<typeof updateBlog>;

export const createBlogInput = z.object({
    title: z.string(),
    content: z.string()
});

export type createBlogParams = z.infer<typeof createBlogInput>;
