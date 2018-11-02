import React, { Component } from "react";
import {DepthOfFieldSnowfall} from 'react-snowflakes';
import {Snowfall, Snowflake} from 'react-snowflakes';

export default class Snow extends Component{
    render(){
        return(
            <div style={{position:'fixed',color:this.props.color, zIndex:'0'}}>
<DepthOfFieldSnowfall count={400}
                      style={{

                        position: 'relative',
                        width: '100vw',
                        height: '400vh',

                      }}>
                      <Snowfall count={55}
          style={{
            position: 'relative',
            width: '100vw',
            height: '100vh'
          }}
          snowflakeFactory={index => {
            const size = index / 500;
            const w = 5 + 10 * size + 'px';
            return (
              <Snowflake speed={.05 + size * 2}
                         xSpeedPrc={.3 * size}
                         ySpeedPrc={.2 * size}
                         style={{
                           width: w,
                           height: w,
                           borderRadius: '50%',
                           backgroundColor: 'red',
                           opacity: .2 + .8 * size,
                           filter: `blur(${Math.round(Math.max(size - .5, 0) * 15)}px)`
                         }}/>
            )
          }}/>
          </DepthOfFieldSnowfall>
            </div>

        )
    }
}
