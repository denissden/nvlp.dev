import Image from "next/image";
import Footer from "@/app/footer";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <header className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="/what-is-envelope"
            rel="noopener noreferrer"
          >
            🇺🇸 What is Envelope
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="/chto-takoe-envelope"
            rel="noopener noreferrer"
          >
            🇷🇺 Что такое Энвелоуп
          </a>
        </header>
        <Image
          className="dark:invert"
          src="/envelope.png"
          alt="Envelope.js logo"
          width={280}
          height={38}
          priority
        />
        <ol
          className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by {" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              npm i envelope-lang
              </code>
              .
            </li>
            <li className="mb-2">Write your code.</li>
            <li>Compile to {" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                envelope
              </code>
              .
            </li>
          </ol>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#38a838] dark:hover:bg-[#6c6] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="/examples"
              rel="noopener noreferrer"
            >
              Examples
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="/converter"
              rel="noopener noreferrer"
            >
              Convert ✉️
            </a>
          </div>
      </main>
      <Footer></Footer>
    </div>
);
}
