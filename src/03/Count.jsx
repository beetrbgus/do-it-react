import React, { Component } from 'react';

class Count extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      count: props.count, // 초기값 프로퍼티에서 전달 된 값으로 설정
    };
    this.increaseCount = this.increaseCount.bind(this);
  }

  increaseCount() {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  }
  render() {
    return (
      <div>
        <span>카운트 : {this.state.count}</span>
        <button onClick={this.increaseCount}>카운트 증가</button>
      </div>
    );
  }
}

export default Count;
