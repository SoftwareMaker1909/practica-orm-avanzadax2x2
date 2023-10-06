const { GraphQLObjectType, GraphQLSchema, GraphQLList, GraphQLString, GraphQLInt, GraphQLBoolean, GraphQLInputObjectType } = require('graphql');

const IcecreamType = new GraphQLObjectType({
  name: 'Icecream',
  fields: () => ({
    flavor: { type: GraphQLString },
    count: { type: GraphQLInt },
    is_season_flavor: { type: GraphQLBoolean },
  }),
});

const InventoryType = new GraphQLObjectType({
  name: 'Inventory',
  fields: () => ({
    shop: { type: ShopType },
    employee: { type: EmployeeType },
    icecream: { type: IcecreamType },
    date: { type: GraphQLString },
  }),
});

const ShopType = new GraphQLObjectType({
  name: 'Shop',
  fields: () => ({
    name: { type: GraphQLString },
  }),
});

const EmployeeType = new GraphQLObjectType({
  name: 'Employee',
  fields: () => ({
    name: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'Query',
  fields: {
    inventory: {
      type: new GraphQLList(InventoryType),
      resolve(parent, args) {
        // Lógica para obtener todos los elementos de inventario
      },
    },
    inventoryByFlavor: {
      type: new GraphQLList(InventoryType),
      args: { flavor: { type: GraphQLString } },
      resolve(parent, args) {
        // Lógica para obtener elementos de inventario por sabor
      },
    },
    inventoryByShop: {
      type: new GraphQLList(InventoryType),
      args: { shop: { type: GraphQLString } },
      resolve(parent, args) {
        // Lógica para obtener elementos de inventario por tienda
      },
    },
    inventoryByDate: {
      type: new GraphQLList(InventoryType),
      args: { date: { type: GraphQLString } },
      resolve(parent, args) {
        // Lógica para obtener elementos de inventario por fecha
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addInventory: {
      type: InventoryType,
      args: { inventory: { type: InventoryInputType } },
      resolve(parent, args) {
        // Lógica para agregar un nuevo elemento de inventario
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
