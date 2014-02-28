/** @jsx React.DOM */
var eagle;
var t1 = [];
var time;
var eagle;
var tween;
var rotationSnap = Math.PI / 4;
var Center = React.createClass({displayName: 'Center',

  getInitialState: function() {
    return {text: 'Mandala', value: '', timestamp: ''};
  },
  componentDidMount: function() {
    eagle = this.refs.myInput.getDOMNode();
  },
 
  animate: function() {
    window.requestAnimationFrame(this.animate);
    this.forceUpdate();
    
  },
  update: function(timestamp) {
    if(time === null) 
      time = timestamp;
    var dr = timestamp - time;
    time = timestamp;
    var sum = mori.reduce(mori.sum, 0, t1);
    console.log("sum: "+ sum);
    console.log("rotat: "+ (sum-sum%90));
    //var sum = _.reduce(t1, function(memo, num){ return memo + num; }, 0);
    tween = TweenMax.to(eagle, 50, {transformOrigin:"50% 50% -400px", transformPerspective:500, rotation:(sum), force3D:true, useFrames:true, immediateRender:true});

    this.setState({value: sum, timestamp: Math.floor(timestamp)});
  },
  handleScroll: function(event) {
    window.requestAnimationFrame(this.update);
    t1.push(Math.floor(event.deltaY));
  },
  handleClick: function(event) {
    tween.kill();
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
    var time = this.state.timestamp;
    //var test = this.state;

    //var reverse = value.toLowerCase().split('').reverse().join('');
  
    return (
      React.DOM.div( {className:"container", onClick:this.handleClick, onWheel:this.handleScroll} , 
        React.DOM.h1(null , React.DOM.input( {type:"text", value:text, onChange:this.handleInput} )),
        Left( {side:value, type:"Darkness"} ),
        React.DOM.span( {className:"center"}, "I am the  of the ", text),
        Right( {side:time} ),
        Box( {place:  value, ref:"myInput"} )
      )
    );
  }
});
var Box = React.createClass({displayName: 'Box',
  getDefaultProps: function() {
    return {ref: '', style: ''}
  },
  handleClick: function() {
    var potato = this.refs.potato.getDOMNode();

    TweenLite.to(potato, {background:'#ff44AA'});
    console.log(potato);
  },
  render:function() {
    var style = {width: "200px", height: "200px"};
    if (this.props.place < 1000) {
    return(
      React.DOM.div( {style:style, className:"box"}, 
        React.DOM.div( {className:"blue"})
      )
      );
    } else if (this.props.place > 1000) {
      return(
      React.DOM.div( {ref:"potato", style:style, className:"box"}, 
        React.DOM.div(  {onClick:this.handleClick, style:{width: "50px", height: "50px"}, className:"blue"})
        )
        );
    }
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
      React.DOM.span( {className:"right"}, "Timestamp: ", this.props.side,".")
    );
  }
});


var obj = ({gender: 0});

var avatar = React.renderComponent(
  Center( {profile:obj} ),
  document.body
);







