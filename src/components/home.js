import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import headshot from './Profile.jpeg'

class Home extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="home-grid">
                    <Cell col={12}>
                        <img className="profile-img" src={headshot} alt="Profile" />

                        <div className="banner-text" style={{ fontFamily: 'Hindu' }}>
                            <h1 style={{ fontFamily: 'Hindu' }}>Full Stack Software Engineer</h1>
                            <hr />
                            <p style={{ fontFamily: 'Hindu' }}>HTML/CSS  |  Javascript  |  React  |  React-MDL  |  Python  |  MongoDB  |  SQL  |  OOP  |  Git </p>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Home;