import React from 'react'
import { GiKnifeFork } from 'react-icons/gi'
import { withRouter } from 'react-router-dom'
import { Row, Col, Image} from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
  height: 92vh;
  width: 100vw;
  background: #f0efeb;

  .main-container-row{
    margin-left: 0;
    background: #b7b7a4;
    justify-content: center;
    height: 100%;
    max-width: 100vw;
  }
  .main-container-row > .brand-name {
    color: #f0efeb;
    font-size: 5vh;
    font-family: 'Lobster', cursive;
  }
`

const Container = (props) => {
  return (
    <Styles>
      <Row className='main-container-row'>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
      </Row>
    </Styles>
  )
}
export default withRouter(Container)