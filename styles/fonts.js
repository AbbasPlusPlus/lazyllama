import { Poppins } from "next/font/google";
import localFont from "next/font/local";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

const aztec = localFont({
  src: "./Aztec.ttf",
});

export { aztec, poppins };
