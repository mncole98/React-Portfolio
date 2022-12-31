import React from 'react';



function Portfolio() {
  return (
    <section class="portfolio">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
        <div class="col">
          <div class="card">
            <img
              src='src/assets/Screenshot 2022-12-31 at 9.32.43 AM.png'
              alt="SmokeSignal"
              class="card-img-top"
            />
            <div class="card-body">

              <a href="https://github.com/jleebootcamp/smokesignal" target="_blank" rel="noreferrer">
                <button>GitHub Repo</button>
              </a>
              <a href="https://jleebootcamp.github.io/smokesignal/" target="_blank" rel="noreferrer">
                <button>Live Site</button>
              </a>
            </div>
          </div>
        </div>


        <div class="col">
          <div class="card">
            <img
              src='src/assets/Screenshot 2022-12-18 at 6.46.11 PM.png'
              alt="What's Good in the Hood?"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/jleebootcamp/goodhood" target="_blank" rel="noreferrer">
                <button>GitHub Repo</button>
              </a>
              <a href="https://goodhood-bootcamp.herokuapp.com" target="_blank" rel="noreferrer">
                <button>Live Site</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img
              src='src/assets/Screenshot 2022-12-31 at 9.39.04 AM.png'
              alt="r-u-bored"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/CalvinBauman/Activity-Finder" target="_blank" rel="noreferrer">
                <button>GitHub Repo</button>
              </a>
              <a href="https://r-u-bored.herokuapp.com/" target="_blank" rel="noreferrer">
                <button>Live Site</button>
              </a>
            </div>
          </div>
        </div>




      </div>
    </section>


  );
}

export default Portfolio;