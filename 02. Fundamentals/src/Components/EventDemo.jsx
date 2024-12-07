import React from "react";

const EventDemo = () => {
  const handleClick = () => {
    alert("you click this!");
  };

  const copyHandler = () => {
    alert("Stoping copy my content!!!");
  };

  const onMouseOver = () => {
    function onMove() {
      alert("Mouse Move Event Fired");
    }
    <p onMouseOver={moveHandler}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
      voluptatibus libero, eius odit modi doloremque quos magni tempora. Debitis
      laborum exercitationem perferendis. Veritatis fuga, quod quasi accusamus
      eveniet voluptates suscipit.
    </p>;
  };

  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
        quibusdam inventore dolorem quia atque quod deleniti quisquam facere!
        Nemo odio expedita voluptatem consequuntur mollitia nam delectus iusto
        ullam quaerat vitae.
      </p>
      <button onClick={handleClick}>Click Me</button>

      <p onCopy={copyHandler}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        voluptatibus libero, eius odit modi doloremque quos magni tempora.
        Debitis laborum exercitationem perferendis. Veritatis fuga, quod quasi
        accusamus eveniet voluptates suscipit.
      </p>
    </div>
  );
};

export default EventDemo;
