/** @jsx React.DOM */

var Center = React.createClass({displayName: 'Center',
  render: function() {
    return (
      React.DOM.div(null, 
        Left( {side:"Left"} ),
        React.DOM.span( {className:"center"}, "I am the center of the mandala"),
        Right( {side:"Right"} )
      )
    );
  }
});

var Left = React.createClass({displayName: 'Left',
  render: function() {
    return (
      React.DOM.span( {class:"left"}, "I am ", this.props.side,". I am darkness")
    );
  }
});

var Right = React.createClass({displayName: 'Right',
  render: function() {
    return (
      React.DOM.span( {class:"right"}, "I am ", this.props.side,". I am Light.")
    );
  }
});



React.renderComponent(
  Center(null ),
  document.getElementById('example')
);