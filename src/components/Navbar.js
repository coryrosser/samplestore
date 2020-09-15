import React from 'react'
import { GiKnifeFork } from 'react-icons/gi'
import { withRouter } from 'react-router-dom'
import { Row, Col, Image} from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
  height: 8vh;
  width: 100%;
  background: rgb(250, 0, 0, 0.4);

  .logo-img {
    font-size: 7vh;
    margin-top: .25vh;
    margin-left: 1vh;
  }
  .img-col {
    color: #444;
  }
  .brand-name {
    color: #444;
    font-weight: 500;
    font-size: 3vh;
    margin-top: .5vh;
  }
`

const Navbar = (props) => {
  return (
    <Styles>
      <Row>
        <Col xs={3} className='img-col'>
          <GiKnifeFork className='logo-img'/>
          <span className='brand-name'>rest.</span>
        </Col>
        <Col xs={4}>
          Spot 2
        </Col>
        <Col xs={1}>
          Spot 3
        </Col>
        <Col xs={1}>
          Spot 4
        </Col>
        <Col xs={1}>
          Spot 5
        </Col>
        <Col xs={1}>
          Spot 6
        </Col>
      </Row>
    </Styles>
  )
}
export default withRouter(Navbar)