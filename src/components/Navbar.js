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
  .nav-item-col {
    text-align: center;
    align-items: center;
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
        <Col 
        className='nav-item-col'
        xs={4}>
          Spot 2
        </Col>
        <Col 
        className='nav-item-col'
        xs={1}>
          About Us
        </Col>
        <Col 
        className='nav-item-col'
        xs={1}>
          Menu
        </Col>
        <Col 
        className='nav-item-col'
        xs={1}>
          Our Team
        </Col>
        <Col 
        className='nav-item-col'
        xs={1}>
          Contact
        </Col>
      </Row>
    </Styles>
  )
}
export default withRouter(Navbar)