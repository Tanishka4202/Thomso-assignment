import React from 'react';
import kf1 from "../assets/kf1.png";
import kf2 from "../assets/kf2.png";
import kf3 from "../assets/kf3.png";
import kf4 from "../assets/kf4.png";
import '../index.css';


const kfcard = [
    {
        image: kf1,
        title: "Built for Developers",
        description: "Every API is crafted for Developers, from fresher to experienced."
    },
    {
        image: kf2,
        title: "Backed by Documentation",
        description: "Get well documentations of industry standards and in easy to learn format."
    },
    {
        image: kf3,
        title: "Instant Insights",
        description: "Real-time logging and cost estimations with AI powered optimizations."
    },
    {
        image: kf4,
        title: "Scalable for upto 100k req/s",
        description: "Don’t let technical limitations to stop your business from growing."
    }
];

function Features(){
    return(
        <>
        <h3>Key Features</h3>
        <div id="kf-cards">
            {kfcard.map((kf,index)=>(
                <div className="kfcard">
                <img src={kf.image} />
                <h4>{kf.title}</h4>
                <p>{kf.description}</p>
            </div>
            ))}
        </div>
        </>
    );
}

export default Features;