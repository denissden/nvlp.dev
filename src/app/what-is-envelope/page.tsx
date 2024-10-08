import Image from "next/image";
import Footer from "@/app/footer";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "What is Envelope",
  description: "What is Envelope",
};

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/envelope.png"
          alt="Envelope.js logo"
          width={280}
          height={38}
          priority
        />
        <p
          className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          Page in development. Stay tuned.
        </p>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/"
            rel="noopener noreferrer"
          >
            ← Back
          </a>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
