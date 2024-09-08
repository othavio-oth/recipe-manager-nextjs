"use client";

import Link from "next/link";

const Header: React.FC = () => {
  return (
    <div className="w-full bg-red-500	text-stone-50">
      <ul className="flex gap-4 p-4">
        <li className="hover:underline">
          <Link href={"/ingredients"}>Ingredients</Link>
        </li>
        <li className="hover:underline">
          <Link href={"/recipes"}>Recipes</Link>
        </li>
        <li className="hover:underline">
          <Link href={"/units-of-measurements"}>Units Of Measurements</Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;
