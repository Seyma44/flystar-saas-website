import AboutSection from "@/sections/About/AboutSection";
import Solutions from "@/sections/About/Solutions";
import Blog from "@/sections/Blog";
import Brands from "@/sections/Brands";
import ScrollUp from "@/components/ScrollToTop/ScrollUp";
import Contact from "@/sections/Contact";
import Features from "@/sections/Features";
import Hero from "@/sections/Hero";
import Pricing from "@/sections/Pricing";
import Testimonials from "@/sections/Testimonials";
import Video from "@/sections/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design and Seo SaaS",
  description: "This is Home for website",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <AboutSection />
      <Solutions />
      <Pricing />
      <Brands />
      <Video />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
}
