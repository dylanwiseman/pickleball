import { createHttpLink, ApolloClient, InMemoryCache } from "@apollo/client";

// if you are getting "network request failed", make sure this ip is accurate, machine's internal IP:
export const httpLink = createHttpLink({
  uri: "http://192.168.1.129:4000/graphql",
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
