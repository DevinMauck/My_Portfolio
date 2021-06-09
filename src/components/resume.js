import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Resume extends Component {
  render() {
    return (
      <div className="resume-body" style={{ marginTop: "50px" }}>
        <Grid className="resume-grid" style={{ margin: "15px 75px" }}>
          <Cell
            col={4}
            className="left-col"
            style={{ fontFamily: "hindu", paddingLeft: "35px" }}
          >
            <h2>Devin Mauck</h2>
            <h4>Software Engineer</h4>
            <div className="resume-contact">
              <hr style={{ borderTop: "3px solid black", width: "55%" }} />
              <h4>Contact</h4>
              <p>Falls Church, VA 22044</p>
              <p>(540)230-1959</p>
              <p>jmauck86@gmail.com</p>
            </div>
            <hr style={{ borderTop: "3px solid black", width: "55%" }} />
            <div className="skills">
              <h4>Skills</h4>
              <ul>
                <li>HTML / CSS</li>
                <li>Javascript / ES6+</li>
                <li>React</li>
                <li>Python</li>
                <li>Django</li>
                <li>Node.js</li>
                <li>MongoDB </li>
                <li>PostgreSQL</li>
                <li>SQL</li>
                <li>Git / GitHub</li>
              </ul>
            </div>
            <hr style={{ borderTop: "3px solid black", width: "55%" }} />
            <div className="education">
              <h4>Education</h4>
              <h6>General Assembly, Washington D.C.</h6>
              <p>Software Engineering Immersive Graduate</p>
              <p>March 2019 - June 2019</p>
              <h6>University of Tennessee, Knoxville TN</h6>
              <p>B.A. in Psychology</p>
              <p>Graduated: May 2009</p>
            </div>
          </Cell>
          <Cell col={8} className="right-col" style={{ fontFamily: "hindu" }}>
            <div className="GA">
              <h4>Relevant Experience</h4>
              <h6>Idea Entity, Herndon, VA</h6>
              <p style={{ fontStyle: "italic", fontWeight: "bold" }}>
                Software Engineer
              </p>
              <p>October 2019 - August 2020</p>
              <p style={{ marginTop: "8px" }}>
                Individually and collaboratively developed projects to solve
                real-world problems using JavaScript/Jquery, PnP, and Sharepoint
                System.{" "}
              </p>
              <dl>
                <dd>
                  Designed, developed, customized and tested financial software
                  programs for government organizations such as the United
                  States Air Force, United States Army and Architects of the
                  Capital.
                </dd>
              </dl>
              <dl>
                <dd>
                  Maintained contact with customers for support and product
                  feedback.
                </dd>
              </dl>
              <dl>
                <dd>
                  Identified and created solutions for bugs and system errors by
                  thoroughly testing software through all phases of development.
                </dd>
              </dl>
              <dl>
                <dd>
                  Assisted in creating step by step user manuals to give the
                  customer full details on how to use the software.
                </dd>
              </dl>
              <dl>
                <dd>
                  Technical Tools Used: Javascript/JQuery, HTML, CSS, PnP,
                  Sharepoint, Visual Studio Code.
                </dd>
              </dl>
            </div>
            <div className="MSE">
              <h6>MONUMENTAL SPORTS & ENTERTAINMENT, Washington D.C.</h6>
              <p style={{ fontStyle: "italic", fontWeight: "bold" }}>
                Regional Sales Manager, Washington Capitals
              </p>
              <p>May 2013 - March 2019</p>
              <ul>
                <li>
                  Consistently met or exceeded monthly goals over my 6-year
                  tenure earning over $4.5 million in total sales revenue.{" "}
                </li>
                <li>
                  Created email marketing campaigns to increase sales revenue.{" "}
                </li>
                <li>
                  Facilitated in the recruitment and hiring of incoming Regional
                  Sales Managers and Inside Sales Account Executives.
                </li>
                <li>
                  Culminated strong leadership and interpersonal skills via
                  mentorships with upper management.
                </li>
                <li>
                  Increased ability to troubleshoot and problem solve in a
                  fast-paced environment.
                </li>
                <li>
                  Boosted organizational and time management skills through
                  various trainers.
                </li>
                <li>
                  Exercised, extreme, attention to detail through writing
                  proposals, as well as tracking monthly/yearly revenue.
                </li>
              </ul>
              <p style={{ fontStyle: "italic", fontWeight: "bold" }}>
                Account Executive, Inside Sales
              </p>
              <p>January 2012 - May 2013</p>
              <ul>
                <li>
                  Established the necessary tools to become successful and have
                  a lengthy sales career through seeking help and guidance from
                  senior level colleagues{" "}
                </li>
              </ul>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
