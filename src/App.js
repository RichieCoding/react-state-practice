import React from 'react';

import './styles.scss'
import Counter from './Counter';

const App = () => {
  return (
    <main className="Application">
      <section className="Counters">
        <Counter />
      </section>
    </main>
  );
}

export default App;
