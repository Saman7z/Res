import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import ArrowIcon from "../components/ArrowIcon";
import { Link, Element } from "react-scroll";
import SocialMediaIcons from "react-social-media-icons";
import './Titlesection.css';

class TitlesSection extends Component {


  render() {
    return (
      <div
        style={{ color: this.props.color, backgroundColor: this.props.bgcolor }}
      >

        <Element name="title" className="element" />
        <Fullpage className="first">
          <h1
            className="title"
          >
            {data.title}
          </h1>
          <div id="ggg">
            <h2>{data.subtitle}</h2>
          </div>

          <div>
                    <SocialMediaIcons
                      icons={data.socialIcon}
                      iconSize={"2.5rem"}
                      iconColor={this.props.color}
                      classNamePrefix={'icon'}
                      
                    />
                  </div>


        </Fullpage>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
          delay={0}
        >
          <ArrowIcon
            icon="fa fa-sort-down"
          />
        </Link>
        <Element name="about" className="element" />


      </div>
    );
  }
}
export default TitlesSection;
