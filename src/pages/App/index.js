import { useState, useEffect } from 'react'
import './App.css';
import { connect } from 'react-redux'
import Login from '../Login'

// COMPONENTS
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Feed from '../../components/Feed';
import Widgets from '../../components/Widgets';

function App({ user }) {
  return (
    <div className="App">

      {
        ( !user ) ? <Login />
        :
          (
            <>
              <Header />

              <div className="app__body">
                <Sidebar />
                <Feed />
                <Widgets />
              </div>
            </>
          )
      }

      
    </div>
  );
}

const reduxState = state => ({
  user: state.user
})

export default connect(reduxState)(App);