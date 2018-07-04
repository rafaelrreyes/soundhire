import express from "express";

// initialize server
const app = express();
const port = process.env.PORT || 6200;

app.get('/api/musicians/get', (request, response) => {
    response.send({
        musicians: [
            {
                name: "Michael Jackson"
            },
            {
                name: "Kanye West"
            },
            {
                name: "Kobe Bryant"
            },
            {
                name: "Shaq"
            },
            {
                name: "Kareem"
            }
        ]
    });
});

app.listen(port, () => console.log(`listening on port ${port}`));