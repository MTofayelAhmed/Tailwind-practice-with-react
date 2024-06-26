// import React from 'react';
import { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Contact",
      path: "/contact",
    },
    {
      id: 4,
      name: "Products",
      path: "/products",
    },
    {
      id: 5,
      name: "Services",
      path: "/services",
    },
  ];

  return (
    <nav className=" bg-purple-500 pl-10 " >
      <div onClick={() => setOpen(!open) } className="md:hidden">
        <span>
          {open === true ? (
            <XMarkIcon className="size-6 text-purple-700"></XMarkIcon>
          ) : (
            <Bars3Icon className="size-6 text-purple-700" />
          )}
        </span>
      </div>

      <ul
        className={`md:flex duration-500 bg-purple-400 pl-5 absolute  md:static ${
          open ? 'top-6' : '-top-48'
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
