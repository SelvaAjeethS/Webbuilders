import React from "react";
import "./FAQ.css";

const FAQ = () => {
    return (
        <div id="faq" className="container my-5">
            <h1 className="text-white mb-4">FAQ</h1>
            <div className="accordion" id="faqAccordion">

                {/* First Question */}
                <div className="accordion-item bg-dark text-white">
                    <h2 className="accordion-header" id="headingOne">
                        <button
                            className="accordion-button collapsed bg-dark text-white border-0"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                        >
                            What's unique about WebBuilders?
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            Nobody likes contacting a web designer, arguing about pricing, waiting weeks for the design to finish, and then waiting even more time just to get a mediocre website for the price of an arm and a leg. At WebBuilders, we make getting a website for your business as easy as buying off Amazon, and as cheap as a month's worth of coffee. In the end... We do it better.
                        </div>
                    </div>
                </div>

                {/* Second Question */}
                <div className="accordion-item bg-dark text-white">
                    <h2 className="accordion-header" id="headingTwo">
                        <button
                            className="accordion-button collapsed bg-dark text-white border-0"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            How will a website help my business grow?
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            Nobody likes contacting a web designer, arguing about pricing, waiting weeks for the design to finish, and then waiting even more time just to get a mediocre website for the price of an arm and a leg. At WebBuilders, we make getting a website for your business as easy as buying off Amazon, and as cheap as a month's worth of coffee. In the end... We do it better.
                        </div>
                    </div>
                </div>

                {/* Third Question */}
                <div className="accordion-item bg-dark text-white">
                    <h2 className="accordion-header" id="headingThree">
                        <button
                            className="accordion-button collapsed bg-dark text-white border-0"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                        >
                            What if I don't like the website?
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            Nobody likes contacting a web designer, arguing about pricing, waiting weeks for the design to finish, and then waiting even more time just to get a mediocre website for the price of an arm and a leg. At WebBuilders, we make getting a website for your business as easy as buying off Amazon, and as cheap as a month's worth of coffee. In the end... We do it better.
                        </div>
                    </div>
                </div>

                {/* Fourth Question */}
                <div className="accordion-item bg-dark text-white">
                    <h2 className="accordion-header" id="headingFour">
                        <button
                            className="accordion-button collapsed bg-dark text-white border-0"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                        >
                            How does WebBuilders optimize their websites?
                        </button>
                    </h2>
                    <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            Nobody likes contacting a web designer, arguing about pricing, waiting weeks for the design to finish, and then waiting even more time just to get a mediocre website for the price of an arm and a leg. At WebBuilders, we make getting a website for your business as easy as buying off Amazon, and as cheap as a month's worth of coffee. In the end... We do it better.
                        </div>
                    </div>
                </div>

                {/* Fiveth Question */}
                <div className="accordion-item bg-dark text-white">
                    <h2 className="accordion-header" id="headingFive">
                        <button
                            className="accordion-button collapsed bg-dark text-white border-0"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFive"
                            aria-expanded="false"
                            aria-controls="collapseFive"
                        >
                            How often can WebBuilders add new things to my site?
                        </button>
                    </h2>
                    <div
                        id="collapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFive"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            Nobody likes contacting a web designer, arguing about pricing, waiting weeks for the design to finish, and then waiting even more time just to get a mediocre website for the price of an arm and a leg. At WebBuilders, we make getting a website for your business as easy as buying off Amazon, and as cheap as a month's worth of coffee. In the end... We do it better.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
