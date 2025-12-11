import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Mail } from "lucide-react";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wtjg0n7",
        "template_7uhexoq",
        form.current,
        "dZsv0hjD-6CReFWDB"
      )
      .then(
        (result) => {
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setStatus("Failed to send message. Try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-16 px-8 bg-gray-900 text-center">
      <h2 className="text-4xl font-bold text-indigo-500 flex justify-center items-center gap-2 mb-10">
        <Mail /> Contact Me
      </h2>

      <form ref={form} onSubmit={sendEmail} className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-2 rounded bg-gray-800 text-white outline-none"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-2 rounded bg-gray-800 text-white outline-none"
        />
        <textarea
          rows="5"
          name="message"
          placeholder="Your Message"
          required
          className="w-full px-4 py-2 rounded bg-gray-800 text-white outline-none"
        ></textarea>

        <button
          type="submit"
          className="bg-indigo-500 px-6 py-2 rounded-lg text-white hover:bg-indigo-600"
        >
          Send Message
        </button>
      </form>

      {status && (
        <p className="text-green-400 mt-4 text-lg">{status}</p>
      )}
    </section>
  );
};

export default Contact;
