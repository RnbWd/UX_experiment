/** @jsx React.DOM */

var Center = React.createClass({displayName: 'Center',
  getInitialState: function() {
    return {value: 'Death', reverse: 'Death'.reverse()};
  },
  handleInput: function(event) {
    this.setState({value: event.target.value, reverse: event.target.value.reverse()});
  },
  render: function() {
    var value = this.state.value;
    return (
      React.DOM.div( {className:"mandala"}, 
        Left( {side:value, type:"Darkness"} ),
        React.DOM.span( {className:"center"}, "I am the ", React.DOM.input( {type:"text", value:value, onChange:this.handleInput} ), " of the mandala"),
        Right( {side:"Right", type:value} )
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