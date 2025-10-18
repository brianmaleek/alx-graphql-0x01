# GraphQuest: Exploring and Implementing GraphQL

## Project Overview & Summary: The Rick and Morty GraphQL API Explorer

This project is a multi-phase learning journey designed to build proficiency in GraphQL, from writing basic queries to integrating them into a modern, full-stack React application. The project uses the popular [Rick and Morty API](https://rickandmortyapi.com/) as its data source, providing a fun and engaging context for learning.

The work is segmented into four distinct directories (`alx-graphql-0x00` to `alx-graphql-0x02`), each representing a progressive level of complexity and application.

## Learning Objectives

Upon completing this project, a learner will be able to:

- **Level 0 (GraphQL Fundamentals)**:

  - Construct precise GraphQL queries to request specific data.
  - Understand and use arguments (like `id` and `page`) to filter and paginate results.
  - Structure queries to include only the necessary fields, avoiding over-fetching of data.
  - Differentiate between querying for a single item and a paginated list of items.

- **Level 1 & 2 (Frontend Integration)**:

  - Set up a Next.js application with TypeScript, Apollo Client, and Tailwind CSS.
  - Configure Apollo Client to connect a React application to a GraphQL endpoint.
  - Use the `useQuery` hook to execute GraphQL operations within React components.
  - Manage local component state (e.g., for pagination) and refetch data based on state changes.
  - Structure a React application with clear separation of concerns (queries, interfaces, components).

## Key Concepts

- **GraphQL Query Language**: The core syntax for defining data requirements. It replaces the need for multiple REST endpoints with a single, flexible endpoint.
- **Schema and Types**: The Rick and Morty API defines types like `Character`, `Episode`, and `Info`, which dictate what data can be queried.
- **Arguments**: Used to be specific in data requests (e.g., `character(id: 1)` or `episodes(page: 2)`).
- **Pagination**: A common pattern for handling large datasets. The API uses an `Info` type containing data like pages, next, and prev to navigate through results.
- **Apollo Client**: A comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL. It handles caching, loading states, and error states.
- **React Integration**: Using Apollo Client’s `ApolloProvider` makes the client instance available throughout the component tree, and the `useQuery` hook seamlessly fetches and manages data within components.
- **TypeScript**: Adds static type definitions to the project, catching errors at compile time and providing better autocompletion and documentation. Interfaces are defined for the expected shape of the data from the GraphQL API.

## Tools and Libraries

- **Runtime/Environment**: Node.js
- **Framework**: Next.js (React framework with built-in routing, SSR capabilities, and optimizations)
- **Language**: TypeScript (superset of JavaScript)
- **GraphQL Client**: Apollo Client (for executing queries and managing state)
- **GraphQL Core Library**: graphql
- **Styling**: Tailwind CSS (utility-first CSS framework)
- **Linting**: ESLint (for identifying and fixing code problems)
- **API**: [Rick and Morty API GraphQL Endpoint](https://rickandmortyapi.com/graphql)

## Real-World Use Case

This project mimics the architecture of a modern content-driven web application, such as:

- An `E-commerce Product Catalog`: Querying for a specific product by ID (`character(id:...)`) or browsing paginated lists of products in a category (`characters(page:...)` or `episodes(page:...)`).
- A `Blog or News Platform`: Fetching a specific article or a list of articles with pagination. The `Episode` type is analogous to a blog post.
- A `Social Media Feed`: Loading paginated posts, comments, or a list of users.
- Any `Data-Dashboard`: Displaying filtered and paginated data from a complex backend in a clean UI.

The skills demonstrated—writing efficient queries, integrating with a React frontend, managing state, and using type systems—are directly transferable to building scalable, performant, and maintainable applications that rely on complex data from various sources. The move from simple query files to a fully typed application showcases a professional development workflow.

## 📝 Project Assessment (Hybrid)

Your project will be evaluated primarily through manual reviews. To ensure you receive your full score, please:

✅ Complete your project on time
📄 Submit all required files
🔗 Generate your review link
👥 Have your peers review your work

An auto-check will also be in place to verify the presence of core files needed for manual review.

⏰ Important Note
If the deadline passes, you won’t be able to generate your review link—so be sure to submit on time!

We’re here to support your learning journey. Happy coding! ✨

## Tasks

### 3. Application of GraphQL in React

**mandatory**

**Objectives**: To kickstart the development of your rick and morty application using Next.js, you will set up a new project with TypeScript, ESLint, and Tailwind CSS.

**Instructions**:

- Create a project `alx-rick-and-morty-app` in `alx-graphql-0x01` directory
- Change directory into `alx-rick-and-morty-app`
- Install the following dependencies:

```bash
npm install @apollo/client graphql
npm install @types/graphql
```

- Create an empty directory named: `graphql` in your root directory
- Create an empty file `apolloClient.ts` under `graphql` directory
- Replace the content of the file with the follow:

```typescript
import { ApolloClient, InMemoryCache, HttpLink} from "@apollo/client"

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://rickandmortyapi.com/graphql"
  }),
  cache: new InMemoryCache()
})

export default client;
```

- Create an empty file `queries.ts` under graphql directory
- Replace the content of the file with the follow:

```typescript
import { gql } from "@apollo/client";

export const GET_EPISODES = gql`
  query getEpisodes($page: Int, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
      info {
        pages
        next
        prev
        count
      }
      results {
        id
        name
        air_date
        episode
      }
    }
  }
`;
```

- Open your `_app.tsx` file located under `pages` directory

- Replace the content with the follow:

```typescript
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "@/graphql/apolloClient";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
```

- Save and close your files
- Run `npm run dev` from the terminal
- From a tab in your browser type `http://localhost:3000` to see the changes made.

**Repo**:

- **GitHub repository**: **alx-graphql-0x01**
- **Directory**: **alx-rick-and-morty-app**
- **File**: [alx-rick-and-morty-app/README.md](./alx-rick-and-morty-app/README.md), [alx-rick-and-morty-app/graphql/apolloClient.ts](./alx-rick-and-morty-app/graphql/apolloClient.ts), [alx-rick-and-morty-app/graphql/queries.ts](./alx-rick-and-morty-app/graphql/queries.ts), [alx-rick-and-morty-app/pages/_app.tsx](./alx-rick-and-morty-app/pages/_app.tsx)

### 4. Query the graphql endpoint

**mandatory**

**Objectives**: Learn to query the Rick and Morty GraphQL endpoint to retrieve data about episodes.

**Instructions**:

- Duplicate `alx-graphql-0x01` to `alx-graphql-0x02`
- Change directory to `alx-rick-and-morty-app`
- Create an empty directory named: `interfaces` under the root directory
- Create an empty file name: `index.ts` under the `interfaces` directory
- Replace the content with the follow:

```typescript
interface InfoProps {
    pages: number
    next: number
    prev: number
    count: number
}

export interface EpisodeProps {
  id: number
  name: string
  air_date: string
  episode: string
  info: InfoProps
}

export type EpisodeCardProps = Pick<EpisodeProps, 'id' | 'name'| 'air_date' | "episode">
```

- Open your `index.tsx` file located under `pages` directory
- Replace the content with the follow:

```typescript
import { useQuery } from "@apollo/client"
import { GET_EPISODES } from "@/graphql/queries"
import { EpisodeProps } from "@/interfaces"
import EpisodeCard from "@/components/common/EpisodeCard"
import { useEffect, useState } from "react"


const Home: React.FC = () => {

  const [page, setPage] = useState<number>(1)
  const { loading, error, data, refetch } = useQuery(GET_EPISODES, {
    variables: {
      page: page
    }
  })

  useEffect(() => {
    refetch()
  }, [page, refetch])

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>Error</h1>

  const results = data?.episodes.results
  const info = data?.episodes.info

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#A3D5E0] to-[#F4F4F4] text-gray-800">
      {/* Header */}
      <header className="bg-[#4CA1AF] text-white py-6 text-center shadow-md">
        <h1 className="text-4xl font-bold tracking-wide">Rick and Morty Episodes</h1>
        <p className="mt-2 text-lg italic">Explore the multiverse of adventures!</p>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {results && results.map(({ id, name, air_date, episode }: EpisodeProps, key: number) => (
            <EpisodeCard
              id={id}
              name={name}
              air_date={air_date}
              episode={episode}
              key={key}
            />
          ))}
        </div>

        {/* Pagination Buttons */}
        <div className="flex justify-between mt-6">
          <button 
            onClick={() => setPage(prev => prev > 1 ? prev - 1 : 1)}
            className="bg-[#45B69C] text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-[#3D9B80] transition duration-200 transform hover:scale-105">
            Previous
          </button>
          <button 
            onClick={() => setPage(prev => prev < info.pages ? prev + 1 : prev)}
            className="bg-[#45B69C] text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-[#3D9B80] transition duration-200 transform hover:scale-105">
            Next
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#4CA1AF] text-white py-4 text-center shadow-md">
        <p>&copy; 2024 Rick and Morty Fan Page</p>
      </footer>
    </div>
  )
}

export default Home
```

- Create the following file `components/common/EpisodeCard.tsx`

- Replace the content of the file with the follow:

```typescript
import { EpisodeCardProps } from "@/interfaces";

const EpisodeCard = ({ id, name, air_date, episode }: EpisodeCardProps) => {
  return (
    <div key={id} className="bg-white cursor-pointer shadow-md rounded-lg p-4 m-4 transition-transform duration-200 hover:scale-105">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <span className="border px-2 text-xs rounded-full bg-blue-600 text-white flex items-center">{episode}</span>
      </div>
      <p className="text-gray-600">{air_date}</p>
    </div>
  );
};

export default EpisodeCard;
```

- Save and close your files
- Run `npm run dev` from the terminal
- From a tab in your browser type `http://localhost:3000` to see the changes made.

**Repo**:

- **GitHub repository**: **alx-graphql-0x02**
- **Directory**: **alx-rick-and-morty-app**
- **File**: [alx-rick-and-morty-app/README.md](./alx-rick-and-morty-app/README.md), [alx-rick-and-morty-app/components/common/EpisodeCard.tsx](./alx-rick-and-morty-app/components/common/EpisodeCard.tsx), [alx-rick-and-morty-app/interfaces/index.ts](./alx-rick-and-morty-app/interfaces/index.ts), [alx-rick-and-morty-app/pages/index.tsx](./alx-rick-and-morty-app/pages/index.tsx)
