import React, { Suspense } from "react";
import "./i18n";
import ReactDOM from "react-dom";
import "./assets/main.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";

const token = localStorage.getItem("user")

const httpLink = {
  uri: process.env.GRAPHQL_SERVER_URL,
  headers: {
    ...headers,
    authorization: token ? token : "",
  }
};

const client = new ApolloClient({
  link: new HttpLink(httpLink),
  cache: new InMemoryCache()
});


ReactDOM.render(
  <ApolloProvider client={client}>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
