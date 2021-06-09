import React, { Component } from 'react';
import { Tabs, Tab, Cell, Grid, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }
    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzHkSldplYsbviIuEiaL2JRTCWLi9Tz1PNgglUnqaUJ2DweoScHQ) center / cover' }}></CardTitle>
                    <CardText>
                        Tower of Hanoi
                </CardText>
                    <CardActions border>
                        <Button colored>
                            <a href='https://pages.git.generalassemb.ly/DevinMauck/Tower-of-Hanoi/' target="_blank" rel="noopener noreferrer">Try It!</a>
                        </Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share"></IconButton>
                    </CardMenu>
                </Card>
            )
        }
        else if (this.state.activeTab === 1) {
            return (
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://searchengineland.com/figz/wp-content/seloads/2018/08/google-maps-world-smartsync-at-for-google-world-map.jpg) center / cover' }}></CardTitle>
                    <CardText>
                        Footprint: Travel Tracking App
                    </CardText>
                    <CardActions border>
                        <Button colored>
                            <a href='http://footprint.surge.sh/' target="_blank" rel="noopener noreferrer">Try It!</a>
                        </Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share"></IconButton>
                    </CardMenu>
                </Card >
            )
        }
        else if (this.state.activeTab === 2) {
            return (
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK3VFeGYcsRITcNk6uabydVZ7BRwZw5Vh8daO2Xv6I2WArgq_HBA) center / cover' }}></CardTitle>
                    <CardText>
                        Space Invaders: Star Wars
                </CardText>
                    <CardActions border>
                        <Button colored>
                            <a href='https://repl.it/@DevinMauck/Star-Wars-Invaders' target="_blank" rel="noopener noreferrer">Try It!</a>
                        </Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share"></IconButton>
                    </CardMenu>
                </Card>
            )
        }
    }

    render() {
        return (
            <div className="projects-grid">
                <div className="category-tabs">
                    <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                        <Tab>JavaScript</Tab>
                        <Tab>React</Tab>
                        <Tab>Python</Tab>
                    </Tabs>
                </div>
                <section className="projects-section" style={{ marginTop: '50px', borderRadius: '10px' }}>
                    <Grid className="projects-section">
                        <Cell col={12}>
                            <div className="Content">
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
                </section>

            </div>

        )
    }
}

export default Projects;