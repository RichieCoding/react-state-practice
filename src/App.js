import React from 'react';

import './styles.scss'
import Counter from './Counter';
import { CounterHooks } from './CounterHooks';

const App = () => {
  return (
    <main className="Application">
      <section className="Counters">
        <CounterHooks max={15} step={5} />
      </section>
    </main>
  );
}

export default App;
