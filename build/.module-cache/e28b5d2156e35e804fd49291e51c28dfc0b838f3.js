/** @jsx React.DOM */
var Center = React.createClass({displayName: 'Center',
  render: function() {
    return (
      React.DOM.div(null, 
        Left(null ),
        React.DOM.span( {class:"center"}, "I am the center of the mandala"),
        Right(null )
      )
    );
  }
});

var Left = React.createClass({displayName: 'Left',
  render: function() {
    return (
      React.DOM.span( {class:"left"}, "I am Left. I am darkness")
    );
  }
});

var Right = React.createClass({displayName: 'Right',
  render: function() {
    return (
      React.DOM.span( {class:"right"}, "I am Right. I am Light.")
    );
  }
});



React.renderComponent(
  Center(null ),
  document.getElementById('example')
);