import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import headshot from './Profile.jpeg'


class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2 style={{ fontFamily: 'hindu' }}>Devin Mauck</h2>
                        <img className="contact-img" src={headshot} alt="Profile" />
                        <h3 style={{ fontFamily: 'hindu' }}>Full Stack Software Engineer</h3>
                    </Cell>
                    <Cell col={6}>
                        <h2 style={{ fontFamily: 'hindu' }}>Contact</h2>
                        <div className="contact-list">
                            <List>
                                <ListItem >
                                    <ListItemContent style={{ fontSize: '40px', fontFamily: 'hindu' }}>
                                        <i class="fas fa-mobile-alt" aria-hidden="true"></i>
                                        540.230.1959
                                    </ListItemContent>
                                </ListItem>
                                <ListItem >
                                    <ListItemContent style={{ fontSize: '35px', fontFamily: 'hindu' }}>
                                        <i class="fas fa-envelope-square"></i>
                                        jmauck86@gmail.com
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;