
import Breadcrumb from "@/components/Breadcrumb";
import Pricing from "@/sections/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Web Design and Seo SaaS",
  description: "This is About Page for website",
};

const PricePage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Pricing"
      />
    <Pricing />
    </>
  );
};

export default PricePage;
