import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import RHeader from "@/components/RHeader";
import Head from "next/head";
import React from "react";
import { useRouter } from 'next/router';


const contact = () => {
    // function handleSubmit(event) {
    //     event.preventDefault();
    //     // Submit your form data here (e.g., via fetch or another method)

    //     // Add a brief delay to ensure the form data is sent before reloading
    //     setTimeout(() => {
    //         window.location.reload();
    //     }, 4000); // 1000 milliseconds (1 second)
    // }
    return (
        <>
            <Head>
                <meta property="og:url" content="https://www.ramenpaul.com/contact" />
                <meta
                    property="og:site_name"
                    content="Contact | Ramen Paul"
                />
                <meta
                    property="og:title"
                    content="Contact | Ramen Paul"
                />
                <meta
                    name="twitter:title"
                    content="Contact | Ramen Paul"
                />
                <title>Contact | Ramen Paul</title>
            </Head>
            <RHeader />
            <Breadcrumbs pageName="contact" />
            <main>
                <section id="contact-hero">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-8">
                                <form action="https://script.google.com/macros/s/AKfycbzuJKJyf_eQo8qE6e6FEOufa69jHhNWkK82t8222BnK3p9VHKAJQ8k6Ef7rmgxCgnAy/exec" method="POST" >
                                    <input
                                        type="name"
                                        name="name"
                                        className="form-control mb-3"
                                        placeholder="Name"
                                        required
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control mb-3"
                                        placeholder="Email"
                                        required
                                    />
                                    <input
                                        type="tel"
                                        name="phone"
                                        className="form-control mb-3"
                                        placeholder="Phone number"
                                        required
                                    />
                                    <textarea
                                        name="message"
                                        className="form-control mb-3"
                                        rows="3"
                                        placeholder="Your Message"
                                    ></textarea>

                                    <button type="submit" className="btn btn-primary">
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
                                                <a href="https://www.instagram.com/ramen_paul">
                                                    <i className="bi bi-instagram"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.linkedin.com/in/ramen-paul-6a612180/">
                                                    <i className="bi bi-linkedin"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.youtube.com/user/ramensir">
                                                    <i className="bi bi-youtube"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.facebook.com/ramen.paul.9">
                                                    <i className="bi bi-facebook"></i>
                                                </a>
                                            </li>
                                            <li><a href="https://twitter.com/ramen_paul">
                                                <i className="bi bi-twitter"></i>
                                            </a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default contact;
