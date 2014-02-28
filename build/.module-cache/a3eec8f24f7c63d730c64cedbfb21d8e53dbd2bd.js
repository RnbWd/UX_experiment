/** @jsx React.DOM */
var eagle;

function draw() {
  console
  .log('draw');
}
var t1 = [];

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
  update: function(position) {
    
  },
  handleScroll: function(event) {
    this.setState({value: event.deltaY});
    var eagle = this.refs.myInput.getDOMNode();
    TweenLite.to(eagle, 1, {rotation:event.deltaY, force3D:true, useFrames:true})
    //var t1 = new TimelineLite();
    //t1.add( TweenLite.to(eagle, 1000, {rotation:"-360", force3D:true, useFrames:true}) );
    //t1.seek(Math.floor(event.deltaY));
    t1.push(Math.floor(event.deltaY));
    //var x = mori.filter(mori.is_even, t1);
    var sum = mori.reduce(mori.sum, 0, t1)
    //var sum = _.reduce(t1, function(memo, num){ return memo + num; }, 0);
    console.log("mori" + sum);
    //console.log("_" + sum)
    //console.log(t1);
  },
  handleInput: function(event) {
    if (event.target.value == "potato") {
      this.update();
    }
       
    this.setState({value: event.target.value});
  },
  render: function() {
    var value = this.state.value;
    var test = this.state;

    //var reverse = value.toLowerCase().split('').reverse().join('');
  
    return (
      React.DOM.div( {className:"container", onWheel:this.handleScroll} , 
        React.DOM.h1(null , React.DOM.input( {ref:"myInput", type:"text", value:value, onChange:this.handleInput} )),
        Left( {side:value, type:"Darkness"} ),
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


var obj = ({gender: 0});

var avatar = React.renderComponent(
  Center( {profile:obj} ),
  document.body
);







