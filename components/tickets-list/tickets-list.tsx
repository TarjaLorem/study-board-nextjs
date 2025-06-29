import Ticket from '@/components/ticket/ticket';
import ITicket from '@/types/interfaces/tickets';
import { getTickets } from '@/utils/actions/get-tickets';

export default async function TicketsList(){
  const tickets: ITicket[] = await getTickets();

  return (
    <div className="flex justify-beetwen flex-wrap mt-12">{
      tickets.map((ticket) => <Ticket key={ticket.id} name={ticket.name} description={ticket.description}></Ticket>)
    }</div>
  )
}
