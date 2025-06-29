import styles from './ticket.module.scss';
import ITicket from '@/types/interfaces/tickets';

export default function Ticket(ticket: Partial<ITicket>) {
  return (
    <div className={`${styles.ticket} w-72 h-32 p-4 rounded-md shadow-sm bg-white mr-2`}>
      <div className="mb-2 text-lg">{ticket.name}</div>
      <div className="text-sm">{ticket.description}</div>
    </div>
  )
}
