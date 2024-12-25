import React from "react";
import Slider from "react-slick";
import "./Testimonials.css";

function Testimonials() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const reviews = [
        {
            quote: "WebBuilder's chatbot now handles 95% of our customer service.",
            review: "WebBuilder's chatbot is an absolute game-changer for our customer service, absolutely amazing!",
            name: "Sarah Johnson",
            position: "CXO - Doodle",
            avatar: `${process.env.PUBLIC_URL}/assets/avatar1.png`,
        },
        {
            quote: "We're delighted with our website subscription from WebBuilder's.",
            review: "The website their team made us is revolutionizing our business. Now, we're generating more than ever!",
            name: "Peter Davis",
            position: "CTO - Atomic",
            avatar: `${process.env.PUBLIC_URL}/assets/avatar2.png`,
        },
        {
            quote: "Their design exceeded our expectations.",
            review: "The WebBuilder team provided us with an eye-catching and efficient design for our website.",
            name: "Alice Walker",
            position: "CMO - BrightCo",
            avatar: `${process.env.PUBLIC_URL}/assets/avatar1.png`,
        },
        {
            quote: "Our website's performance improved by 54%.",
            review: "Can't thank WebBuilder enough, they absolutely transformed our website into a productive machine!",
            name: "Mark Taylor",
            position: "CEO - Real Estate",
            avatar: `${process.env.PUBLIC_URL}/assets/avatar2.png`,
        },
    ];

    return (
        <div id="reviews" className="review-carousel">
            <h2>
                What our <span className="highlight">clients</span> say
            </h2>
            <Slider {...settings}>
                {reviews.map((review, index) => (
                    <div className="review-card" key={index}>
                        <blockquote>"<span className="blockqttext">{review.quote}</span>"</blockquote>
                        <p>{review.review}</p>
                        <div className="reviewer">
                            <img src={review.avatar} alt={`${review.name}'s avatar`} />
                            <div>
                                <strong>{review.name}</strong>
                                <p>{review.position}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Testimonials;
