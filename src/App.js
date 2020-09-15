import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import { Row, Col } from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
`

function App() {
  return (
    <Router>
      <Styles>
        <Navbar />
        <Switch>
          
        </Switch>
      </Styles>
    </Router>
  );
}

export default App;
