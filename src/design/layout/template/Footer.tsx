import { Link } from "react-router-dom";
import { footers } from "@/assets";

export default function Footer() {
  return (
    <div className="mt-160 bg-black ">
      <div className="flex justify-center pt-40">
        {footers.map(({ link, src, alt }) => (
          <Link key={link} to={link}>
            <img src={src} alt={alt} className="w-7.5 h-7.5 mr-2.5" />
          </Link>
        ))}
      </div>
      <div className="font-bold flex justify-center pt-1 text-white">
        © 2024 DEVRIDGE, All rights reserved. di
      </div>
    </div>
  );
}
