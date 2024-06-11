"use client";
import React, { FC } from "react";
import { useRouter } from "next/navigation";

const Header: FC = () => {
  const router = useRouter();

  return (
    <div>
      <nav className="flex h-20 items-center px-[120px] justify-between bg-[#002F34] text-white font-semibold">
        <div>
          <img
            className="h-11 cursor-pointer"
            src="https://logos-world.net/wp-content/uploads/2022/04/OLX-Logo.png"
            alt="olx"
            onClick={() => router.push("/")}
          />
        </div>
        <ul className="flex gap-[60px] items-center">
          <button className="text-black bg-white px-4 py-3 rounded-md">
            <a
              href="/create"
              className="hover:text-white hover:bg-[#002F34] px-3 py-2"
            >
              Подать обьявление
            </a>
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
