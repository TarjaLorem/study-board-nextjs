import mongoose, { Schema, Model } from 'mongoose';
import ITicket from '@/types/interfaces/tickets';

// Mongoose uses _id instead of id, and timestamps by default
interface ITicketDocument extends Omit<ITicket, 'id'> {
  _id: mongoose.Types.ObjectId;
}

const ticketSchema = new Schema<ITicketDocument>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      minlength: [3, 'Name must be at least 3 characters'],
      maxlength: [16, 'Name must not exceed 16 characters'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      minlength: [3, 'Description must be at least 3 characters'],
      maxlength: [32, 'Description must not exceed 32 characters'],
      trim: true,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

// Prevent model recompilation during hot reloads in development
const Ticket: Model<ITicketDocument> =
  mongoose.models.Ticket || mongoose.model<ITicketDocument>('Ticket', ticketSchema);

export default Ticket;

