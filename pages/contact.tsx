import type { NextPage } from "next";
import Layout from "../components/Layout";
import React from "react";
import { useFormik } from "formik";
import { Input, Button } from "@chakra-ui/react";

const Contact: NextPage = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Layout>
      <div className="flex w-full flex-1 flex-col items-center justify-center px-20 py-4">
        <h1 className="text-4xl text-center font-bold text-blue-500 py-4">
          Contact Us
        </h1>
        <div className="w-3/5 py-2">
          <h2 className="text-2xl font-bold">Get in touch!</h2>
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <Input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />

            <Button type="submit">Submit</Button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
