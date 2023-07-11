import { typeDefs } from "./src/Schema/Session.js";
import { ApolloServer } from "apollo-server";
import dataSources from "./src/dataSource/index.js"

const resolvers = {
    Query: {
        sessions: (parent, args, { dataSources }, info) => {
            return dataSources?.sessionsAPI.getSessions()
        },
        sessionById: (parent, { id }, { dataSources }, info) => {
            return dataSources?.sessionsAPI.getSessionById(id)
        }
    }
}

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