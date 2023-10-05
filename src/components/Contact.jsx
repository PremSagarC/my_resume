import React, { useRef, useState } from "react";
import EarthCanvas from "./canvas/Earth";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import dotenv from "dotenv";
import SendIcon from "@mui/icons-material/Send";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";

function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = async (e) => {
    const { target } = e;
    const { name, value } = target;

    await setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Prem Sagar Charma",
          from_email: form.email,
          to_email: "premcharma82@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Thank you. I will get back to you as soon as possible."
          );

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert(
            "Something went wrong. Please try again."
          );
          {
            passive: true;
          }
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p
          className={`flex justify-center text-center${styles.sectionSubText}`}
        >
          Let have a Chat!
        </p>
        <p
          className={`flex justify-center text-center${styles.sectionHeadText}`}
        >
          Contact Me.
        </p>
        <div className="flex flex-row justify-center gap-4 mt-5">
          <a
            href="mailto:+premcharma82@gmail.com"
            className=" flex items-center justify-center gap-2 border py-2 px-4 hover:text-red-500 hover:border-red-400 rounded-md"
          >
            <EmailIcon />
            <p>Email</p>
          </a>
          <a
            href="tel:+917619438823"
            className="flex items-center justify-center gap-2 border py-2 px-4 hover:text-green-500 hover:border-green-400 rounded-md"
          >
            <CallIcon />
            <p>Mobile</p>
          </a>
        </div>
        <form
          onSubmit={handleSubmit}
          ref={formRef}
          className="mt-12 flex flex-col gap-8"
        >
          <label htmlFor="" className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Please Enter Your Good Name"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label htmlFor="" className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your Email
            </span>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Please Enter Your Email Address"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label htmlFor="" className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your Message
            </span>
            <textarea
              rows={7}
              type="text"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Enter Your Message here"
              className="message bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <div className="flex justify-center">
            {loading ? (
              <button
                type="submit"
                className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary "
              >
                Sending...
              </button>
            ) : (
              <button
                type="submit"
                className=" bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:text-black-100 hover:bg-white transition-all ease-in-out duration-[400ms]"
              >
                Send <SendIcon />
              </button>
            )}
          </div>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
}
export default SectionWrapper(Contact, "contact");
