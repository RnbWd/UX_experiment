/** @jsx React.DOM */
var eagle;
var Profile = Backbone.Model.extend({
        defaults : {
          name    : null,
          gender  : 0
        }
      });

function draw() {
  console
  .log('draw');
}

var Center = React.createClass({displayName: 'Center',

  getInitialState: function() {
    return {value: 'Mandala'};
  },
  setProps: function(prop) {

  },
  /*componentWillMount : function() {
    profile.on("change:gender", (function() {
      this.forceUpdate();
    }.bind(this)));
  },
  componentWillUnmount : function() {
    profile.off("change");
  },*/
  animate: function() {
    window.requestAnimationFrame(this.animate);
    this.forceUpdate();
    
  },
  update: function() {
    eagle = this.refs.myInput.getDOMNode();
  },
  handleInput: function(event) {
    if (event.target.value == "potato") {
      this.animate();
    }
       
    this.setState({value: event.target.value});
  },
  render: function() {
    var value = this.state.value;
    var test = this.state;
    var reverse = value.toLowerCase().split('').reverse().join('');
  
    return (
      React.DOM.div( {className:"container"} , 
        React.DOM.h1(null, React.DOM.input( {ref:"myInput", type:"text", value:value, onChange:this.handleInput} )),
        Left( {side:reverse, type:"Darkness"} ),
        React.DOM.span( {className:"center"}, "I am the  of the ", value),
        Right( {side:test, type:this.props} )
      )
    );
  }
});

var Triangle = React.createClass({displayName: 'Triangle',
  render:function() {
    return (
      React.DOM.div(null, 
      React.DOM.svg( {className:"svg"}, 
        React.DOM.path( {d:"M150 0 L"+this.props.top+"L225 200 Z", stroke:"black", strokeWidth:"1", fill:this.props.color} )
      )
      )
    );
  }
})

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
      React.DOM.span( {className:"right"}, "I am ", this.props.side,". I am ", React.DOM.p(null, this.props.type))
    );
  }
});

var profile = new Profile();

var obj = ({gender: 0});

var avatar = React.renderComponent(
  Center( {profile:obj} ),
  document.body
);







