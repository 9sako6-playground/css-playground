import React, { Component } from 'react';
export class AnimationWrapper extends Component {
  render() {
    const animationContainerSize = 64;
    return <div
      style={{
        width: animationContainerSize,
        height: animationContainerSize,
        padding: animationContainerSize / 2,
        margin: `${animationContainerSize / 2}px auto`,
        border: 'solid 0.1px #eee',
      }}>
      {this.props.children}
    </div>
  }
}