import React, {Component} from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';

import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div className="app">
          <Header />
          <main>

            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/projects" component={Projects} />

          </main>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
