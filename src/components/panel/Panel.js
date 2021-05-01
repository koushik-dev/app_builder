import React from "react";
import { NavLink as Link } from "react-router-dom";
import "./Panel.scss";

function Panel() {
  const links = [
    {
      name: "router",
      label: "Router",
    },
    {
      name: "design",
      label: "Design",
    },
    {
      name: "fetching",
      label: "Data fetching",
    },
    {
      name: "components",
      label: "Components",
    },
    {
      name: "hooks",
      label: "Hooks",
    },
  ];
  return (
    <aside className="bg-white bg-opacity-25 m-2 rounded-xl border-2 border-opacity-25 border-white backdrop-filter backdrop-blur-sm p-5 w-2/12">
      <ul className="list-none">
        {links.map((link) => (
          <li className="h-14" key={link?.name}>
            <Link
              to={link?.name}
              className="text-white backdrop-blur-md block p-2 text-lg font-bold rounded border-2 border-transparent"
              activeClassName="border-black"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Panel;
