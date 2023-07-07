import {gql} from "apollo-server";
export const typeDefs = gql`

type Query {
    sessions: [Session]
}

type Session {
    id: ID!,
    title: String,
    description: String,
    startsAt: String,
    endsAt: String,
    room: String,
    day: String,
    format: String,
    track: String,
    level: String
}`