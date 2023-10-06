const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

// Define el esquema GraphQL
const typeDefs = gql`
  type Query {
    inventory: [Inventory!]!
    inventoryByFlavor(flavor: String!): [Inventory!]!
    inventoryByShop(shop: String!): [Inventory!]!
    inventoryByDate(date: String!): [Inventory!]!
  }

  type Mutation {
    addInventory(inventory: InventoryInput!): Inventory!
  }

  input InventoryInput {
    shop: ShopInput!
    employee: EmployeeInput!
    icecream: IcecreamInput!
    date: String!
  }

  input IcecreamInput {
    flavor: String!
    count: Int!
    is_season_flavor: Boolean!
  }

  input ShopInput {
    name: String!
  }

  input EmployeeInput {
    name: String!
  }

  type Icecream {
    flavor: String!
    count: Int!
    is_season_flavor: Boolean!
  }

  type Inventory {
    shop: Shop!
    employee: Employee!
    icecream: Icecream!
    date: String!
  }

  type Shop {
    name: String!
  }

  type Employee {
    name: String!
  }
`;

// Resolvers para el esquema GraphQL
const resolvers = {
  Query: {
    // Implementa las funciones de resolución para las consultas aquí
  },
  Mutation: {
    // Implementa las funciones de resolución para las mutaciones aquí
  },
};

// Crea una instancia de Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Crea una instancia de Express
const app = express();

// Conecta Apollo Server a Express
server.applyMiddleware({ app });

// Puerto en el que escuchará el servidor
const PORT = process.env.PORT || 4000;

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor GraphQL en funcionamiento en http://localhost:${PORT}${server.graphqlPath}`);
});
