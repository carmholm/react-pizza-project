var React = require('react');
var ReactRouter = require('react-router');

var Link = ReactRouter.Link;

var Custom = React.createClass({
  render: function() {
      
    var cheeses = [
        {
            name: 'cheddar',
            displayName: 'Cheddar Cheese',
            price: 1
        }, 
        {
            name: 'parmesan',
            displayName:'Parmigiano Reggiano',
            price: 1
        }, 
        {
            name: 'mozzarella',
            displayName: 'Mozarrella Cheese',
            price: 2
        }, 
        {
            name: 'feta',
            displayName: 'Feta Cheese',
            price: 2
        }
    ];  
      
    var toppings = [
        {
            name: 'ham',
            displayName: 'Ham',
            price: 2
        },
        {
            name: 'pepperoni',
            displayName: 'Pepperoni',
            price: 2
        },
        {
            name: 'peppers',
            displayName: 'Peppers',
            price: 1
        },
        {
            name: 'tomatoes',
            displayName: 'Tomatoes',
            price: 1
        },
        {
            name:'olives',
            displayName: 'Olives',
            price: 1
        },
        {
            name: 'anchovies',
            displayName: 'Anchovies',
            price: 2
        },
    ];
    
    var cheeseToppings = cheeses.map(function(cheese, index){
        return(
        <li key={cheese.name + index}>
            <input id={cheese.name + index} type="checkbox" name="cheese.name" value="cheese.price"/>
            <label htmlFor={cheese.name + index}>{cheese.displayName} &#36;{cheese.price}</label>
        </li>
        );
    });
      
    var pizzaToppings = toppings.map(function(topping, index){
        return (
            <li key={topping.name + index}>
                <input id={topping.name + index} type="checkbox" name={topping.name} value={topping.value}/>
                <label htmlFor={topping.name + index}>{topping.displayName} &#36;{topping.price}</label>
            </li>
        ); 
    }); 
      
    return (
      <div>
        <h4>Pick a cheese</h4>
        <ul>
        {cheeseToppings} 
        </ul>
        <br/>
        <h4>Pick 4 toppings</h4>
        <ul>
        {pizzaToppings}
        </ul>
        <br/>
        <h4>PRICE</h4> 
        <br/>
        <Link className="button" to="/confirmation">Place your order!</Link>
      </div>  
    );
  }
});

module.exports = Custom;