import faceDetector from '../assets/images/face_detector.png';
import shoppingList from '../assets/images/shopping_list.png';
import dominandoAutocad from '../assets/images/dominando_autocad.png';

const PROJECTS = [
    {
    name: "Face Detector",
    link: "https://facedetector.vercel.app/",
    image: faceDetector,
    description: "A web application that consumes Clarifai API, allowing users to detect faces in their pictures. Thanks to the database connection and authentication solution, it is also possible to sign up with your e-mail and keep track of the number of pictures sumbitted successfully.",
    techs: ["JavaScript","Nextjs", "CSS", "Nodejs", "Express", "PostgreSQL", "NextAuth.js", "Knex", ]
    },
    {
    name: "Shopping List",
    link: "https://shoppinglist-application-v2.herokuapp.com/",
    image: shoppingList,
    description: "The classic shopping list, where users can enter, remove and cross out items, as well as clear the entire list. This app has responsive layout and a SQLite database connected, preventing the loss of information when refreshing the page.",
    techs: ["JavaScript","HTML", "CSS", "EJS", "Nodejs", "Express", "SQLite", ]
    },
    {
    name: "Landing Page",
    link: "https://dominandoautocad.com/",
    image: dominandoAutocad,
    description: "AutoCAD course landing page, built for a friend's project. The user is able to check information about the course and go to the purchase page.",
    techs: ["React", "CSS"]
    },
]

export { PROJECTS };