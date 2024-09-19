"use client"

import {compile} from "envelope-lang/dist/compile";
import Image from "next/image";
import Footer from "@/app/footer";
import {useState} from "react";


export default function Home() {
  const [envelope, setEnvelope] = useState(`hello() {
  console.log("Hello world")
  return true
}

value, err = hello()

if (err != nil) {
  // panic
}`);
  const [js, setJs] = useState(compile(envelope));

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-8 gap-8 sm:p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/envelope.png"
          alt="Envelope.js logo"
          width={280}
          height={38}
          priority
        />
        <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
          Envelope code:
        </code>
        <textarea
          className="list-inside list-decimal text-sm text-center sm:text-left bg-background text-[#186818] dark:text-[#6c6] font-[family-name:var(--font-geist-mono)]"
          name="envelope" id="envelope" cols={80} rows={10}
          value={envelope}
          onChange={(e) => {
            setEnvelope(e.target.value);
            setJs(compile(e.target.value));
          }}></textarea>

        <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
          Compiled javascript
        </code>
        <textarea
          className="list-inside list-decimal text-sm text-center sm:text-left bg-background  text-[#186818] dark:text-[#6c6] font-[family-name:var(--font-geist-mono)]"
          name="envelope" id="envelope" cols={80} rows={12} value={js} readOnly={true}></textarea>
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

