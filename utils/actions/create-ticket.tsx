"use server"

import connectDB from '@/lib/mongodb';
import Ticket from '@/lib/models/Ticket';
import { createTicketSchema, CreateTicketSchemaType } from '@/types/schemas/create-ticket-schema';
import { revalidatePath } from 'next/cache';

export const createTicket = async (formData: CreateTicketSchemaType): Promise<{ error?: string; message?: string; }> => {
  try {
    // Validate input data
    const { data, error } = createTicketSchema.safeParse(formData);
    
    if (error) {
      const fieldErrors = error.flatten().fieldErrors;
      return { error: `Error has been occurred: ${fieldErrors.name} \n ${fieldErrors.description}` };
    }

    // Connect to database
    await connectDB();

    // Create ticket in MongoDB
    await Ticket.create(data);

    revalidatePath('/tickets-board');
  } catch (error) {
    console.log(error);
    return { error: 'Something went wrong' };
  }

  return { message: 'Ticket created successfully.' };
}
