/** @jsx React.DOM */

var Center = React.createClass({displayName: 'Center',
  getInitialState: function() {
    return {value: 'Death'};
  },
  handleInput: function(event) {
    this.setState({value: event.target.value});
  },
  handleScroll: function(event) {
    this.setState({scroll: event.detail});
  },
  render: function() {
    var value = this.state.value;
    var reverse = this.state.value.split('').reverse().join('');
    var scroll = this.state.scroll;
    return (
      React.DOM.div( {className:"mandala", onScroll:this.handleScroll} , 
        Left( {side:value, type:"Darkness"} ),
        React.DOM.span( {className:"center"}, "I am the ", React.DOM.input( {type:"text", value:value, onChange:this.handleInput} ), " of the mandala"),
        Right( {side:scroll, type:reverse} )

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