import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql, createHttpLink
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_,  { headers }) => {
  // This will get the authentication token from the localStorage if any
  const token = localStorage.getItem('id_token');
  // Returns headers to the httpLink to be read
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Outlet />
    </ApolloProvider>
  );
}

export default App;
