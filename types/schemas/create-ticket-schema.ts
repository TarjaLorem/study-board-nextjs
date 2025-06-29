import { z } from 'zod';

export const createTicketSchema = z.object({
  name: z
    .string({ message: 'Invalid name type' })
    .min(3, { message: 'Invalid name length' })
    .max(16, { message: 'Invalid name length' }),
  description: z
    .string({ message: 'Invalid description type' })
    .min(3, { message: 'Invalid description length' })
    .max(32, { message: 'Invalid description length' }),
});

export type CreateTicketSchemaType = z.infer<typeof createTicketSchema>;
