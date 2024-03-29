import { useRouter } from "next/router";
import requests from "../utils/requests";

const Nav = () => {
  const router = useRouter();
  return (
    <nav className="relative">
      <div
        className="flex px-10 sm:px-20
           whitespace-nowrap space-x-10
           sm:space-x-20 overflow-x-scroll scrollbar-hide"
      >
        {Object.entries(requests).map(([key, { title, url }]) => {
          return (
            <h2
              key={key}
              onClick={() => router.push(`?genre=${key}`)}
              className="cursor-pointer transition duration-199
                    transform hover:scale-125 hover:text-white
                    active:text-red-500"
            >
              {title}
            </h2>
          );
        })}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12"></div>
      <div className="absolute top-0 left-0 bg-gradient-to-r from-[#06202A] h-10 w-1/12"></div>
    </nav>
  );
};

export default Nav;
