/** @jsx React.DOM */
var eagle;
var t1 = [];
var time;
var eagle;
var tween;
var garbo;
var count = 0;
var rotationSnap = Math.PI / 4;
var Center = React.createClass({displayName: 'Center',

  getInitialState: function() {
    return {text: 'Mandala', 
            value: '', 
            timestamp: '',
            circle: 'passive',
            vertical: 'passive',
            mandala: 'active'
            }
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
    //garbo = mori.js_to_clj({transformOrigin:"50% 50% -400px", transformPerspective:500, RotationY:(sum), force3D:true, useFrames:true, immediateRender:true});
    if(this.state.circle == 'active')
      TweenMax.to(eagle, 50, {transformOrigin:"50% 50% -400px", transformPerspective:500, rotationY:sum, force3D:true, useFrames:true, immediateRender:true});
    if(this.state.vertical == 'active')
      TweenMax.to(eagle, 50, {transformOrigin:"50% 50% -400px", transformPerspective:500, rotationX:sum, force3D:true, useFrames:true, immediateRender:true});
    if(this.state.mandala == 'active')
      tween = TweenMax.to(eagle, 50, {transformOrigin:"50% 50% -400px", transformPerspective:500, rotation:sum, force3D:true, useFrames:true, immediateRender:true});
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
    var cir = /Circle/;
    var man = /Mandala/;
    var ver = /Vertical/;
    if (cir.test(event.target.value)) {
      this.setState({circle: 'active'});
    } else {
      this.setState({circle: 'passive'})
    }
     if (man.test(event.target.value)) {
      this.setState({mandala: 'active'})
    } else {
      this.setState({mandala: 'passive'})
    }
     if (ver.test(event.target.value)) {
      this.setState({vertical: 'active'})
    } else {
      this.setState({vertical: 'passive'})
    }
    
    this.setState({text: event.target.value});
  },
  render: function() {
    var value = this.state.value;
    var text = this.state.text;
    var time = this.state.timestamp;
    var circle = this.state.circle;
    var mandala = this.state.mandala;
    var vertical = this.state.vertical;
    //var test = this.state;

    //var reverse = value.toLowerCase().split('').reverse().join('');
  
    return (
      React.DOM.div( {className:"container", onClick:this.handleClick, onWheel:this.handleScroll} , 
        React.DOM.h1(null, React.DOM.input( {ref:"Input", type:"text", value:text, onChange:this.handleInput} )),
        Left( {side:text, type:"Darkness"} ),
        React.DOM.span( {className:circle} , "Circle"),
        React.DOM.span( {className:vertical} , "Vertical"),
        React.DOM.span( {className:mandala} , "Mandala"),
        Progress( {side:value} ),
        Box( {place:value, ref:"myInput"} )
      )
    );
  }
});
var Box = React.createClass({displayName: 'Box',
  getInitialState: function() {
    return {size: {width: '20%', height: '20%'}}
  },
  getDefaultProps: function() {
    return {ref: '', place: '', size: {width: '20%', height: '20%'}}
  },
  componentWillReceiveProps: function(nextProps) {
  this.setState({
    size: {width: "'"+20+count+"%'", height: "'"+20+count+"%'"}
  });
  count++;
  },
  handleClick: function() {
    
  },
  render:function() {
    var style = {width: "200px", height: "200px"};

    return(
      React.DOM.div( {ref:"potato", style:style, className:"box"}, 
        React.DOM.div(  {onClick:this.handleClick, style:this.props.size, className:"blue"}, this.props.place)
        )
        );
    }
  
});

var Left = React.createClass({displayName: 'Left',
  render: function() {
    return (
      React.DOM.span( {className:"left"}, "I am ", this.props.side,". " )
    );
  }
});

var Progress = React.createClass({displayName: 'Progress',
  render: function() {
    return (
      React.DOM.span( {className:"right"}, "Progress: ", this.props.side,".")
    );
  }
});


var obj = ({gender: 0});

var avatar = React.renderComponent(
  Center( {profile:obj} ),
  document.body
);






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
