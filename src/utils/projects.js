import faceDetector from '../images/face_detector.png';
import shoppingList from '../images/shopping_list.png';
import dominandoAutocad from '../images/dominando_autocad.png';

const projects = [
    {
    name: "Face Detector",
    link: "https://facedetector.vercel.app/",
    image: faceDetector,
    description: "Final project for my Web Development course. A web application that allows users to detect faces in their pictures. Also possible to subscribe and keep track of the number of pictures sumbited successfully.",
    techs: ["Nextjs", "Nodejs", "Express", "Postgres", ]
    },
    {
    name: "Shopping List",
    link: "https://shoppinglist-application.herokuapp.com/",
    image: shoppingList,
    description: "Simple web application for users to enter their shopping items. Users can also remove and cross out each item, as well as clear the list.",
    techs: ["HTML", "CSS", "JavaScript", "Nodejs", "Express", "SQLite", ]
    },
    {
    name: "Landing Page",
    link: "https://dominandoautocad.com/",
    image: dominandoAutocad,
    description: "AutoCAD course landing page, bridge between the advertisement and the course purchase page, where the user is able to check information about the course.",
    techs: ["React", "CSS"]
    },
]

export { projects };