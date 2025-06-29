"use client"

import styles from '@/app/create-ticket/page.module.scss';
import { createTicket } from '@/utils/actions/create-ticket';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createTicketSchema, CreateTicketSchemaType } from '@/types/schemas/create-ticket-schema';
import { toast } from 'react-hot-toast';
import { redirect } from 'next/navigation';

export default function CreateTicketForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CreateTicketSchemaType>({
    resolver: zodResolver(createTicketSchema),
    mode: 'all'
  });

  const submitForm = async (data: CreateTicketSchemaType) => {
    reset();
    const response = await createTicket(data);
    console.log(response);
    if (response?.error) {
      toast.error('Something went wrong');
    }

    if (response?.message) {
      toast.success(response?.message);
    }

    redirect('/tickets-list');
  }

  return (
    <form onSubmit={handleSubmit(submitForm)} className={`${styles.form} flex flex-col justify-between p-4 w-120 rounded-lg`}>
      <div className="flex flex-col justify-between">
        <label className="text-lg mb-2" htmlFor="name">Name your ticket</label>
        <input
          {...register('name')}
          className="rounded-sm border-black outline p-2"
          type="text"
          id="name"
          name="name"
        />
        {
          errors.name && (
            <div className="text-red-500 mt-2">{`${errors.name.message}`}</div>
          )
        }
      </div>

      <div className="flex flex-col justify-between">
        <label className="text-lg mb-2" htmlFor="description">Add some description</label>
        <textarea
          {...register('description')}
          className="rounded-sm border-black outline p-2"
          rows={3}
          id="description"
          name="description"
        />
        {
          errors.description && (
            <div className="text-red-500 mt-2">{`${errors.description.message}`}</div>
          )
        }
      </div>
      <button
        className={`${styles.submitBtn} py-2 font-bold rounded-sm mt-4 cursor-pointer`}
        type="submit"
        disabled={isSubmitting}
      >Create ticket
      </button>
    </form>
  );
}
