import { typeDefs } from "./src/Schema/Session.js";
import { ApolloServer } from "apollo-server";
import SessionAPI from "./src/dataSource/sessions.js"

const dataSources = () => ({
    sessionsAPI: new SessionAPI()
})

const resolvers = {
    Query: {
        sessions: (parent, args, { dataSources }) => {
            return dataSources?.sessionsAPI.getSessions()
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