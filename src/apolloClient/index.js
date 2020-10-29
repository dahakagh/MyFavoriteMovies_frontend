import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = createHttpLink({
    uri: process.env.GRAPHQL_SERVER_URL,
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('user');
    return {
        headers: {
        ...headers,
        autorization: token ? token : "",
    }
    }
})

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
})

export default client