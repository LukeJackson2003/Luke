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
    this.initColourChangeSection = this.initColourChangeSection.bind(this);
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
  }, 500);
  }
  
  initColourChangeSection() {
    setTimeout (() => {
    let sections = this.state.sections;

    this.setState({
      class: classNames('AppChangeColours'),
      sections:sections
    });
    }, 500);
  }

  render() {
    return (
      <div className={this.state.class}>
      <Typewriter typing={1} onTypingEnd={this.initCoreBgSection}>
        /**<br/>
        * Hello My name is Luke, I am a year 10 secondary school student<br/>
        *<br/>
        * This is my website, written to showcase my programming skills.<br/>
        * (hopefully it impresses you)<br/>
        */<br/><br/>
      </Typewriter>
      
      <Typewriter typing={this.state.sections.coreBg.typing} onTypingEnd={this.initCoreColoursSection}>
      /**<br/>
        * This would look better with a background colour to make it stand out, white backgrounds aren't very interesting.<br/>
        background-color:  darkred;<br/>
        */<br/><br/>
      </Typewriter>

      <Typewriter typing={this.state.sections.coreColours.typing} onTypingEnd={this.initFinalSection}>
        /**<br/>
        * That looks better...<br/>
        * Wait, we can't read the text properly now,<br/>
        * that's not helpful,<br/>
        * let's fix it.<br/>
        color: rgb(251, 255, 9); <br/>
        */<br/><br/>
      </Typewriter>

      <Typewriter typing={this.state.sections.finalSection.typing} onTypingEnd={this.initColourChangeSection}>
        /**<br/>
        * There, we can read it now.<br/>
        * Things I have learned in Dev. while coding this (this'll be a long list):<br/>
        * navigating the command line - cd pwd ect.<br/>
        * Creating a Github account<br/>
        * Homebrew and yarn<br/>
        * Basic Git commands and repo setup: <a href="https://github.com/LukeJackson2003/Luke" target="_blank">https://github.com/LukeJackson2003/Luke</a><br/>
        * Creating a react app<br/>
        * Deploying to Github pages<br/>
        * How to set up a webpage using Java Script, CSS and HTML<br/>
        * basics of how to code in Java Script and CSS, such as<br/>
        * How to write and change the colour of text, and add breaks in lines of text<br/>
        * How to change the background colour and area of the screen it affects<br/>
        * How to order different actions by changing when different functions are called.<br/>
        * <br/>
        * Hang on, that link isn't legible, (also dark blue on dark red doesn't look good  at all!)<br/>
        * I know, I'll invert the colours, blue on yellow would look better<br/>
        background-color: rgb(255, 251, 9);<br/>
        color: darkred;<br/>
        */<br/><br/>
      </Typewriter>


      </div>
    );
  }
}


export default App;
