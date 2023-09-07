import React from 'react'
import {MDBNavbar,MDBContainer, MDBNavbarBrand,} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';


export default function Navbar() {
    const navigate=useNavigate()
    const eventHandleHome=()=>{
        navigate('/')
    }
    const eventHandleCreate=()=>{
        navigate('/create')
    }

  return (
    <>
    <div>
  <MDBNavbar fixed='top' light style={{boxShadow: '0px 0px  5px black' }} >
        <MDBContainer fluid className='justify-content-start  '>
          <MDBNavbarBrand className="mx-5 "onClick={eventHandleHome}>HOME</MDBNavbarBrand>
          <MDBNavbarBrand className="mx-5"onClick={eventHandleCreate}>CREATE</MDBNavbarBrand>
        </MDBContainer>
  </MDBNavbar>
          <br/>
          <br/>
          <br/>
          <br/>
    </div>
  </>
  )
}






