import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">Logo</div>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="banner">
          <div className="banner-content">
            <h1>Global Communication</h1>
            <form>
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Sign Up</button>
            </form>
          </div>
        </section>
        <section className="content">
          <div className="left-column">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="right-column">
            <h2>Contact Information</h2>
            <p><i className="icon-phone"></i> (+84) 123-456-789</p>
            <p><i className="icon-email"></i> onlinekorean@gmail.com</p>
            <p><i className="icon-location"></i> 123 Street, City, Country</p>
          </div>
        </section>
      </main>
      <footer>
        <p>Copyright © 2024 Korean Warriors | Powered by KS</p>
      </footer>
    </div>
  );
}

export default App;
