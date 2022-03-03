import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'
import { setContext } from '@apollo/client/link/context';



const httpLink = new HttpLink({
    // You should use an absolute URL here
    uri: 'http://localhost:8080/v1/graphql',
})


const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = window.localStorage.getItem('token');
    console.log("token is this from ", token);
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            'Content-Type': 'application/json',
            authorization: token ? `Bearer ${token}` : undefined,
            "x-hasura-admin-secret": 'superpassword',
        }
    }
});

// Create the apollo client
const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    connectToDevTools: true,
})

// Create a provider
const apolloProvider = createApolloProvider({
    defaultClient: apolloClient,
})

export default apolloProvider