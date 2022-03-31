import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
    return (
        <main>
            <section id="hero"></section>

            <section className="cards">
                <div className="card epl">
                    <Link to="/epl">
                        <button className="card-btn">English Premier League</button>
                    </Link>
                </div>
                <div className="card mls">
                    <Link to="/mls">
                        <button className="card-btn">Major League Soccer</button>
                    </Link>
                </div>
                <div className="card f1">
                    <Link to="/f1">
                        <button className="card-btn">Formula 1</button>
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default Homepage;