import Ticket from '@/app/components/ticket/ticket';
import styles from '@/app/components/tickets-list/tickets-list.module.scss';
import Link from 'next/link';

export default function TicketsList() {
  return (
    <>
      <div className="flex justify-end">
        <button className={`${styles.createTicketBnt} w-40 py-2 font-bold rounded-sm`}>
          <Link href="../../create-ticket">Create new ticket</Link>
        </button>
      </div>

      <div className="flex justify-beetwen mt-12">
        <Ticket name="Learn Next JS" description="It costs me a lifetime"></Ticket>
      </div>
    </>
  );
}
