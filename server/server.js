const path = require("path");
const express = require("express");
const { authMiddleware } = require("./utils/auth");

const { ApolloServer } = require("apollo-server-express");

const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();

const startServer = async() => {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: authMiddleware
    });

    await server.start();
    server.applyMiddleware({ app });

    console.log(`Use GraphQl at http://localhost:${PORT}${server.graphqlPath}`);
};

startServer();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../footy-fellas/build")));
}

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../footy-fellas/public/index.html"));
});

db.on("error", () => {
    console.log("Failed to connect to mongoose...");
});

db.once("open", () => {
    app.listen(PORT, () => {
        console.log(`API server running on PORT ${PORT}`);
    });
});


