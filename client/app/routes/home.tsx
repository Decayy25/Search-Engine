import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    window.location.href = `/search?q=${query}`;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center mt-20">
      <h2 className="text-4xl font-bold mb-8">
        Search Everything 🔍
      </h2>

      <div className="flex w-full max-w-xl">
        <input
          type="text"
          placeholder="Search Google, YouTube..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 p-4 rounded-l-xl border-none outline-none bg-gray-200 dark:bg-gray-800"
        />
        <button
          onClick={handleSearch}
          className="px-6 rounded-r-xl bg-blue-500 hover:bg-blue-600 transition"
        >
          Search
        </button>
      </div>
    </motion.div>
  );
}