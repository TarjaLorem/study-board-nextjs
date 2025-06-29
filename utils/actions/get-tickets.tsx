"use server"

import { createClient } from '@/lib/supabase/server';
import ITicket from '@/types/interfaces/tickets';

export const getTickets = async (): Promise<ITicket[] | unknown> => {
  const supabase = await createClient()

  try {
    const { data: tickets } = await supabase.from('tickets').select();

    return tickets as ITicket[];
  } catch (error) {
    return error;
  }
}
