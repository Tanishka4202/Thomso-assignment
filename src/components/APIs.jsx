import React from 'react';
import '../index.css';

import api1 from "../assets/api1.png";
import api2 from "../assets/api2.png";
import api3 from "../assets/api3.png";
import api4 from "../assets/api4.png";


const APIcard = [
    {
        icon: api1,
        title: "Resume Scorer",
        description: "Optimize your resume with AI-driven insights. Stand out to recruiters."
    },
    {
        icon: api2,
        title: "Internship Scorer Scorer",
        description: "Evaluate your Internship experience & get feedback to improve impact."
    },
    {
        icon: api3,
        title: "Salary Estimator",
        description: "Calculate your expected Salary with accurate industry data."
    },
    {
        icon: api4,
        title: "Authentication",
        description: "Integrate the API, and we will handle the security of users."
    }
];

function APIs(){
    return(
        <>
        <h3>Our APIs</h3>
        <div id="api-cards">
            {APIcard.map((api,index)=>(
                <div className="apicard">
                <img src={api.icon} />
                <h4>{api.title}</h4>
                <p>{api.description}</p>
                <button>Try Now</button>
            </div>
            ))}
        </div>
        </>
    );
}

export default APIs;