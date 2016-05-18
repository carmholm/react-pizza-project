var React = require('react');
var ReactRouter = require('react-router');

var data = require('../data');

// order "page"
var Order = React.createClass({
    
    getInitialState: function() {
        
        var info = data.getData('info') || {};
        
        return {
            name: info.name || '',
            email: info.email || '',
            phoneNumber: info.phoneNumber || '',
            streetNumber: info.streetNumber || '',
            streetName: info.streetName || '',
            city: info.city || '',
            province: info.province || '',
            postalCode: info.postalCode || ''
        };
    },
    handleChange: function(fieldThatChanged, ev) {
        var newState = {};
        
        newState[fieldThatChanged] = ev.target.value;
        
        this.setState(newState);
    },

    choices: function() {
        this.props.history.push('/choices');
    },    
        
    render: function() {
      
    var disabled = this.state.name.length === 0 || this.state.email.length === 0 || this.state.phoneNumber.length === 0 || this.state.streetNumber.length === 0 || this.state.streetName.length === 0 || this.state.city.length === 0 || this.state.province.length === 0 || this.state.postalCode.length === 0;
      
    var that = this;
      
    return (
    <div className="orderForm">
      <h1>Place your order!</h1>
        <form className="orderInfo">
            <label>Name:</label>
            <input value={this.state.name} onChange={ function(ev) {that.handleChange('name', ev); } } type="text" name="name"/>
            <br/>
            <label>Email:</label>
            <input value={this.state.email} onChange={ function(ev) {that.handleChange('email', ev); } } type="text" name="email"/>
            <br/>
            <label>Phone Number:</label>
            <input value={this.state.phoneNumber} onChange={ function(ev) {that.handleChange('phoneNumber', ev); } } type="text" name="phoneNumber"/>
        </form>
        <br/>
        <h4>Home Address</h4>
        <form className="homeAddress">
            <label>Street Number:</label>
            <input value={this.state.streetNumber} onChange={ function(ev) {that.handleChange('streetNumber', ev); } } type="text" name="streetNumber"/>
            <br/>
            <label>Street Name:</label>
            <input value={this.state.streetName} onChange={ function(ev) {that.handleChange('streetName', ev); } } type="text" name="streetName"/>
            <br/>
            <label>City:</label>
            <input value={this.state.city} onChange={ function(ev) {that.handleChange('city', ev); } } type="text" name="city"/>
            <br/>
            <label>Province:</label>
            <input value={this.state.province} onChange={ function(ev) {that.handleChange('province', ev); } } type="text" name="province"/>
            <br/>
            <label>Postal Code:</label> 
            <input value={this.state.postalCode} onChange={ function(ev) {that.handleChange('postalCode', ev); } } type="text" name="postalCode"/>
        </form>
        <br/>
        <button onClick={this.choices} className="nextButton" type="button" disabled={disabled}>NEXT</button>
    </div>  
    );
  }
});

module.exports = Order;