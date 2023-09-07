import React, { useContext } from 'react'
import { MyContext } from '../mycontext/Mycontext'
import { useNavigate, useParams } from 'react-router-dom'
import { MDBBtn } from 'mdb-react-ui-kit'


function List() {
  const {value}=useContext(MyContext)
  console.log(value)
  const {id}=useParams()
  // console.log(id);
  const change = value.filter(e=>e.id == id)
const navigate=useNavigate()
console.log(change);

  return (
    <div className='w-50 mx-auto mt-5 p-5'  style={{border:" solid black",boxShadow: "0px 0px 10px blue"}}>
        <h4>TITLE:- {change[0].title}</h4>
        <h4>DETAILS:-  {change[0].blog}</h4>
        <MDBBtn className="mt-5" onClick={()=>navigate('/')}>BACK</MDBBtn>
    </div>
  )
}
export default List