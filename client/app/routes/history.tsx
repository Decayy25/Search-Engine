import { useLoaderData } from "react-router";

export async function loader() {
  const res = await fetch("http://localhost:3000/history");
  return res.json();
}

export default function History() {
  const data = useLoaderData() as any[];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">
        Search History
      </h1>

      {data.length === 0 && (
        <p className="text-gray-500">
          No search history yet.
        </p>
      )}

      {data.map((item) => (
        <div
          key={item._id}
          className="border-b py-2"
        >
          <p className="font-semibold">
            {item.keyword}
          </p>
          <p className="text-sm text-gray-500">
            {new Date(item.createdAt).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}