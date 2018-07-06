import express from "express";

// initialize server
const app = express();
const port = process.env.PORT || 6200;

app.get('/api/musicians/get', (request, response) => {
    response.send({
        musicians: [
            {
                user_id: 1,
                name: "Michael Jackson",
                img_url: 1,
                rating: 4,
                genre: "pop",
                instrument: "microphone",
                description: ""
            },
            {
                user_id: 2,
                name: "Kanye West",
                img_url: 2,
                rating: 5,
                genre: "hip hop",
                instrument: "akai beatmaker",
                description: ""
            },
            {
                user_id: 3,
                name: "Dan Auerbach",
                img_url: 3,
                rating: 4,
                genre: "alternative blues rock",
                instrument: "guitar",
                description: ""
            },
            {
                user_id: 4,
                name: "Sting",
                img_url: 4,
                rating: 3,
                genre: "ska rock",
                instrument: "bass",
                description: ""
            },
            {
                user_id: 5,
                name: "Rafael Reyes",
                img_url: 5,
                rating: 1,
                genre: "indie rock",
                instrument: "drums/percussion",
                description: ""
            }
        ]
    });
});

app.listen(port, () => console.log(`listening on port ${port}`));