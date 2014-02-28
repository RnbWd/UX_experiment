/** @jsx React.DOM */

var Center = React.createClass({displayName: 'Center',
  render: function() {
    return (
      React.DOM.div(null, 
        Left( {side:"Left", type:"Darkness"} ),
        React.DOM.span( {className:"center"}, "I am the center of the mandala"),React.DOM.input( {type:"text"} ),
        Right( {side:"Right", type:"Light"} )
      )
    );
  }
});

var Left = React.createClass({displayName: 'Left',
  render: function() {
    return (
      React.DOM.span( {class:"left"}, "I am ", this.props.side,". I am ", this.props.type)
    );
  }
});

var Right = React.createClass({displayName: 'Right',
  render: function() {
    return (
      React.DOM.span( {class:"right"}, "I am ", this.props.side,". I am ", this.props.type,".")
    );
  }
});



React.renderComponent(
  Center(null ),
  document.getElementById('example')
);