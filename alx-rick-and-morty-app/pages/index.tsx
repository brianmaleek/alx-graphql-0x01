import { useQuery } from "@apollo/client/react";
import { GET_EPISODES } from "@/graphql/queries";

export default function Home() {
  const { loading, error, data } = useQuery(GET_EPISODES, {
    variables: {
      page: 1,
      // filter: { name: "Pilot" } // optional filter
    }
  });

  console.log("Query state:", { loading, error, data });

  if (loading) return <p className="p-8">Loading episodes...</p>;
  if (error) return <p className="p-8 text-red-500">Error: {error.message}</p>;

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Rick and Morty Episodes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.episodes?.results?.map((episode: any) => (
          <div key={episode.id} className="border rounded p-4">
            <h2 className="font-bold">{episode.name}</h2>
            <p className="text-sm text-gray-600">Episode: {episode.episode}</p>
            <p className="text-sm text-gray-500">Aired: {episode.air_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}