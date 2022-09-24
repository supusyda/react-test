import React, { useEffect, useState } from "react";

class CountDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sec: 4,
    };
  }
  componentWillUnmount() {
    if (this.countdown) clearInterval(this.countdown);
  }
  componentDidMount() {
    this.countdown = setInterval(() => {
      this.setState({ sec: this.state.sec - 1 });
    }, 1000);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.sec !== prevState.sec && this.state.sec === 0) {
      clearInterval(this.countdown);
      //   this.props.handleTimeUp();
    }
  }

  render() {
    return <>{this.state.sec}</>;
  }
}

const CountdownHooks = () => {
  const [countDown, setCountDown] = useState(60);
  useEffect(() => {
    if (countDown === 0) {
      return;
    }
    setTimeout(() => {
      setCountDown(countDown - 1);
    }, 1000);
  }, [countDown]);
  return (
    <>
      <div>{countDown}</div>
    </>
  );
};
export { CountDown, CountdownHooks };
