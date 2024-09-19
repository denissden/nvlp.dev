import Image from "next/image";
import Footer from "@/app/footer";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Энвелоуп - ЭТО",
  description: "Что такое Энвелоуп",
};

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 max-w-3xl items-center sm:items-start">
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
          Энвелоуп (от англ. Envelope) - язык машинного программирования, разработанный исключительно для решения задачи
          реализации
          многофункционального web-фреймворка
          <code
            className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
            Ангуляй
          </code>
          .
        </p>
        <p
          className="list-inside list-decimal text-sm text-center sm:text-left font-bold font-[family-name:var(--font-geist-mono)]">
          Язык программирования Энвелоуп является лидирующим по росту в сфере инновационной разработки 2024 г. по странам
          ЕАЭС.
        </p>
        <p
          className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          В качестве ключевых технологий используются
          <code
            className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
            Дженерики
          </code>
          следующих типов:
        </p>
        <ul
          className="list-inside list-disc text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">Ковариантные python-подобные;</li>
          <li className="mb-2">Контравариантные java-подобные, версии kotlin v4.5;</li>
          <li>Интравариантные, не зависящие от архитектуры платформы.</li>
        </ul>
        <p
          className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          Реализация клиент-серверного взаимодействия использует протокол
          <code
            className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
            HTTP/2.0
          </code>
          .
          В качестве воспомогательных протоколов используются следующие инструменты на выбор пользователя:
          <code
            className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
            Kafka
          </code>
          ,
          <code
            className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
            RabbitMQ
          </code>
          и/или
          <code
            className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
            WebStorm
          </code>
          .
        </p>
        <p
          className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          Для получения дальнейшей информации о языке программирования Энвелоуп можно перейти по {" "}
          <a
            className="underline underline-offset-2 hover:underline-offset-4"
            href="https://github.com/denissden/envelope-lang"
            target="_blank"
            rel="noopener noreferrer">
            ссылке
          </a>
          .
        </p>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/"
            rel="noopener noreferrer"
          >
            ← Назад
          </a>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
