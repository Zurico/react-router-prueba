import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import Home from './home';

class App extends React.Component {
   render() {
      return (
         <div>
            <ul>
               <Link to="home">Home</Link>
               <Link to="about">About</Link>
               <Link to="Contact">Contact</Link>
            </ul>

           {this.props.children}
         </div>
      )
   }
}

class About extends React.Component {
   render() {
      return (
         <div>
            <h1>About...</h1>
         </div>
      )
   }
}

class Contact extends React.Component {
   render() {
      return (
         <div>
            <h1>Contact...</h1>
         </div>
      )
   }
}

ReactDOM.render((
   <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
         <IndexRoute component = {Home} />
         <Route path = "home" component = {Home} />
         <Route path = "about" component = {About} />
         <Route path = "contact" component = {Contact} />
      </Route>
   </Router>

), document.getElementById('app'))
