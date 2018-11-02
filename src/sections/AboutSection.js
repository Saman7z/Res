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
          <h3>{data.sections[0].title}</h3>
          <div className="matn">
            {data.sections[0].items.map(p => {
              return(
                <p style={{textAlign:"center",justifyContent:"center"}}><br/>{p.content}<br/><br/>
               <span id="gushi"> {p.about}<br/><br/>
                {p.more}<br/><br/>
                {p.once}<br/><br/>
                {p.onceMore}<br/><br/>
                {p.last}<br/><br/>
                {p.finall}</span> 
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
