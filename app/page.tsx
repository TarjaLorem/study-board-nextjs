import TicketsBoard from '@/components/tickets/tickets-board/tickets-board';
import Modal from '@/components/modals/modal';

export default async function Home({ searchParams }: { searchParams: Promise<{ show?: boolean }>}) {
  const { show } = await searchParams;
  return (
    <>
      <TicketsBoard/>
      { show && <Modal><div>Helooooooo</div></Modal> }
    </>
  );
}
