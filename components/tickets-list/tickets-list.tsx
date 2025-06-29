import Ticket from '@/components/ticket/ticket';
import styles from '@/components/tickets-list/tickets-list.module.scss';
import Link from 'next/link';
import ITicket from '@/types/interfaces/tickets';
import { getTickets } from '@/utils/actions/get-tickets';

export default async function TicketsList() {
  const tickets: ITicket[] | unknown = await getTickets()

  return (
    <>
      <div className="flex justify-end">
        <button className={`${styles.createTicketBnt} w-40 py-2 font-bold rounded-sm cursor-pointer`}>
          <Link href="/create-ticket">Create new ticket</Link>
        </button>
      </div>

      <div className="flex justify-beetwen mt-12">{
        (tickets as ITicket[]).map((ticket) => <Ticket key={ticket.id} name={ticket.name} description={ticket.description}></Ticket>)
      }</div>
    </>
  );
}
