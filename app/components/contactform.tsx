'use client';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { sendMail } from '@/lib/send-mail';
import { toast } from 'sonner';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Please Enter Your Name' }),
  email: z.string().email({ message: 'Please Enter a Valid Email Address' }),
  message: z
    .string()
    .min(10, { message: 'Please make sure your message is at least 10 characters long.' }),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
    const mailText = `Name: ${values.name}\nEmail: ${values.email}\nMessage: ${values.message}`;
    const response = await sendMail({
      email: values.email,
      subject: 'New Contact Us Form',
      text: mailText,
    });
    if (response?.messageId) {
      toast.success('Application Submitted Successfully.');
      form.reset();
    } else {
      toast.error('Failed To send application.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-[var(--foreground)] shadow-md rounded-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Us</h2>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name *
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your Name"
            {...form.register('name')}
            className="mt-1 block w-full bg-white rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          {form.formState.errors.name && (
            <p className="mt-1 text-sm text-red-600">{form.formState.errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email *
          </label>
          <input
            id="email"
            type="email"
            placeholder="yourname@example.com"
            {...form.register('email')}
            className="mt-1 block bg-white w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          {form.formState.errors.email && (
            <p className="mt-1 text-sm text-red-600">{form.formState.errors.email.message}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Enter your enquiry here?"
            {...form.register('message')}
            className="mt-1 block w-full h-30 bg-white rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          {form.formState.errors.message && (
            <p className="mt-1 text-sm text-red-600">{form.formState.errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full flex justify-center py-2 px-4 border  bg-[var(--primary)] border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
              isLoading ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700'
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
          >
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </div>
      </form>
    </div>
  );
}