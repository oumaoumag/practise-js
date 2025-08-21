import express from "express";
import { createHandler } from "graphql-http/lib/use/express";
import { buildSchema } from "graphql";
import { ruruHTML } from "ruru/server";

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
    type Query {
        hello: String
        number: Int
        name: String
    }
`);

// The rootValue provides a resolver function for each API endpoint
var rootValue = {
    hello() {
        return "Hello world!"
    },
    number() {
        return 5
    },
    name() {
        return "Ouma Ouma"
    }
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

// Serve the GraphiQL.
app.get("/", (_req, res) => {
    res.type("html");
    res.end(ruruHTML({ endpoint: "/graphql" }));
});

// Start the server at port 4000
app.listen(4000, () => {
    console.log("Running a GraphQL API server  at http://localhost:4000/graphql");
});