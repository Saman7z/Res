import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import SkillCard from "../components/SkillCard";
import ArrowIcon from "../components/ArrowIcon";
import {Link, Element } from "react-scroll";
import './Skillsection.css';


class SkillSection extends Component {
  render() {
    return (
      <div style={{color:this.props.color,backgroundColor:this.props.bgcolor}}>

       <Element name="skill" className="element" />
      <Fullpage className="third">
        <h3>{data.sections[1].title}</h3>
        <div className="cards-wrapper">
          {data.sections[1].items.map(eachskill => {
            return <SkillCard bgColorCard={this.props.bgColorCard} skill={eachskill} />;
          })}
        </div>
      </Fullpage>

     <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          delay={0}
        >
        <ArrowIcon
          icon='fa fa-sort-up'

        />
       </Link>









      </div>
    );
  }
}
export default SkillSection;
