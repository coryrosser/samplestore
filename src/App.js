import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Container from './components/Container'
import { Row, Col } from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
  height: 100%;
  width: 100vw;
  background: #f7f7f7;
  overflow-x: hidden;
`

function App() {
  return (
    <Router>
      <Styles>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Container />
          </Route>
        </Switch>
      </Styles>
    </Router>
  );
}

export default App;
