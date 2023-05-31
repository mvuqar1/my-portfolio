import React, { useContext } from 'react';
import {PortfolioContext} from "../../Data/PortfolioData"
import "./Portfolio.css";

export default function Portfolio() {
    const {initialState}=useContext(PortfolioContext)
    return (
        <>
            <div id='portfolio' className="containet-portfolio">
                <div className="portfolio-title">
                    <h2>portfolio</h2>
                </div>
                <div className="portfolio-items">
                    {initialState.map((item) => (
                        <div key={item.id} className="portfolio-item">
                            <div className="portfolio-sayt">
                                <h4>{item.title}</h4>
                            </div>
                            <div className="portfoli-whatToDo">
                                <p>{item.description}</p>
                            </div>
                            <div className="portfolio-routers">
                                <div className="portfolio-netlify btn"><p><a target='_blank' rel='noopener noreferrer' href={item.liveLink}>View Project</a></p></div>
                                <div className="portfolio-github btn"><p><a target='_blank' rel='noopener noreferrer' href={item.gitLink}>View Github</a></p></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
    
                    }