import React from 'react';
import Home from './home';
import About from './about';
import Resume from './resume';
import Projects from './projects';
import Contact from './contact';
import { Switch, Route } from 'react-router-dom';


const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Resume" component={Resume} />
        <Route path="/Projects" component={Projects} />
        <Route path="/Contact" component={Contact} />
    </Switch>
)

export default Main;