import React, { useState } from "react";
import PostItem from "../components/PostItem"

import avatar11 from "../images/avatar11.jpg"
import avatar12 from "../images/avatar12.jpg"
import avatar13 from "../images/avatar13.jpg"
import avatar14 from "../images/avatar14.jpg"
import avatar15 from "../images/avatar15.jpg"
import avatar16 from "../images/avatar16.jpg"
import avatar17 from "../images/avatar17.jpg"
import avatar9 from "../images/avatar9.jpg"
import avatar8 from "../images/avatar8.jpg"
import avatar7 from "../images/avatar7.jpg"

const Dummy_Posts = [
    {
        "id": 1,
        "artist": avatar11,
        "songName": "The Reason",
        "firstName": "Zion",
        "genre": "Latin",
        "city": "Abilene"
    },
    {
        "id": 2,
        "artist": avatar12,
        "songName": "Johnny B Goode",
        "firstName": "Eliza",
        "genre": "Rap",
        "city": "East Audreyview"
    },
    {
        "id": 3,
        "artist": avatar13,
        "songName": "96 Tears",
        "firstName": "Gilbert",
        "genre": "Country",
        "city": "Hyattshire"
    },
    {
        "id": 4,
        "artist": avatar14,
        "songName": "Look Away",
        "firstName": "Rose",
        "genre": "Jazz",
        "city": "Lake Judson"
    },
    {
        "id": 5,
        "artist": avatar15,
        "songName": "Stop! in the Name of Love",
        "firstName": "Imogene",
        "genre": "Blues",
        "city": "North Kadin"
    },
    {
        "id": 6,
        "artist": avatar16,
        "songName": "I'll be seeing you",
        "firstName": "Tatyana",
        "genre": "Jazz",
        "city": "Keeganview"
    },
    {
        "id": 7,
        "artist": avatar17,
        "songName": "Ballad of the Green Berets",
        "firstName": "Trey",
        "genre": "Electronic",
        "city": "Schmidtcester"
    },
    {
        "id": 8,
        "artist": avatar9,
        "songName": "Yellow Rose of Texas",
        "firstName": "Providenci",
        "genre": "World",
        "city": "Lake Joshuaside"
    },
    {
        "id": 9,
        "artist": avatar8,
        "songName": "Travellin' Man",
        "firstName": "Soledad",
        "genre": "Stage And Screen",
        "city": "Port Alisonboro"
    },
    {
        "id": 10,
        "artist": avatar7,
        "songName": "Mr Tambourine Man",
        "firstName": "Andres",
        "genre": "Blues",
        "city": "Boylestead"
    }
]

const Posts = () => {
    const [posts, setPosts] = useState(Dummy_Posts);
    return (
        <section className="posts">
            {posts.map((id, artist, songName, firstName, genre) => <postItem key={id} postID={id} 
                artsist = { artist } songName = { songName } firstName = {firstName} genre={genre} />)}
       </section>
   );
}

export default Posts;