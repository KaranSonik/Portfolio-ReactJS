import crux1 from '../assets/crux1.png'
import elsan from '../assets/elsan.png'
import getfitroom from '../assets/getfitroom.jpeg'
import botson from '../assets/botson.jpeg'
import webpage from '../assets/webpage.jpeg'

const projects = [

    {
        id: 1,
        name: 'ReactJS Webapp',
        desc:'Frontend using ReactJS and Styled Components, hosted on Firebase hosting. Like the one you are visiting right this very moment!',
        img: crux1,
    },
    {
        id: 2,
        name: 'Fitness Management Application',
        desc:'A fitness application inspired by social media platforms, where one can share their progress with peers and also maintain their daily workout schedule! This application was hooked onto Firebase Firestore Realtime Database and Cloud Storage!',
        img: getfitroom,
    },
    {
        id: 3,
        name: '4 Wheeler Bot',
        desc:'An Arduino Uno R3 powered bot with features like Ultrasonic Sound Sensor for obstacle avoidance, IR Sensor for path tracking and the infamous Gyro mode. It was controlled using bluetooth by an application',
        img: botson,
    },
    {
        id: 4,
        name: 'Dynamic webpages',
        desc:'Static and Responsive webpages for all kinds of applications, be it a full e-commerce website or just a plain library database.',
        img: webpage,
    },
    {
        id: 5,
        name: '2D/3D Models and Designs',
        desc: 'I love 3D modeling and game asset creation to pass time, This here is a 3D sculpture made on Blender 2.93.1. To know more reach out!',
        img: elsan,
    }
];

export default projects;