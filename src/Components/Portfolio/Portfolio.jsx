import React from 'react'
import "./Portfolio.css"

export default function Portfolio() {
  return (
    <>
    <div id='portfolio' className="containet-portfolio">
        <div className="portfolio-title">
        <h2>portfolio</h2>
        <div className="portfolio-items">
            <div className="portfolio-item">
                <div className="portfolio-sayt">
                    <h4>FirstTask</h4>
                </div>
                <div className="portfoli-whatToDo">
                <p>
                As part of the project, I used HTML and CSS, worked with the Flexbox technology, created a responsive design that allows the website to display correctly on different devices, and moved tables to ensure optimal display when the screen size changes.
                    </p>
                </div>
                <div className="portfolio-routers">
                    <div className="portfolio-netlify btn"><p><a href='https://first-task-mvuqar1.netlify.app/'>View Project</a></p></div>
                    <div className="portfolio-github btn"><p><a href='https://github.com/mvuqar1/FirstTask'>View Github</a></p></div>
                </div>
            </div>
            <div className="portfolio-item">
                <div className="portfolio-sayt">
                    <h4>Currency Converter</h4>
                </div>
                <div className="portfoli-whatToDo">
                <p>
                The main idea behind this project is to showcase best practices for working with APIs, specifically working with Get requests. The converter is both functional and dynamic, allowing for seamless use.
                    </p>
                </div>
                <div className="portfolio-routers">
                    <div className="portfolio-netlify btn"><p><a href='https://currency-converter-mvuqar1.netlify.app/'>View Project</a></p></div>
                    <div className="portfolio-github btn"><p><a href='https://github.com/mvuqar1/currencyConverter'>View Github</a></p></div>
                </div>
            </div>
            <div className="portfolio-item">
                <div className="portfolio-sayt">
                    <h4>Sign Up</h4>
                </div>
                <div className="portfoli-whatToDo">
                <p>
                This project is a visual solution, where the main focus was on working with toggle, addEventListener, and querySelector to create interactivity on the page.
                    </p>
                </div>
                <div className="portfolio-routers">
                    <div className="portfolio-netlify btn"><p><a href='https://sign-up-form-mvuqar1.netlify.app/'>View Project</a></p></div>
                    <div className="portfolio-github btn"><p><a href='https://github.com/mvuqar1/signUpForm'>View Github</a></p></div>
                </div>
            </div>
            <div className="portfolio-item">
                <div className="portfolio-sayt">
                    <h4>To Do  List</h4>
                </div>
                <div className="portfoli-whatToDo">
                <p>
                This project is a 'To-Do List' application that utilizes querySelector, setDragDrop, createElement, appendChild, and sorting technologies to add, delete, and move items within the list, while also allowing for data to be written and stored in local storage.
                    </p>
                </div>
                <div className="portfolio-routers">
                    <div className="portfolio-netlify btn"><p><a href='https://to-do-list1-mvuqar1.netlify.app/'>View Project</a></p></div>
                    <div className="portfolio-github btn"><p><a href='https://github.com/mvuqar1/toDoList'>View Github</a></p></div>
                </div>
            </div>
            <div className="portfolio-item">
                <div className="portfolio-sayt">
                    <h4>Nike Shoes</h4>
                </div>
                <div className="portfoli-whatToDo">
                <p>
                The page contains HTML, CSS, and JavaScript files that are responsible for the functionality of selecting the color of sneakers. Visually, the page is designed in a modern style, using the Quicksand font and icons from the Font Awesome library.
                    </p>
                </div>
                <div className="portfolio-routers">
                    <div className="portfolio-netlify btn"><p><a href='https://bright-nasturtium-a32602.netlify.app/'>View Project</a></p></div>
                    <div className="portfolio-github btn"><p><a href='https://github.com/mvuqar1/nikeShoes'>View Github</a></p></div>
                </div>
            </div>
            <div className="portfolio-item">
                <div className="portfolio-sayt">
                    <h4>Firebase APİ</h4>
                </div>
                <div className="portfoli-whatToDo">
                <p>
                App for form & Firebase RTDB w/Redux store. Functions: getFormInputs, deleteFormInput, addFormInputs, EditFormUser, GetSingleUser query DB & dispatch actions to update app state.
                    </p>
                </div>
                <div className="portfolio-routers">
                    <div className="portfolio-netlify btn"><p><a href='https://api-firibase-mvuqar1.netlify.app/'>View Project</a></p></div>
                    <div className="portfolio-github btn"><p><a href='https://github.com/mvuqar1/apiFirebase'>View Github</a></p></div>
                </div>
            </div>

        </div>
        </div>
    </div>
    </>
  )
}
