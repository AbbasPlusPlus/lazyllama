import { aztec, poppins } from "@/styles/fonts";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center text-black-800 py-4 px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-center text-black-900 ${aztec.className} font-extrabold`}
          style={{ fontSize: "4rem", letterSpacing: "0.5rem" }}
        >
          Welcome to Lazy Llama
        </h2>
        <p
          className={`mt-6 max-w-2xl text-lg leading-7 sm:text-2xl sm:leading-9 lg:text-3xl ${poppins.className} mx-auto`}
        >
          <span className="font-bold"> Lazy Llama</span> is an application built
          with{" "}
          <span className="font-bold">Langchain, OpenAI, and Next.js.</span> It
          has several different features, such as:{" "}
          <span className="font-bold">
            Youtube video summarization, PDF conversations, and AI content
            creation.
          </span>
        </p>
      </div>
    </div>
  );
}
