import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4ow13oy17x201z4ab8mdbqm/master",
  cache: new InMemoryCache()
});