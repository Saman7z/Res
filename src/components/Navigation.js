import React, { Component } from "react";
import { Link } from "react-scroll";
import "./Nav.css"

export default class Navigation extends Component {
  render() {
    return (
      <div
               style={{
          position: "fixed",
          width: "100%",
          margin: "0",
          padding: "10"
        }}

      >
        <span
          className="fa fa-magic rotate-center"
          onClick={this.props.src}
          style={{
            color: "red",
            fontSize: "24px",
            padding: "5px",
            float: "right",
            marginRight: "5",
            marginTop:"28px",
            zIndex:"999999"
          }}
        >Magic Wand</span>

        <nav>

          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            delay={0}
          >
            <a className="lii"
              style={{
                color: this.props.color,
                marginleft: "5px",
                padding: "5px",
                textDecorationColor: this.props.color
              }}
            >
              About
            </a>
          </Link>

          <Link
            activeClass="active"
            to="skill"
            spy={true}
            smooth={true}
            offset={0}
            duration={1200}
            delay={0}
          >
            <a className="lii"
              style={{
                color: this.props.color,
                marginRight: "5px",
                padding: "5px"
              }}
            >
              Skill
            </a>
          </Link>
        </nav>
      </div>
    );
  }
}
