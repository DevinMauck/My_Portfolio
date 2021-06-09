import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import './App.css';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title="Devin Mauck" scroll>
          <Navigation className="media-bar">
            {/* <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link> */}

            {/* LinkedIn */}
            <div className="social-media">
              <a href="https://www.linkedin.com/in/devinmauckprofile/" target="_blank" rel="noopener noreferrer">
                <i className="linkedIn" class="fab fa-linkedin" aria-hidden="true" />
              </a>
              {/* GitHub */}
              <a href="https://git.generalassemb.ly/DevinMauck" target="_blank" rel="noopener noreferrer">
                <i className="github" class="fab fa-github-square" aria-hidden="true" />

              </a>
            </div>
          </Navigation>
        </Header>
        <Drawer title="My Portfolio">
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content className="page-content">

          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
