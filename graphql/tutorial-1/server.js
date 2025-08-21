import express from "express";
import { createHandler } from "graphql-http/lib/use/express";
import { buildSchema } from "graphql";

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
    type Query {
        hello: String
    }
`);

// The rootValue provides a resolver function for each API endpoint
var rootValue = {
    hello() {
        return "Hello world!"
    },
};

const app = express();

// Create and use the GraphQL handler
app.all(
    "/graphql",
    createHandler({
    schema,
    rootValue: rootValue,
})
);

// Start the server at port 4000
app.listen(4000, () => {
    console.log("Running a GraphQL API server  at http://localhost:4000/graphql");
});