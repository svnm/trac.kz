import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import Header from '../components/Header'

function App({ pushPath, children }) {
  return (
    <div>

      <Header />

      <main>
        {children}
      </main>
    </div>

  );
};

module.exports = connect(
  null
)(App)
