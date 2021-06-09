import React, { Component } from 'react';
import { Grid, Cell, } from 'react-mdl';
import rome from './Rome.jpg';

class About extends Component {
    render() {
        return (
            <div className="about-body" style={{ margin: '50px 300px 50px 300px', background: 'white' }}>
                <Grid className="about-grid" style={{ fontFamily: 'hindu' }}>
                    <Cell className="about-col" col={12}>
                        <img className="rome" src={rome} alt='golfer' style={{ borderRadius: '50%' }} />
                        <h1 style={{ borderBottom: "2px solid black", textAlign: 'center', margin: '0 100px', paddingTop: '20px', fontFamily: 'Hindu' }}>About Me</h1>
                        <div className="about-text" style={{ textAlign: 'left' }}>
                            <p style={{ fontSize: '20px', fontFamily: 'Hindu', margin: '10px 100px 0 100px' }}>
                                I’m a Software Engineer from Falls Church, VA. I’ve spent the last 4 months completing a vigerous 500 hour Software Engineering Immersive bootcamp with General Assembly. Where I completed 4 projects using various languages and frameworks. React being my favorite. I received my BA in Psychology at the University of Tennessee (Go Vols!). Previously I was a Ticket Sales Manger for the Capitals for 6.5 years from which I was a top earner generating close to 4 million in revenue during my tenure. Along with my passion for programming. I love to travel, play golf (mostly travel to play golf), and lift heavy things for about an hour every day.
                            </p>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;