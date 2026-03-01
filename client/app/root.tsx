import { Outlet } from "react-router";
import { useEffect, useState } from "react";
import "./app.css";

export default function Root() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-all">
      <header className="flex justify-between items-center p-5 shadow-md bg-white dark:bg-gray-800">
        <h1 className="text-xl font-bold text-blue-500">
          MERB Search Engine
        </h1>

        <button
          onClick={() => setDark(!dark)}
          className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:scale-105 transition"
        >
          {dark ? "☀ Light" : "🌙 Dark"}
        </button>
      </header>

      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}