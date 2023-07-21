import { z } from 'zod';

export const userResponseSchema = z.object({
  user_id: z.number(),
  user_name: z.string().optional(),
  email: z.string(),
  profile_pic_url: z.string().optional(),
  created_at: z.date(),
  updated_at: z.date().optional(),
});

export const userSchema = z.object({
  user_id: z.number(),
  user_name: z.string().optional(),
  email: z.string(),
  password: z.string().nonempty().max(18),
  profile_pic_url: z.string().optional(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
});

export const usersResponseSchema = z.array(userResponseSchema);

export type UserType = z.infer<typeof userSchema>;

export type UserResponse = z.infer<typeof userResponseSchema>;

export const userIdSchema = z
  .string()
  .nonempty()
  .transform((user_id) => {
    const newValue = Number(user_id);

    if (Number.isNaN(newValue)) return null;

    return newValue;
  });
