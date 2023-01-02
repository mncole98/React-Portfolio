import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Components/pages/About";
import Portfolio from "./Components/pages/Portfolio";
import Contact from "./Components/pages/Contact";

function App() {
    return (
        <Router basename="/ReactPortfolio">
            <div>
                <Navbar />
                <Route exact path="/" component={About} />
                <Route exact path="/about" component={About} />
                <Route exact path="/ReactPortfolio/about" component={About} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/ReactPortfolio/portfolio" component={Portfolio} />
                <Route path="/contact" component={Contact} />
                <Route path="/ReactPortfolio/contact" component={Contact} />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
