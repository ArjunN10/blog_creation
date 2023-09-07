import React, { useContext } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBInput,
  MDBInputGroup,
  MDBTextArea,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../mycontext/Mycontext";

function Create() {
  const { value, setvalue } = useContext(MyContext);
  const navigate = useNavigate();
  const eventHandlerBack = () => {
    navigate("/");
  };
  const eventHandlerAdd = (event) => {
    const title = event.target.typeText.value;
    const blog = event.target.textAreaExample.value;
    setvalue(
      (s) => (s = [...value, { id: Date.now(), title: title, blog: blog }])
    );
    alert("You have successfully created new Blog");
    navigate("/");
  };
  return (
    <>
      <MDBContainer className="mt-5 w-100">
        <form onSubmit={eventHandlerAdd}>
          <label className="text-danger">CREATE BLOG </label>
          <MDBInputGroup className=" w-50 ms-auto me-auto mt-3">
            <label className="col-2  text-primary ">TITLE: </label>
            <MDBInput
              className="col-10 "
              label="Add Blog Title"
              id="typeText"
              type="text"
            />
          </MDBInputGroup>
          <MDBInputGroup className="  w-50 ms-auto me-auto mt-3">
            <MDBTextArea
              label="Add Blog Content"
              id="textAreaExample"
              rows={10}
            />
          </MDBInputGroup>
          <div className="mt-5">
            <MDBBtn color="dark" onClick={eventHandlerBack}>
              {" "}
              BACK
            </MDBBtn>
            <MDBBtn color="dark" className="ms-3" type="submit">
              {" "}
              ADD
            </MDBBtn>
          </div>
        </form>
      </MDBContainer>
    </>
  );
}

export default Create;
