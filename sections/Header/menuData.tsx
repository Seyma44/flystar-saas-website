import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Pricing",
    path: "/pricing",
    newTab: false,
  },
  {
    id: 4,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 5,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  {
    id: 6,
    title: "Forums",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "Collob",
        path: "/",
        newTab: false,
      },
      {
        id: 62,
        title: "Design",
        path: "/",
        newTab: false,
      },
      {
        id: 63,
        title: "Webco",
        path: "/",
        newTab: false,
      },
    ],
  },
];
export default menuData;
