import React from 'react';
import "./App.css";
function App() {
  const para = {
    color: "red",
    fontSize: "30px",
  }
    return (
        <div>
            <h1 style={{color: "green"}}>Inline styling</h1>
      <p style={para}>internal styling</p>
      <p>this is external styling</p>
        </div>
    );
}

export default App;