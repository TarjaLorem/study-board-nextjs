"use server"

import connectDB from '@/lib/mongodb';
import Ticket from '@/lib/models/Ticket';
import ITicket from '@/types/interfaces/tickets';

export const getTickets = async (): Promise<ITicket[]> => {
  try {
    // Connect to database
    await connectDB();

    // Get all tickets, sorted by creation date (newest first)
    const tickets = await Ticket.find().sort({ createdAt: -1 }).lean();

    // Transform MongoDB documents to match ITicket interface
    return tickets.map((ticket) => ({
      id: ticket._id.toString(),
      name: ticket.name,
      description: ticket.description,
      created_at: ticket.createdAt || new Date(),
    }));
  } catch (error) {
    console.error('Error fetching tickets:', error);
    throw error;
  }
}
