import Breadcrumb from "@/components/Breadcrumb";
import Contact from "@/sections/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Web Design and Seo SaaS",
  description: "This is Contact Page for website",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact"
      />
      <Contact />
    </>
  );
};

export default ContactPage;
