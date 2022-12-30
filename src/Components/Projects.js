import React from 'react';

import PlaceHolderOne from "../../assets/images/placeholder_1_600.jpg";
import PlaceHolderTwo from "../../assets/images/placeholder_2_600.jpg";
import PlaceHolderThree from "../../assets/images/placeholder_3_600.jpg";
import LookUp from "../../assets/images/LookUp-new.png";
import MakeAppoint from "../../assets/images/make-a-point-app.png";
import FinalProject from "../../assets/images/Final-Project.jpg";

function Portfolio() {
  return (
    <section class="portfolio">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
        <div class="col">
          <div class="card">
            <img
              src={LookUp}
              alt="lookUp"
              class="card-img-top"
            />
            <div class="card-body">

              <a href="https://github.com/kara-krzystan/lookup-by-ben-kara-kristin" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://benmcrae5.github.io/lookup-by-ben-kara-kristin" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>


        <div class="col">
          <div class="card">
            <img
              src={MakeAppoint}
              alt="Make A'Point"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/kara-krzystan/Team-Project-Wk15" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://team-project-wk15.herokuapp.com/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img
              src={FinalProject}
              alt="Final Project"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/kara-krzystan/final-final-v3" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://radiant-scrubland-03545.herokuapp.com/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>


        <div class="col">
          <div class="card">
            <img
              src={PlaceHolderOne}
              alt="Coming Soon"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/kara-krzystan" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://github.com/kara-krzystan" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img
              src={PlaceHolderTwo}
              alt="Coming Soon"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/kara-krzystan" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://github.com/kara-krzystan" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img
              src={PlaceHolderThree}
              alt="Coming Soon"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/kara-krzystan" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://github.com/kara-krzystan" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>


      </div>
    </section>


  );
}

export default Portfolio;