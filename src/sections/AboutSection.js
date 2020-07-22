import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import "./AboutSection.css";
import ArrowIcon from "../components/ArrowIcon";
import {Link, Element } from "react-scroll";

class AboutSection extends Component {
  render() {
    return (
      <div
        style={{ color: this.props.color, backgroundColor: this.props.bgcolor }}
      >
        <Fullpage className="second">
        <div className="about">
          <h3 className="aboutTitle">{data.sections[0].title}</h3>
            {data.sections[0].items.map(p => {
              return(
                <p className="aboutText">
                {p.content}
                <span id="gushi">{p.about}</span><br/>
                <span className="one-more-text">{p.more}</span><br/>
                <span className="one-more-text">{p.once}</span>
                <span className="one-more-text">{p.onceMore}</span><br/>
                {p.last}
                {p.finall}
                {/* <span id="gushi"> </span>  */}
                </p>

              )
            })}
         </div>
        </Fullpage>


        <Link
          activeClass="active"
          to="skill"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          delay={0}
        >
        <ArrowIcon
          icon='fa fa-sort-down'
        />
       </Link>
        <Element name="skill" className="element" />


      </div>
    );
  }
}
export default AboutSection;
