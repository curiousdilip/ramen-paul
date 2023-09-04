import Breadcrumbs from "@/components/Breadcrumbs";
import RHeader from "@/components/RHeader";
import Head from "next/head";
import React from "react";

const contact = () => {
    return (
        <>
            <Head>
                <title>Contact | Ramen Paul</title>
                <meta
                    name="description"
                    content="Hi, I’m Ramen Paul, Authorized teacher of Trinity College, London."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <RHeader />
            <Breadcrumbs pageName="contact" />
            <main>
                <section id="contact-hero">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-8">
                                <form>
                                    <input
                                        type="name"
                                        class="form-control mb-3"
                                        placeholder="Name"
                                    />
                                    <input
                                        type="email"
                                        class="form-control mb-3"
                                        placeholder="Email"
                                    />
                                    <input
                                        type="tel"
                                        class="form-control mb-3"
                                        placeholder="Phone number"
                                    />
                                    <textarea
                                        class="form-control mb-3"
                                        rows="3"
                                        placeholder="Your Message"
                                    ></textarea>

                                    <button type="submit" class="btn btn-primary">
                                        Send Now
                                    </button>
                                </form>
                            </div>
                            <div className="col-md-4">
                                <div className="details">
                                    <div className="box">
                                        <div className="icon">
                                            <i className="bi bi-telephone"></i>
                                        </div>
                                        <div className="number">
                                            <h4>Call</h4>
                                            <p>+91 98110 71981</p>
                                        </div>
                                    </div>

                                    <div className="box">
                                        <div className="icon">
                                            <i className="bi bi-envelope"></i>
                                        </div>
                                        <div className="mail">
                                            <h4>Send Email</h4>
                                            <p>ramen.paul14@gmail.com</p>
                                        </div>
                                    </div>

                                    <div className="box">
                                        <div className="icon">
                                            <i className="bi bi-geo"></i>
                                        </div>
                                        <div className="location">
                                            <h4>Visit Us</h4>
                                            <p>Dwarka, New Delhi, India</p>
                                        </div>
                                    </div>

                                    <div className="follow">
                                        <h4>Follow </h4>
                                        <ul>
                                            <li>
                                                <a href="/">
                                                    <i className="bi bi-instagram"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <i className="bi bi-linkedin"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <i className="bi bi-youtube"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <i className="bi bi-facebook"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default contact;
