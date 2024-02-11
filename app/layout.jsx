import Menu from "@/app/components/Menu";
import Navbar from "@/app/components/Navbar";
import { poppins } from "@/styles/fonts";
import "@/styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Navbar />
        <main className="flex flex-col pt-10 px-20">{children}</main>
        <Menu />
      </body>
    </html>
  );
}
