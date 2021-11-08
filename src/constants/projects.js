import faceDetector from '../assets/images/face_detector.png';
import memoryMatch from '../assets/images/memory_match.png';
import shoppingList from '../assets/images/shopping_list.png';
import revolutClone from '../assets/images/revolut_clone.png';

const PROJECTS = [
    {
    name: "Face Detector",
    link: "https://facedetector.vercel.app/",
    image: faceDetector,
    description: "A web application that consumes Clarifai API, allowing users to detect faces in their pictures. Thanks to the database connection and authentication solution, it is also possible to sign up with your e-mail and keep track of the number of pictures sumbitted successfully.",
    techs: ["JavaScript","Nextjs", "CSS", "Nodejs", "Express", "PostgreSQL", "NextAuth.js", "Knex", ]
    },
    {
    name: "Memory Match Game",
    link: "https://biancasehn.github.io/memory_match_V2/",
    image: memoryMatch,
    description: "The traditional Memory Match game, the user clicks on the cards to reveal them and match. An aside scoreboard shows the number of failed attempts, increasing it every time the user fails to match two cards. Zustand has been used as state-management solution.",
    techs: ["React", "Zustand"]
    },
    {
    name: "Shopping List",
    link: "https://shoppinglist-application-v2.herokuapp.com/",
    image: shoppingList,
    description: "The classic shopping list, where users can enter, remove and cross out items, as well as clear the entire list. This app has responsive layout and a SQLite database connected, preventing the loss of information when refreshing the page.",
    techs: ["JavaScript","HTML", "CSS", "EJS", "Nodejs", "Express", "SQLite", ]
    },
    {
    name: "Clone - Revolut page",
    link: "https://biancasehn.github.io/revolut-clone/",
    image: revolutClone,
    description: "Clone of the Revolut landing page, this was a project for my Web Development course.",
    techs: ["HTML", "CSS", "JavaScript"]
    },
]

export { PROJECTS };