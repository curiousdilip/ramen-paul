import React from 'react'
import Link from 'next/link'
const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row align-items-start justify-content-center">
                        <div className="col-md-5">
                            <h1>Ramen Paul</h1>
                            <p>Western music Teacher (multi instrumentalist) <br />
                                Sound engineering,<br />
                                Arrangements,composition,Recording,<br />
                                Digital mixing<br />
                                Sound production<br />
                                All sound solutions</p>
                            <div className="follow">
                                <h6>Follow me on </h6>
                                <ul>
                                    <li>
                                        <Link href="https://www.instagram.com/ramen_paul" aria-label="Instagram" target="_blank" rel="noopener">
                                            <i className="bi bi-instagram"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.linkedin.com/in/ramen-paul/" aria-label="Linkedin" target="_blank" rel="noopener">
                                            <i className="bi bi-linkedin"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.youtube.com/user/ramensir" aria-label="Youtube" target="_blank" rel="noopener">
                                            <i className="bi bi-youtube"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.facebook.com/ramen.paul.9" aria-label="Facebook" target="_blank" rel="noopener">
                                            <i className="bi bi-facebook"></i>
                                        </Link>
                                    </li>
                                    <li><Link href="https://twitter.com/ramen_paul" aria-label="Twitter" target="_blank" rel="noopener">
                                        <i className="bi bi-twitter"></i>
                                    </Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="links">
                                <h3>Tutorials</h3>
                                <ul>
                                    <li><Link href="/vocals">Vocals</Link></li>
                                    <li><Link href="/violin">Violin</Link></li>
                                    <li><Link href="/piano">Piano</Link></li>
                                    <li><Link href="/cello">Cello</Link></li>
                                    <li><Link href="/guitar">Guitar</Link></li>
                                    <li><Link href="/drums">Drums</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="contact">
                                <h3>Contact</h3>
                                <ul>
                                    <li><i className='bi bi-envelope'> ramen.paul14@gmail.com</i> </li>
                                    <li><i className='bi bi-telephone'> +91 98110 71981</i> </li>
                                    <li><i className='bi bi-geo'> Dwarka, New Delhi, India</i> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-footer">
                        <div className="row">
                            <div className="col-md-6">
                                © 2023 Ramen Paul | All Rights Reserved
                            </div>
                            <div className="col-md-6 ">
                                <Link href="https://www.dilipmaurya.in">Made by Dilip Kumar</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
