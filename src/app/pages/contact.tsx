import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";

export default function Contact() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    alert(`Message sent: ${JSON.stringify(data)}`);
  };

  return (
    <div className="bg-secondary min-h-screen text-white">
      <Navbar />
      <main className="p-10 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold">Contact Me</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
          <label className="block text-gray-300">Name</label>
          <input {...register("name")} className="w-full p-3 rounded bg-gray-700 text-white mt-2" />

          <label className="block mt-4 text-gray-300">Email</label>
          <input type="email" {...register("email")} className="w-full p-3 rounded bg-gray-700 text-white mt-2" />

          <label className="block mt-4 text-gray-300">Message</label>
          <textarea {...register("message")} className="w-full p-3 rounded bg-gray-700 text-white mt-2"></textarea>

          <button type="submit" className="mt-6 px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-600">
            Send Message
          </button>
        </form>
      </main>
    </div>
  );
}
