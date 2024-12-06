import React from 'react'

const Greeting = () => {
  const hello = "hello world";
  const date = new Date();
  return (
    <div>
     <h1>Say:{hello}</h1>
    <p>Date:{date.getDate()}</p>
    </div>
  )
}

export default Greeting
