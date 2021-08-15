import React, { Component } from "react"
import ReactDOM from 'react-dom';
import ParticleEffectButton from 'react-particle-effect-button';

// import './styles.css';

export default class App extends Component {
  state = {
    hidden: false,
  };
  playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }
  onClick = () => {this.setState({ hidden: !this.state.hidden })}
  render() {
    return (
        <React.Fragment>
        <ParticleEffectButton color="#121019" hidden={this.state.hidden}>
      <div>
        <button onClick={this.playAudio} style={{
              display: "flex",
              alignItems: "center",
              background: '#333',
              color: '#fff',
              padding: '1rem 1rem',
              border: '0',
              borderRadius: 100,
              cursor: 'pointer',
              fontSize: '1px',
              marginLeft:'auto',
              marginRight:'50px',
              textAlign:"center",
              fontFamily:"Montserrat",
              font:"sans-serif"
            }}>
          <span style={{
            letterSpacing:"3px", 
            textTransform:"uppercase", 
            fontSize:"13px",
            fontFamily:"Montserrat",
            font:"sans-serif",
            fontWeight:"700px",
            lineHeight:"1em",
            boxShadow:"0 3px 6px rgba(0,0,0,0.10)",
            }}>Play Audio</span>
        </button>
        <audio className="audio-element">
          <source src="/bg.mp3"></source>
        </audio>
      </div>
      </ParticleEffectButton>
        {/* <button onClick={() => this.setState({ hidden: false })}>reset</button> */}
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);