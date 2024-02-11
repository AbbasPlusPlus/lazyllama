import { aztec } from "@/styles/fonts";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav
      className={`fixed z-10 top-0 bg-[#278789]  w-full p-4 ${aztec.className} font-extrabold`}
      style={{ fontSize: "2rem", letterSpacing: "0.3rem" }}
    >
      <Link href="/">Lazy Llama</Link>
    </nav>
  );
};

export default Navbar;
