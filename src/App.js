import React, { Component, Fragment } from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient , {InMemoryCache} from 'apollo-boost';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// Import component
import Header from './components/Layout/Header';
import Clientes from './components/Clientes/Clientes';
import EditarCliente from './components/Clientes/EditarCliente';
import NuevoCliente from './components/Clientes/NuevoCliente';
import NuevoProducto from './components/Productos/NuevoProducto'
import Productos from './components/Productos/Productos';
import EditarProducto from './components/Productos/EditarProducto';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache({
    addTypename: false
  }),
  onError: ({ networkError, graphqlErros }) => {
    console.log('graphQLErrors', graphqlErros);
    console.log('networkError', networkError);
  }
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Fragment>
            <Header/>
                <div className="container">
                  <Switch>
                    <Route exact path="/" component={Clientes}/>
                    <Route exact path="/cliente/nuevo" component={NuevoCliente}/>
                    <Route exact path="/cliente/editar/:id" component={EditarCliente}/>
                    <Route exact path="/productos/nuevo" component={NuevoProducto}/>
                    <Route exact path="/productos" component={Productos}/>
                    <Route exact path="/productos/editar/:id" component={EditarProducto}/>
                  </Switch>
                </div>
          </Fragment>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
