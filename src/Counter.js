import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    
  }

  render() {
    return (
      <div className="Counter">
        <p className="count">0</p>
        <section className="controls">
          <button>Increment</button>
          <button>Decrement</button>
          <button>Reset</button>
        </section>
      </div>
    );
  }
}

export default Counter;