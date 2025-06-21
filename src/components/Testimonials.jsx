import React from 'react';
import profilepic from "../assets/profile.png"
import stars from "../assets/stars.png";
import '../index.css';

const testimonials = [
    {
        profile: { profilepic },
        review: "Blazing-fast response times, even during high load. Scales effortlessly. It’s like having a CDN for testimonials. Perfect for high-traffic apps needing consistent performance.",
        name: "Neha verma",
        post: "CTO of XYZ"

    },
    {
        profile: { profilepic },
        review: "Super affordable without sacrificing quality. Transparent pricing, no hidden surprises. Finally, an API platform that understands startup budgets without compromising on speed or support.",
        name: "Ananya M.",
        post: "SDE-2 Engineer at ABC"

    },
    {
        profile: { profilepic },
        review: "Documentation is clear, comprehensive, and developer-friendly. Got my integration running in under 30 minutes. Everything just works—no guesswork, no frustration.",
        name: "Neha verma",
        post: "Senior Developer at XYZ "

    }
];

function Testimonials() {
    return (
        <>
            <h3>What <span>Our Clients</span> Say</h3>
            <div id="testomonial-cards">
                {testimonials.map((testimonial, index) => (
                    <div className="testimonials">
                        <img src={stars} />
                        <p>{testimonial.review}</p>
                        <div>
                            <img src={testimonial.profile} />
                            <div>
                                <h5>{testimonial.name}</h5>
                                <p>{testimonial.post}</p>
                            </div>
                        </div>
                    </div>
                  ))}
            </div>
        </>
    );
}

export default Testimonials;