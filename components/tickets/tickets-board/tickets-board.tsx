import styles from '@/components/tickets/tickets-board/tickets-board.module.scss';
import Link from 'next/link';
import TicketsList from '@/components/tickets/tickets-list/tickets-list';

export default async function TicketsBoard() {
  return (
    <>
     <div className="flex justify-end">
       <Link href="/?show=true">
          <button
            className={`${styles.createTicketBnt} w-40 py-2 font-bold rounded-sm cursor-pointer`}>
            Create new ticket
          </button>
        </Link>
      </div>
      <TicketsList/>
    </>
  );
}
