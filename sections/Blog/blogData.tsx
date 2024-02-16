import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "The best UI components for modern websites",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Suzi Jenk",
      image: "/images/blog/author-01.png",
      designation: "Content Writer",
    },
    tags: ["design"],
    publishDate: "19 Feb 2024",
  },
  {
    id: 2,
    title: "11 simple ways to enhance your web coding skills",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Suzi Jenk",
      image: "/images/blog/author-01.png",
      designation: "Content Writer",
    },
    tags: ["Website"],
    publishDate: "01 Feb 2024",
  },
  {
    id: 3,
    title: "17 Tips to swiftly enhance your SEO keyword strategy",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Suzi Jenk",
      image: "/images/blog/author-01.png",
      designation: "Content Writer",
    },
    tags: ["seo"],
    publishDate: "28 Jan 2024",
  },
];
export default blogData;
