"use server"

import { createClient } from '@/lib/supabase/server';
import { createTicketSchema, CreateTicketSchemaType } from '@/types/schemas/create-ticket-schema';
import { revalidatePath } from 'next/cache';

export const createTicket = async (formData: CreateTicketSchemaType): Promise<{ error?: string; message?: string; }> => {
  const supabase = await createClient()

  try {
    const { data, error } = createTicketSchema.safeParse(formData);
    await supabase.from('tickets-board').insert(data);
    if (error) {
      const fieldErrors = error.flatten().fieldErrors;
      return { error: `Error has been occurred: ${fieldErrors.name} \n ${fieldErrors.description}` };
    }

    revalidatePath('/tickets-board-board');
  } catch (error) {
    console.log(error);
    return { error: 'Something went wrong' };
  }

  return { message: 'Ticket created successfully.' };
}
