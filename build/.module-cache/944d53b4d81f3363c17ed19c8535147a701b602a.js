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

var Profile = Backbone.Model.extend({
        defaults : {
          name    : null,
          gender  : null,
          picture : null
        }
      });
  
      var CardComponent = React.createClass({displayName: 'CardComponent',
        componentWillMount : function() {
          profile.on("change", (function() {
            this.forceUpdate();
          }.bind(this)));
        },
        componentWillUnmount : function() {
          profile.off("change");
        },
        render : function() {
          return (
            React.DOM.div( {className:"card"}, 
              React.DOM.div( {className:"picture"}, 
                React.DOM.img( {src:this.props.profile.get("picture")} )
              ),
              React.DOM.div( {className:"name"}, 
                this.props.profile.get("name"),
                React.DOM.small(null, 
                  "(",this.props.profile.get("gender"),")"
                )
              )
            )
          );
        }
      });
  
      var connect = document.querySelector(".connect");
      var target  = document.querySelector(".target");
      var profile = new Profile();
  
      var fetchProfile = function() {
        React.renderComponent(
          CardComponent( {profile:profile} ),
          target
        );
  
        FB.api("/me", "get", {}, function(result) {
          profile.set("name", result.name);
          profile.set("gender", result.gender);
        });
  
        var params = "?redirect=false&width=200&height=200";
  
        FB.api(
          "/me/picture" + params,
          "get",
          {},
          function(result) {
            profile.set("picture", result.data.url);
          }
        );
      };
  
      var login = function() {
        FB.login(function() {
          fetchProfile();
        });
      };
    
      window.fbAsyncInit = function() {
    
        FB.init({
          appId  : "609208965836267",
          status : true,
          xfbml  : true
        });
     
        connect.addEventListener("click", function() {
          login();
        });
     
        FB.Event.subscribe(
          "auth.authResponseChange",
          function(response) {
            if (response.status === "connected") {
              fetchProfile();
            }
          }
        );
     
      };
    
      (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/all.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, "script", "facebook-jssdk"));






