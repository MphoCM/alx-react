import logo from './logo.svg';
import './App.css';
import React from 'react';

// Define a functional component named App
function App() {
    // Return JSX elements representing a simple HTML structure
    return (
        <div className="App">
	    <img src="/path/to/holberton-logo." alt=Holberton Logo" />
            {/* Render a heading with the text "Hello, World!" */}
            <h1>Hello, World!</h1>
	  </header>
	  <div className="App-body">
	    <p>Login to access the full dashborad</p>
	</div>
	<footer className="App-footer">
	    <p>opyright 2020 - Holberton School</p>
	</footer>    
        </div>
    );
}

// Export the App component as the default export
export default App;
