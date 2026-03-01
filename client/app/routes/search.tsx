import { useLoaderData } from "react-router";

export async function loader({ request }: any) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");

  if (!q) return { youtube: [], wikipedia: [], duckduckgo: [] };

  const res = await fetch(
    `http://localhost:3000/search?q=${q}`
  );

  return res.json();
}

export default function Search() {
  const data = useLoaderData() as any;

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">
        YouTube Results
      </h2>

      {data.youtube?.map((item: any) => (
        <div key={item.id.videoId} className="mb-3">
          <p className="font-semibold">
            {item.snippet.title}
          </p>
        </div>
      ))}

      <h2 className="text-2xl font-bold mt-8 mb-4">
        Wikipedia Results
      </h2>

      {data.wikipedia?.map((item: any) => (
        <div key={item.pageid} className="mb-3">
          <p className="font-semibold">{item.title}</p>
        </div>
      ))}

      <h2 className="text-2xl font-bold mt-8 mb-4">
        DuckDuckGo Results
      </h2>

      {data.duckduckgo?.map((item: any) => (
        <div key={item.id} className="mb-3">
          <p className="font-semibold">{item.title}</p>
        </div>
      ))}
    </div>
  );
}