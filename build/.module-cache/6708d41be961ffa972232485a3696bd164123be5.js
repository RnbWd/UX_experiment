/** @jsx React.DOM */

var Profile = Backbone.Model.extend({
        defaults : {
          name    : null,
          gender  : null
        }
      });

var Center = React.createClass({displayName: 'Center',
  getInitialState: function() {
    return {value: 'Mandala'};
  },
  handleInput: function(event) {
    this.setState({value: event.target.value});
  },
  handleScroll: function(event) {
    //console.log(event.deltaY);
    //console.log(event.deltaMode);
  },
  render: function() {
    var value = this.state.value;
    var reverse = this.state.value.toLowerCase().split('').reverse().join('');
  
    return (
      React.DOM.div( {className:"container", onWheel:this.handleScroll} , 
        React.DOM.h1(null, React.DOM.input( {type:"text", value:value, onChange:this.handleInput} )),
        Left( {side:this.props.profile.get('gender'), type:"Darkness"} ),
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
  document.body
);







