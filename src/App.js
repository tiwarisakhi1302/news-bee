import './App.css';

//I'll be making a class based component
//rcc
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './Components/About';

export default class App extends Component {
  apiKey="a30777818a824e2782ffa0664cf28a47"
  state = {
    progress : 0,
  }
  setProgress=(progress)=>{
    this.setState({progress : progress})
  }
  render() {
    return (
      <div>
      <Router>
      <Navbar></Navbar>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
      <Routes>
        <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" heading="Top" pageSize={this.pageSize} country="in" category="general"/>}/>
        <Route exact path="/Sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" heading="Sports" pageSize={this.pageSize} country="in" category="sports"></News>}/>
        <Route exact path="/Business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" heading="Business" pageSize={this.pageSize} country="in" category="business"></News>}/>
        <Route exact path="/Health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" heading="Health" pageSize={this.pageSize} country="in" category="health"></News>}/>
        <Route exact path="/Science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" heading="Science" pageSize={this.pageSize} country="in" category="science"></News>}/>
        <Route exact path="/Technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" heading="Technology" pageSize={this.pageSize} country="in" category="technology"></News>}/>
        <Route exact path="/Entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" heading="Entertainment" pageSize={this.pageSize} country="in" category="entertainment"></News>}/>
        <Route exact path="/About" element={<About></About>}/>
      </Routes>
      </Router>
      </div>
    )
  }
}
