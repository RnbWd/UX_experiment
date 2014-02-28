/** @jsx React.DOM */
var Center = React.createClass({displayName: 'Center',
  render: function() {
    return (
      React.DOM.div(null, "I am the center man")
    );
  }
});
React.renderComponent(
  Center(null ),
  document.getElementById('example')
);