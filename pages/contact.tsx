import type { NextPage } from "next";
import Layout from "../components/Layout";
import React from "react";
import { useFormik } from "formik";
import { Input, Button } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";

const Contact: NextPage = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      subject: "",
      message: "",
    },
    onSubmit: (values) => {
      window.open(
        `mailto:littlethetfordnetballclub@hotmail.com?subject=${values.subject}&body=${values.message}`
      );
    },
  });
  return (
    <Layout>
      <div className="flex w-full flex-1 flex-col items-center justify-center sm:px-20 py-4">
        <h1 className="text-4xl text-center font-bold text-blue-500 py-8">
          Contact Us
        </h1>
        <div className="w-4/5 sm:w-3/5 py-2">
          <h2 className="text-2xl font-bold leading-10">Get in touch!</h2>
          <form className="py-2" onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Name</label>
            <Input
              id="name"
              name="name"
              type="name"
              size="lg"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            <label htmlFor="subject">Subject</label>
            <Input
              id="subject"
              name="subject"
              type="subject"
              size="lg"
              onChange={formik.handleChange}
              value={formik.values.subject}
            />
            <label htmlFor="message">Message</label>
            <Textarea
              id="message"
              name="message"
              size="lg"
              onChange={formik.handleChange}
              value={formik.values.message}
            />
            <Button type="submit">Send</Button>
            <p className="text-xl py-4">
              Alternatively you can send an email direct to{" "}
              <a
                href="mailto:littlethetfordnetballclub@hotmail.com"
                target="about:blank"
                className="underline"
              >
                littlethetfordnetballclub@hotmail.com
              </a>
            </p>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
