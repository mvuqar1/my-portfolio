import React from 'react'
import { createContext } from "react";


export const PortfolioContext = createContext()

const initialState = [
    
    {
        id: 7,
        title: 'Products-Search',
        description: 'In my React project, I use API requests, useState, useEffect, useLocation, useNavigate functions, and filters to create a user interface and work with data. This allows me to search for desired products and simplify the development process.',
        liveLink: 'https://products-search-mvuqar1.netlify.app/',
        gitLink: 'hhttps://github.com/mvuqar1/product-search.git'
    },
    {
        id: 6,
        title: 'Firebase APİ',
        description: 'App for form & Firebase RTDB w/Redux store. Functions: getFormInputs, deleteFormInput, addFormInputs, EditFormUser, GetSingleUser query DB & dispatch actions to update app state.',
        liveLink: 'https://api-firibase-mvuqar1.netlify.app/',
        gitLink: 'https://github.com/mvuqar1/apiFirebase'
    },
    {
        id: 8,
        title: 'Kino Search',
        description: 'The created website utilizes the React library and class components to build a dynamic user interface. By integrating API requests, the site obtains real-time information, allowing it to provide users with the most useful information.',
        liveLink: 'https://kino-sayt-mvuqar1.netlify.app/',
        gitLink: 'https://github.com/mvuqar1/kino-sayt'
    },
    {
        id: 4,
        title: 'To Do List',
        description: 'This project is a "To-Do List" application that utilizes querySelector, setDragDrop, createElement, appendChild, and sorting technologies to add, delete, and move items within the list, while also allowing for data to be written and stored in local storage.',
        liveLink: 'https://to-do-list1-mvuqar1.netlify.app/',
        gitLink: 'https://github.com/mvuqar1/toDoList'
    },
    {
        id: 2,
        title: 'Currency Converter',
        description: 'The main idea behind this project is to showcase best practices for working with APIs, specifically working with Get requests. The converter is both functional and dynamic, allowing for seamless use.',
        liveLink: 'https://currency-converter-mvuqar1.netlify.app/',
        gitLink: 'https://github.com/mvuqar1/currencyConverter'
    },
    {
        id: 3,
        title: 'Sign Up',
        description: 'useFormik and Yup are React libraries for form handling and validation. useFormik provides functions and states for managing forms, such as values, handlers, and submission. Yup validates form values against defined rules.',
        liveLink: 'https://sign-up-form-mvuqar1.netlify.app/',
        gitLink: 'https://github.com/mvuqar1/signUpForm'
    },
    {
        id: 5,
        title: 'Nike Shoes',
        description: 'The page contains HTML, CSS, and JavaScript files that are responsible for the functionality of selecting the color of sneakers. Visually, the page is designed in a modern style, using the Quicksand font and icons from the Font Awesome library.',
        liveLink: 'https://bright-nasturtium-a32602.netlify.app/',
        gitLink: 'https://github.com/mvuqar1/nikeShoes'
    },
    {
        id: 1,
        title: 'FirstTask',
        description: 'As part of the project, I used HTML and CSS, worked with the Flexbox technology, created a responsive design that allows the website to display correctly on different devices, and moved tables to ensure optimal display when the screen size changes.',
        liveLink: 'https://first-task-mvuqar1.netlify.app/',
        gitLink: 'https://github.com/mvuqar1/FirstTask'
    },

]


export default function PortfolioData(props) {
    let { children } = props
    return (
        <PortfolioContext.Provider value={{ initialState }}>
            {children}
        </PortfolioContext.Provider>
    );
}
