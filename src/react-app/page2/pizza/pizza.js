import React from 'react';
import pizzaSrc from 'img/pizza.png';

function Pizza({count}){
  let pizzas = [];
  for(let i = 0; i<count; i++){
    pizzas.push(<img key={i} src={pizzaSrc} height="400" width="400" />);
  }
  return (
    <div className="pizzas">
      {pizzas}
    </div>
  );
}

Pizza.propTypes = {
  count: React.PropTypes.number.isRequired
};

export default Pizza;