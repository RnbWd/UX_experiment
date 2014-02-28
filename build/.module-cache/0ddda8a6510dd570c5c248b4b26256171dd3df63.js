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
  componentWillMount : function() {
    profile.on("change", (function() {
      this.forceUpdate();
    }.bind(this)));
  },
  componentWillUnmount : function() {
    profile.off("change");
  },
  handleInput: function(event) {
    this.setState({value: event.target.value});
  },
  render: function() {
    var value = this.state.value;
    var reverse = this.state.value.toLowerCase().split('').reverse().join('');
  
    return (
      React.DOM.div( {className:"container"} , 
        React.DOM.h1(null, React.DOM.input( {type:"text", value:value, onChange:this.handleInput} )),
        Left( {side:this.props.profile.get('gender'), type:"Darkness"} ),
        React.DOM.span( {className:"center"}, "I am the  of the ", value),
        Right( {side:"Right", type:reverse} )

      )
    );
  }
});

var SVG = React.creatClass({
  render:function() {
    return (
      React.DOM.svg( {className:"svg"}
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
      React.DOM.span( {className:"right"}, "I am ", this.props.side,". I am ", this.props.type,".")
    );
  }
});

var profile = new Profile();

React.renderComponent(
  Center( {profile:profile} ),
  document.body
);







