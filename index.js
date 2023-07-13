import { typeDefs } from "./src/Schema/Session.js";
import { ApolloServer } from "apollo-server";
import dataSources from "./src/dataSource/index.js"
import {resolvers} from "./src/resolvers/index.js"

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources
});

server
    .listen({port: process.env.PORT || 4000})
    .then(({ url }) => {
        console.log(`🚀🚀 GraphQL server running at ${url} 🚀🚀`)
    })