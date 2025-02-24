import React, { Component } from 'react';

class StateExam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      formData: 'no data',
    };

    this.handleData = this.handleData.bind(this);

    setTimeout(this.handleData, 4000);
  }

  handleData() {
    const data = 'new data';
    const { formData } = this.state;

    this.setState({
      loading: false,
      formData: data + formData,
    });

    console.log('loading 값', this.state.loading);
  }

  render() {
    return (
      <div>
        {/* state 데이터는 this.state로 접근 가능합니다.*/}
        <span>로딩 중 : {String(this.state.loading)}</span>
        <span> 결과 : {this.state.formData}</span>
      </div>
    );
  }
}

export default StateExam;
