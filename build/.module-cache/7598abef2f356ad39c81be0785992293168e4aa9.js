/** @jsx React.DOM */

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
    var left = this.state.value.length > 4 ? "Left" : this.state.value;
    return (
      React.DOM.div( {className:"container", onWheel:this.handleScroll} , 
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



/*React.renderComponent(
  <Center />,
  document.body
);*/

var RouterMixin = {
  componentWillMount : function() {
    this.callback = (function() {
      this.forceUpdate();
    }).bind(this);
  
    this.props.router.on("route", this.callback);
  },
  componentWillUnmount : function() {
    this.props.router.off("route", this.callback);
  }
};
 
var FooComponent = React.createClass({displayName: 'FooComponent',
  mixins : [RouterMixin],
  handle : function() {
    this.props.router.navigate("bar", {
      trigger : true
    });
  },
  render : function() {
    var className = "animate-leave animate-leave-active";
  
    if (this.props.router.current == "foo") {
      className = "animate-enter animate-enter-active";
    }
  
    return (
      React.DOM.div( {className:className}, 
        "in foo,", 
        React.DOM.a( {onClick:this.handle}, "go to bar")
      )
    );
  }
});
 
var BarComponent = React.createClass({displayName: 'BarComponent', 
  mixins : [RouterMixin],
  handle : function() {
    this.props.router.navigate("foo", {
      trigger : true
    });
  },
  render : function() {
    var className = "animate-leave animate-leave-active";
  
    if (this.props.router.current == "bar") {
      className = "animate-enter animate-enter-active";
    }
  
    return (
      React.DOM.div( {className:className}, 
        "in bar,", 
        React.DOM.a( {onClick:this.handle}, "go to foo")
      )
    );
  }
});
 
var InterfaceComponent = React.createClass({displayName: 'InterfaceComponent',
  mixins : [RouterMixin],
  render : function() {
    var router = this.props.router;
    return (
      React.DOM.div(null, 
        FooComponent( {router:router} ),
        BarComponent( {router:router} )
      )
    );
  }
});
 
var Router = Backbone.Router.extend({
  routes : {
    "foo" : "foo",
    "bar" : "bar"
  },
  foo : function() {
    this.current = "foo";
  },
  bar : function() {
    this.current = "bar";
  }
});
 
var router = new Router();
 
React.renderComponent(
  InterfaceComponent( {router:router} ),
  document.body
);
 
Backbone.history.start();





