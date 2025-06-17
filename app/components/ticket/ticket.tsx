import styles from './ticket.module.scss';

interface ITicket {
  name: string;
  description: string;
}

export default function Ticket(ticket: ITicket) {
  return (
    <div className={`${styles.ticket} w-72 h-32 p-4 rounded-md shadow-sm bg-white`}>
      <div className="mb-2 text-lg">{ticket.name}</div>
      <div className="text-sm">{ticket.description}</div>
    </div>
  )
}
