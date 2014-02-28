/** @jsx React.DOM */
var Center = React.createClass({displayName: 'Center',
  render: function() {
    return (
      React.DOM.div(null, React.DOM.h1(null,  " I am the center " ))
    );
  }
});
React.renderComponent(
  Center(null ),
  document.getElementById('example')
);