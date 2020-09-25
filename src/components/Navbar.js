import React from 'react'
import { GiKnifeFork } from 'react-icons/gi'
import { withRouter } from 'react-router-dom'
import { Row, Col, Image} from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
  height: 8vh;
  width: 100vw;
  background: #eddcd2;
  

  .logo-img {
    font-size: 7vh;
    margin-top: .25vh;
    margin-left: 1vh;
  }
  .nav-item-col {
    text-align: center;
    align-items: center;
    cursor: pointer;
  }
  .nav-item-col > div {
    margin-top: 2.5vh;
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
        </Col>
        <Col 
        className='nav-item-col'
        xs={1}>
          <div>Menu</div>
        </Col>
        <Col 
        className='nav-item-col'
        xs={1}>
          <div>About Us</div>
        </Col>
        <Col 
        className='nav-item-col'
        xs={1}>
          <div>Our Team</div>
        </Col>
        <Col 
        className='nav-item-col'
        xs={1}>
          <div>Contact</div>
        </Col>
      </Row>
    </Styles>
  )
}
export default withRouter(Navbar)