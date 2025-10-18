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
- **File**: [alx-rick-and-morty-app/README.md](./alx-rick-and-morty-app/README.md), [alx-rick-and-morty-app/graphql/apolloClient.ts](./graphql/apolloClient.ts), [alx-rick-and-morty-app/graphql/queries.ts](./graphql/queries.ts), [alx-rick-and-morty-app/pages/_app.tsx](./pages/_app.tsx)
