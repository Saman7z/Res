import React, { Component } from "react";
import { DepthOfFieldSnowfall } from "react-snowflakes";
import { Snowfall, Snowflake } from "react-snowflakes";

export default class Snow extends Component {
  render() {
    return (
      <div style={{ position: "fixed", color: this.props.color, zIndex: "0" }}>
        <DepthOfFieldSnowfall
          count={7}
          style={{
            position: "relative",
            width: "100vw",
            height: "300vh",
          }}
        >
          <Snowfall
            count={14}
            style={{
              position: "relative",
              width: "100vw",
              height: "100vh",
            }}
            snowflakeFactory={(index) => {
              const size = index / 530;
              const w = 5 + 10 * size + "px";
              return (
                <Snowflake
                  speed={0.02 + size * 2}
                  xSpeedPrc={0.2 * size}
                  ySpeedPrc={0.1 * size}
                  style={{
                    width: w,
                    height: w,
                    borderRadius: "50%",
                    backgroundColor: "red",
                    opacity: 0.2 + 0.8 * size,
                    filter: `blur(${Math.round(
                      Math.max(size - 0.5, 0) * 15
                    )}px)`,
                  }}
                />
              );
            }}
          />
        </DepthOfFieldSnowfall>
      </div>
    );
  }
}
