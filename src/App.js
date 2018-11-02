import React, { Component } from "react";
import data from "./data.json";
import "./App.css";
import TitlesSection from "./sections/TitlesSection";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import Navigation from "./components/Navigation";
import ScrollTop from "./components/ScrollTop";
import Snow from "./components/snow";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textColor: data.color.textColor,

      backgroundColor: [
        data.color.backgroundColor[0].bgColor,
        data.color.backgroundColor[1].bgColor,
        data.color.backgroundColor[2].bgColor
      ]
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    if (this.state.textColor === "black") {
      this.setState({
        textColor: "rgba(7, 11, 24, 1)",
        backgroundColor: [
          "rgba(240, 243, 89, 1)",
          "rgba(17, 223, 202, 1)",
          "rgba(191, 49, 13, 0.82)"
        ]
      });
    }
    if (this.state.textColor === "rgba(7, 11, 24, 1)") {
      this.setState({
        textColor: "yellow",
        backgroundColor: [
          "rgba(128, 12, 221, 1)",
          "rgba(171, 89, 123, 1)",
          "rgba(11, 120, 89, 1)"
        ]
      });
    }
    if (this.state.textColor === "yellow") {
      this.setState({
        textColor: "blue",
        backgroundColor: [
          "rgba(210, 17, 151, 1)",
          "rgba(96, 52, 52, 0.88)",
          "rgba(11, 27, 123, 1)"
        ]
      });
    }
    if (this.state.textColor === "blue") {
      this.setState({
        textColor: "black",
        backgroundColor: [
          "rgba(110, 190, 35, 1)",
          "rgba(244, 114, 212, 0.85)",
          "rgba(242, 212, 242, 0.85)"
        ]
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Navigation
          color={this.state.textColor}
          bgcolor={this.state.backgroundColor[1]}
          src={this.changeColor}
        />
        <Snow color={this.state.textColor} />


        <TitlesSection
          color={this.state.textColor}
          bgcolor={this.state.backgroundColor[0]}
        />

        <AboutSection
          color={this.state.textColor}
          bgcolor={this.state.backgroundColor[1]}
        />
        <SkillSection
          color={this.state.textColor}
          bgcolor={this.state.backgroundColor[2]}
          bgColorCard={this.state.backgroundColor[0]}
        />

        <ScrollTop color={this.state.textColor} />
      </div>
    );
  }
}

export default App;
