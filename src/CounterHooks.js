import React, { useState, useEffect } from 'react'

import useLocalStorage from './useLocalStorage'


const storeStateInLocalStorage = (count) => {
  localStorage.setItem('counterState', JSON.stringify( { count } ))
}


export const CounterHooks = ({ max, step }) => {
  const [count, setCount] = useLocalStorage(0, 'count');

  const increment = () => {
    setCount(c => {
      if (c >= max) return c;
      return c + step;
    })
  }
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(0)

  useEffect(() => {
    document.title = `Counter: ${count}`;
  },[count] )

  useEffect(() => {
    storeStateInLocalStorage(count)
  }, [count])

  return (
    <div className="Counter">
        <p className="count">{count}</p>
        <section className="controls">
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>
        </section>
      </div>
  )
}
