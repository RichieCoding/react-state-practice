import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }

    this.increment = this.increment.bind(this);
    // this.decrement = this.decrement.bind(this);
    // this.reset = this.reset.bind(this);
  }

  increment() {
    this.setState(prevState => {
      return { count: prevState.count + 1 }
    })
  }

  render() {
    return (
      <div className="Counter">
        <p className="count">{this.state.count}</p>
        <section className="controls">
          <button onClick={this.increment}>Increment</button>
          <button>Decrement</button>
          <button>Reset</button>
        </section>
      </div>
    );
  }
}

export default Counter;