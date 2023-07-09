import React from "react";
import './header.css';

const Header =() =>{
    return(
        <div>
            <nav className="fnav">
                <img src="pic1.jpg" alt="not found"/>
                <input type="text" placeholder="What are you looking for"/>
                <p>Track Order</p>
                <p>Sign in & Sign Up</p>
                <p>Wish List</p>
                <p>Cart</p>
            </nav>
            <nav className="snav">
                <p>EYEGLASSES</p>
                <p>COMPUTER GLASSES</p>
                <p>KIDS GLASSES</p>
                <p>CONTACT LENSES</p>
                <p>SUNGLASSES</p>
                <p>HOME EYE-TEST</p>
                <p>STORE LOCATOR</p>
                <img src="lense2.webp" alt="not found"/>
            </nav>

            <div className="lense">
                <img src="l10.webp" alt="not found"/>
                <img src="l3.webp " alt="not found"/>
                <img src="a1.webp" alt="not found"/>
                <img src="l4.webp" alt="not found"/>
            <div/>

            <div className="main">
                <img src="a2.webp"/>
            </div>

            <div className="cart">
                <div className="card">
                    <img src="l5.webp" alt="not found"/>
                    <p>Rounded</p>
                    <button>Explore</button>
                </div>
                <div className="card">
                    <img src="a3.webp" alt="not found"/>
                    <p>Rounded</p>
                    <button>Explore</button>
                </div>
                <div className="card">
                    <img src="l5.webp" alt="not found"/>
                    <p>Rounded</p>
                    <button>Explore</button>
                </div>
                <div className="card">
                    <img src="a3.webp" alt="not found"/>
                    <p>Rounded</p>
                    <button>Explore</button>
                </div>
            </div>

            <div className="banner">
                <h2>As Seen At New-York Fashion Week</h2>
                <div className="img">
                    <img src="lense7.gif" alt="not found"/>
                </div>
            </div>
            <div className="banner">
                <h2>Find The Perfect Fit</h2>
                <div className="timg">
                    <img src="l6.webp" alt="not found"/>
                    <img src="lense6.jpg" alt="not found"/>
                </div>
            </div>
            <div className="banner">
                <h2>SUBSCRIBE & SAVE</h2>
                <div className="img">
                    <img src="lense5.jpg" alt="not found"/>
                </div>
            </div>
            <div className="banner">
                <h2>OUR BRANDS</h2>
                <div className="img">
                    <img src="lense4.jpg" alt="not found"/>
                </div>
            </div>
            
            <div className="goagle">
                <img src="lense8.jpg" alt="not found"/>
                <img src="l3.webp" alt="not found"/>
                <img src="lense9.jpg" alt="not found"/>
            </div>
            <div className="maine">
                <img src="lense3.webp"/>
            </div>
        
        <div className="footer">
                <div className="list">
                    <ul>
                        <li>
                        <h2>SERVICES</h2>
                        <a>Store Locator</a>
                        <a>Enter My Power</a>
                        <a>Buying Guide</a>
                        <a>Fraame Size</a>
                        </li>
                    </ul>
                </div>
                <div className="list">
                    <ul>
                       <li>
                       <h2>ABOUT US</h2>
                        <a>We Are Hiring</a>
                        <a>Refer & Earn</a>
                        <a>About Us</a>
                        <a>Lensekart Coupons</a>
                       </li>
                    </ul>
                </div>
                <div className="list">
                    <ul>
                        <li><h2>HELP</h2></li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    )
};
export default Header;