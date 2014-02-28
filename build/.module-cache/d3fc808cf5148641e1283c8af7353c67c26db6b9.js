/** @jsx React.DOM */
var eagle;

function draw() {
  console
  .log('draw');
}
var t1 = [];
var time;
var eagle;
var Center = React.createClass({displayName: 'Center',

  getInitialState: function() {
    return {text: 'Mandala', value: ''};
  },
  componentDidMount: function() {
    eagle = this.refs.myInput.getDOMNode();
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
  update: function(event) {
    
    var sum = mori.reduce(mori.sum, 0, t1);
    TweenLite.to(eagle, 50, {rotation:sum, force3D:true, useFrames:true, immediateRender:true});
    console.log("_" + sum);

    this.setState({value: sum});
  },
  handleScroll: function(event) {
    window.requestAnimationFrame(this.update);
    //this.update();
    t1.push(Math.floor(event.deltaY));
    //var sum = _.reduce(t1, function(memo, num){ return memo + num; }, 0);
   
    
  },
  handleInput: function(event) {
    if (event.target.value == "potato") {
      //this.update();
    }
       
    this.setState({text: event.target.value});
  },
  render: function() {
    var value = this.state.value;
    var text = this.state.text;
    //var test = this.state;

    //var reverse = value.toLowerCase().split('').reverse().join('');
  
    return (
      React.DOM.div( {className:"container", onWheel:this.handleScroll} , 
        React.DOM.h1(null , React.DOM.input( {type:"text", value:text, onChange:this.handleInput} )),
        Left( {side:value, type:"Darkness"} ),
        React.DOM.span( {className:"center"}, "I am the  of the ", text),
        Right( {side:value} ),
        React.DOM.div( {ref:"myInput", className:"box"})
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
      React.DOM.span( {className:"left"}, "I am ", this.props.side,". " )
    );
  }
});

var Right = React.createClass({displayName: 'Right',
  render: function() {
    return (
      React.DOM.span( {className:"right"}, "I am ", this.props.side,".")
    );
  }
});


var obj = ({gender: 0});

var avatar = React.renderComponent(
  Center( {profile:obj} ),
  document.body
);






