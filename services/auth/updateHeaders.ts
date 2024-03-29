import { ApolloClient, HttpLink, ApolloLink } from "@apollo/client";

export default function updateHeaders(
  client: ApolloClient<unknown>,
  httpLink: ApolloLink,
  newHeaderValue: string
): void {
  client.setLink(
    ApolloLink.from([
      new ApolloLink((operation, forward) => {
        operation.setContext({
          headers: {
            "pickleball-access-token": newHeaderValue,
          },
        });
        return forward(operation);
      }),
      httpLink,
    ])
  );
}
