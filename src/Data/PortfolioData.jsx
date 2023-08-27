import React from 'react'
import { createContext } from "react";


export const PortfolioContext = createContext()

const initialState = [
    
    {
        id: 0,
        title: 'FirstTask',
        description: 'As part of the project, I used HTML and CSS, worked with the Flexbox technology, created a responsive design that allows the website to display correctly on different devices, and moved tables to ensure optimal display when the screen size changes.',
        liveLink: 'https://first-task-mvuqar1.netlify.app/',
        gitLink: 'https://github.com/mvuqar1/FirstTask'
    },
    {
        id: 1,
        title: 'Currency Converter',
        description: 'The main idea behind this project is to showcase best practices for working with APIs, specifically working with Get requests. The converter is both functional and dynamic, allowing for seamless use.',
        liveLink: 'https://currency-converter-mvuqar1.netlify.app/',
        gitLink: 'https://github.com/mvuqar1/currencyConverter'
    },
    {
        id: 2,
        title: 'Sign Up',
        description: 'useFormik and Yup are React libraries for form handling and validation. useFormik provides functions and states for managing forms, such as values, handlers, and submission. Yup validates form values against defined rules.',
        liveLink: 'https://sign-up-form-mvuqar1.netlify.app/',
        gitLink: 'https://github.com/mvuqar1/signUpForm'
    },
    {
        id: 3,
        title: 'To Do List',
        description: 'This project is a "To-Do List" application that utilizes querySelector, setDragDrop, createElement, appendChild, and sorting technologies to add, delete, and move items within the list, while also allowing for data to be written and stored in local storage.',
        liveLink: 'https://to-do-list1-mvuqar1.netlify.app/',
        gitLink: 'https://github.com/mvuqar1/toDoList'
    },
    {
        id: 4,
        title: 'Nike Shoes',
        description: 'The page contains HTML, CSS, and JavaScript files that are responsible for the functionality of selecting the color of sneakers. Visually, the page is designed in a modern style, using the Quicksand font and icons from the Font Awesome library.',
        liveLink: 'https://bright-nasturtium-a32602.netlify.app/',
        gitLink: 'https://github.com/mvuqar1/nikeShoes'
    },
    {
        id: 5,
        title: 'Scroll Animation',
        description: '"creative-scroll-animation" is a web application built with React for creating scroll animations. It utilizes testing libraries, GSAP for animations, and standard React tools. It provides scripts for development, building, testing, and project configuration. The ESLint configuration ensures code quality. Browserslist defines the supported browsers.',
        liveLink: 'https://creative-scroll-animation.netlify.app/',
        gitLink: 'https://github.com/mvuqar1/creative-scroll-animation'
    },
    {
        id: 6,
        title: 'Firebase APİ',
        description: 'App for form & Firebase RTDB w/Redux store. Functions: getFormInputs, deleteFormInput, addFormInputs, EditFormUser, GetSingleUser query DB & dispatch actions to update app state.',
        liveLink: 'https://api-firibase-mvuqar1.netlify.app/',
        gitLink: 'https://github.com/mvuqar1/apiFirebase'
    },
    {
        id: 7,
        title: 'Products-Search',
        description: 'In my React project, I use API requests, useState, useEffect, useLocation, useNavigate functions, and filters to create a user interface and work with data. This allows me to search for desired products and simplify the development process.',
        liveLink: 'https://products-search-mvuqar1.netlify.app/',
        gitLink: 'hhttps://github.com/mvuqar1/product-search.git'
    },
    {
        id: 8,
        title: 'Kino Search',
        description: 'The created website utilizes the React library and class components to build a dynamic user interface. By integrating API requests, the site obtains real-time information, allowing it to provide users with the most useful information.',
        liveLink: 'https://kino-sayt-mvuqar1.netlify.app/',
        gitLink: 'https://github.com/mvuqar1/kino-sayt'
    },
    {
        id: 9,
        title: 'Coins Backend Frontend',
        description: 'My project combines Mysql (Clever Cloud) and Firebase for storing photos. The backend is implemented using Node.js Express (Vercel), while the frontend is based on React. useState, useContext, and useSearchParams are used for handling API requests.',
        liveLink: 'https://main--coins-express-mysql-admin-panel.netlify.app/',
        gitLink: 'https://github.com/mvuqar1/coins-express-mysql-adminPanel'
    },
    {
        id: 10,
        title: 'Similiar Jowi',
        description: '"Similar Jowi" is a web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to search for and compare similar products. The interface design is based on Tailwind CSS. The application is deployed on the Render.com platform.',
        liveLink: 'https://mvuqar1-similar-jowi.netlify.app/',
        gitLink: 'https://github.com/mvuqar1/similiar-jowi-MERN-STACK'
    },
    {
        id: 11,
        title: 'Youtube Clone',
        description: '"Youtube Clone" is my own clone of the YouTube application. It utilizes React, Redux, Tailwind CSS, and the YouTube API v3. The application allows users to search for and watch videos. You can continue the development and customize the design and styles to give the project a unique look and feel.',
        liveLink: 'https://youtube-clone-mvuqar1.netlify.app/',
        gitLink: 'https://github.com/mvuqar1/clone-youtube'
        
    },
    {
        id: 12,
        title: 'Booking Panel',
        description: "I've employed HTML, CSS, and JavaScript to craft a user-friendly service booking system. HTML and CSS form the interface, while JavaScript adds dynamic functionalities. Local storage retains chosen options for a seamless booking experience.",
        liveLink: 'https://booking-panel-mvuqar1.netlify.app/',
        gitLink: 'https://github.com/mvuqar1/booking-panel/tree/main'
        
    },
    {
        id: 13,
        title: 'Commerce client-server',
        description: "I used React, Redux, Ant Design, Node.js, Express.js, and MongoDB for the project. Booking functionality was established with local storage, and the backend was deployed on Render Dashboard. Security measures included password hashing using bcrypt and user authentication with JSON Web Tokens (JWT).",
        liveLink: 'https://commerce-sayt-server-client.netlify.app/',
        gitLink: 'https://github.com/mvuqar1/commerce-sayt-server-client'
        
    },

]
initialState.reverse();

export default function PortfolioData(props) {
    let { children } = props
    return (
        <PortfolioContext.Provider value={{ initialState }}>
            {children}
        </PortfolioContext.Provider>
    );
}
