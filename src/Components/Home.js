import React from 'react';
import { Link } from "react-router-dom";


function Home() {
  return (
    <section className="home my-5">
      <div className="title">
        <h2>Hi, I'm Matthew</h2>
        <p>Read on to learn more about me!</p>
        <Link to="portfolio">
          <button>View my Projects</button>
        </Link>
      </div>
      <div className="portrait">
        <img
          src='src/assets/IMG_1268.JPG'
          alt="self portrait"
        />
      </div>
    </section>
  );
}

export default Home;