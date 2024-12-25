import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <section id='contact' className="contact-section text-white py-5">
            <div className="container">
                <h1>
                    Get in <span className="highlight5">touch</span>
                </h1>
                <div className="row">
                    {/* Left Section - Contact Info */}
                    <div className="col-md-6 contact-info mb-4">
                        <p>
                            <strong>Office</strong>
                        </p>
                        <p>
                            Tampa, Florida
                            <br />
                            United States
                        </p>
                        <hr />
                        <p>
                            <strong>Email</strong>
                        </p>
                        <p>
                            <a href="mailto:eric@webbuilders.us" className="detail">
                                eric@webbuilders.us
                            </a>
                        </p>
                        <hr />
                        <p>
                            <strong>Phone</strong>
                        </p>
                        <p>
                            <a href="tel:+18137242684" className="detail">
                                +1 (813) 724 2684
                            </a>
                        </p>
                        <hr />
                    </div>

                    {/* Right Section - Contact Form */}
                    <div className="col-md-6 contact-form">
                        <form>
                            <div className="row">
                                <div className="col-6 mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="First Name"
                                        required
                                    />
                                </div>
                                <div className="col-6 mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Last Name"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="tel"
                                    className="form-control"
                                    placeholder="Phone"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <textarea
                                    className="form-control"
                                    rows="4"
                                    placeholder="Message"
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
