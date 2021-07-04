import { Component } from "react";
import Canvas from "./Canvas";

class Animation extends Component<any,{time:number}> {
  rAF: any;
  constructor(props: any) {
    super(props);
    this.state = { time: 0 };
    this.updateAnimationState = this.updateAnimationState.bind(this);
  }

  componentDidMount() {
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  updateAnimationState() {
    this.setState((prevState: { time: number }) => ({
      time: prevState.time + 1,
    }));
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.rAF);
  }

  render() {
    return <Canvas time={this.state.time} />;
  }
}
export default Animation;
