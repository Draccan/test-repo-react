import React from "react";
import ReactDOM from "react-dom";
 
var HelloWorld = React.createClass({
  render: function() {
    return (
      <p>Hello, {this.props.greetTarget}!</p>
    );
  }
});
 
ReactDOM.render(
  <div>
    <HelloWorld greetTarget="BatAHHAman"/>
    <HelloWorld greetTarget="Iron MNNNNAan"/>
    <HelloWorld greetTarget="Nicolas Cage"/>
    <HelloWorld greetTarget="Mega Man"/>
    <HelloWorld greetTarget="BoKOno"/>
    <HelloWorld greetTarget="Catwoman"/>
  </div>,
  document.querySelector("#container")
);  