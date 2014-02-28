/** @jsx React.DOM */

var Center = React.createClass({displayName: 'Center',
  getInitialState: function() {
    return {value: 'Mandala'};
  },
  handleInput: function(event) {
    this.setState({value: event.target.value});
  },
  handleScroll: function(event) {
    console.log(event.deltaY);
    console.log(event.deltaX);
  },
  render: function() {
    var value = this.state.value;
    var reverse = this.state.value.toLowerCase().split('').reverse().join('');
    var left = this.state.value.length > 4 ? "Left" : this.state.value;
    return (
      React.DOM.div( {className:"mandala", onWheel:this.handleScroll} , 
        React.DOM.h1(null, React.DOM.input( {type:"text", value:value, onChange:this.handleInput} )),
        Left( {side:left, type:"Darkness"} ),
        React.DOM.span( {className:"center"}, "I am the  of the ", value),
        Right( {side:"Right", type:reverse} )

      )
    );
  }
});

var Left = React.createClass({displayName: 'Left',
  render: function() {
    return (
      React.DOM.span( {className:"left"}, "I am ", this.props.side,". I am ", this.props.type)
    );
  }
});

var Right = React.createClass({displayName: 'Right',
  render: function() {
    return (
      React.DOM.span( {className:"right"}, "I am ", this.props.side,". I am ", this.props.type,".")
    );
  }
});



React.renderComponent(
  Center(null ),
  document.getElementById('example')
);