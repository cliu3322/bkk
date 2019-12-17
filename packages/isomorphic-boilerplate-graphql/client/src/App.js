import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import GlobalStyles from '@iso/assets/styles/globalStyle';
import AppRoutes from './AppRoutes';
const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: `Bearer ${'b97d3ee943dda1ebb35b3ba4339e7a5b22a09fa7'}`,
  },
});
function App() {
  return (
    <ApolloProvider client={client}>
      <>
        <GlobalStyles />
        <AppRoutes />
      </>
    </ApolloProvider>
  );
}

export default App;
