import { GraphQLServer } from "graphql-yoga";

// type definitions (schema)

//scaler type - string , boolean , int , float,ID => scaler type is a type just store a single value

// collection of disrete - object ,array

// age ! bezari hamishe string bar migardoone nazari mal zamani ke bekhai yemoghe haii null bargardoone
const typeDefs = `
    type Query {
        hello:String!
        name:String!
        location:String!
        bio:String!
    }
`;

// Resolvers
const resolvers = {
    Query: {
        hello() {
            return "this is my first query!";
        },
        name() {
            return "faceless";
        },
        location() {
            return "iran/rasht";
        },
        bio() {
            return "im nothing";
        }
    }
};

const server = new GraphQLServer({
    typeDefs,
    resolvers
});

server.start(() => {
    console.log("the server is up!");
});
