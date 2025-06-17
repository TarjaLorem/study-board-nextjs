import Ticket from '@/app/components/ticket/ticket';
import styles from '@/app/components/tickets-list/tickets-list.module.scss';
import Link from 'next/link';
import { createClient } from '@/app/utils/supabase/server';

interface ITicket {
  id: number;
  created_at: Date;
  name: string;
  description: string;
}

export default async function TicketsList() {
  const supabase = await createClient();
  const { data: tickets } = await supabase.from('tickets').select();

  const listItems = (tickets as ITicket[]).map((ticket) => <Ticket key={ticket.id} name={ticket.name} description={ticket.description}></Ticket>);

  return (
    <>
      <div className="flex justify-end">
        <button className={`${styles.createTicketBnt} w-40 py-2 font-bold rounded-sm`}>
          <Link href="../../create-ticket">Create new ticket</Link>
        </button>
      </div>

      <div className="flex justify-beetwen mt-12">{listItems}</div>
    </>
  );
}
