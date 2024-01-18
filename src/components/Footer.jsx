import { Typography } from "@material-tailwind/react";
import React from "react";

function Footer() {
  return (
    <footer className="bg-black flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-[100px] text-center md:justify-between">
      <Typography color="blue-gray" className="text-white ml-4 font-normal">
        © 2024 News Hub.
      </Typography>
      <ul className="text-white flex flex-wrap items-center gap-y-2 gap-x-8 mr-4">
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            About Us
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            License
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contribute
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contact Us
          </Typography>
        </li>
      </ul>
    </footer>
  );
}
export default Footer