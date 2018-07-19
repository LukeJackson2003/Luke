import React, { Component } from 'react';
import './App.css';
import Typewriter from 'react-typewriter';
import classNames from "classnames";


class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      class: classNames('App'),
      sections: {
        coreBg: {
          typing: 0,
        },
        coreColours: {
          typing: 0,
        },
        finalSection: {
          typing: 0,
        }
      }       
    };
    this.initCoreBgSection = this.initCoreBgSection.bind(this);
    this.initCoreColoursSection = this.initCoreColoursSection.bind(this);
    this.initFinalSection = this.initFinalSection.bind(this);
  }

  
initCoreBgSection() {
  setTimeout(() => {
  let sections = this.state.sections;
  sections.coreBg.typing = 1;
  
  this.setState({
    class: classNames('App'),
    sections:sections
  });
}, 1000);
}

  initCoreColoursSection() {
    setTimeout(() => {
    let sections = this.state.sections;
    sections.coreColours.typing = 1;
    
    this.setState({
      class: classNames('App', 'AppCoreBg'),
      sections:sections
    });
  }, 1000);
  }

  initFinalSection() {
    setTimeout(() => {
    let sections = this.state.sections;
    sections.finalSection.typing = 1;

    this.setState({
      class: classNames('App', 'AppCoreBg', 'AppCoreColours'),
      sections:sections
    });
  }, 1000);
  }
  
  render() {
    return (
      <div className={this.state.class}>
      <Typewriter typing={1} onTypingEnd={this.initCoreBgSection}>
        /**<br/>
        * Hi My name is Luke, I am a year 10 secondary school student<br/>
        *<br/>
        * This is my website, written to showcase my programming skills.<br/>
        */<br/><br/>
      </Typewriter>
      
      <Typewriter typing={this.state.sections.coreBg.typing} onTypingEnd={this.initCoreColoursSection}>
      /**<br/>
        * This would look better with a background colour to make it stand out.<br/>
        */<br/>
        background-color:  darkred;<br/><br/>
      </Typewriter>

      <Typewriter typing={this.state.sections.coreColours.typing} onTypingEnd={this.initFinalSection}>
        /**<br/>
        * We can't read the text properly now, let's change that.<br/>
        */<br/>
        color: rgb(251, 255, 9); <br/><br/>
      </Typewriter>

      <Typewriter typing={this.state.sections.finalSection.typing}>
        /**<br/>
        * Things I have learned in Dev. while constructing this:<br/>
        * navigating the command line - cd pwd ect.<br/>
        * Creating a Github account<br/>
        * Homebrew and yarn<br/>
        * Basic Git commands and repo setup: <a href="https://github.com/LukeJackson2003/Luke" target="_blank">https://github.com/LukeJackson2003/Luke</a><br/>
        * Creating a react app<br/>
        * Deploying to Github pagers<br/>
        * How to set up a webpage using Java Script, CSS and HTML<br/>
        * basics of how to code in Java Script and CSS, such as<br/>
        * How to write and change the colour of text, and add breaks in lines of text<br/>
        * How to change the background colour and area of the screen it affects<br/>
        * How to order different actions by changing when different functions are called.<br/>
        */<br/>
      </Typewriter>


      </div>
    );
  }
}


export default App;
