var React = require('react');
var ReactRouter = require('react-router');

var Link = ReactRouter.Link;

// choices "page"
var Choices = React.createClass({
  render: function() {
      
    var pizzas = [
    {
       name: 'Margherita',
       cheese: 'mozarella',
       toppings: ['tomato', 'basil'],
       price: 10
    },
    {
        name: 'Vegetarian',
       cheese: 'cheddar',
       toppings: ['tomatoes','peppers', 'mushrooms', 'onions', 'olives'],
       price: 12
    },
    {
        name: 'All Dressed',
        cheese: 'cheddar', 
        toppings: ['peppers', 'mushrooms', 'onions', 'pepperoni'],
        price: 15
    },
    {
        name: 'Hawaiian',
        cheese: 'mozzarella',
        toppings: ['ham, pineapple'],
        price: 12
    },
    {
        name: 'Meat Lovers',
        cheese: 'mozzarella',
        toppings: ['pepperoni', 'italian sausage', 'bacon', 'beef', 'ham'],
        price: 15
    }
    ];

    var pizzaChoices = pizzas.map(function(pizza, index){
        console.log(pizza.toppings)
        return (
         <li key={pizza.name + index}>
            <input id={pizza.name + index} type="checkbox" name={pizza.name} value={pizza.price} />
            <label htmlFor={pizza.name + index}>{pizza.name} &#36;{pizza.price}</label>
                <ul>
                    <li>Cheese: {pizza.cheese}</li>
                    <li>Toppings: {pizza.toppings.join(', ')}</li>
                </ul>
         </li>
        );
    });  
      
    return (
      <div className="choices">
        <h1>Choose from the following:</h1>
        <form className="pizzaChoices">
            <ul>
                {pizzaChoices}
            </ul>
        <br/>
        </form>
        <Link className="button customButton" to="/custom">...or make your own</Link>
        <Link className="button placeOrderButton" to="/confirmation">Place Order</Link>
      </div>  
    );
    
  }
});

module.exports = Choices;