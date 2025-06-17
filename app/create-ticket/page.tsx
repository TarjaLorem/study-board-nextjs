import Form from 'next/form';
import styles from './page.module.scss'

export default function CreateTicketPage() {
  return (
    <Form action="../components/tickets-list" className={`${styles.form} flex flex-col justify-between p-4 w-120 h-80 rounded-lg`}>
      <div className="flex flex-col justify-between">
        <label className="text-lg mb-2" htmlFor="name">Name your ticket</label>
        <input className="rounded-sm border-black outline p-2" type="text" id="name" name="name"/>
      </div>

      <div className="flex flex-col justify-between">
        <label className="text-lg mb-2" htmlFor="description">Add some description</label>
        <textarea className="rounded-sm border-black outline p-2" rows={3} id="description" name="description"/>
      </div>

        <button className={`${styles.submitBtn} py-2 font-bold rounded-sm`} type="submit">Create ticket</button>
    </Form>
);
}
