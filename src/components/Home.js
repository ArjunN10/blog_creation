import React, { useContext } from "react";
import Navbar from "./Navbar";
import { MDBCard, MDBCardBody, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../mycontext/Mycontext";

const Home = () => {
  const { value } = useContext(MyContext);
  const navigate = useNavigate();

  const handleCardButtonClick = (id) => {
    navigate(`/list/${id}`);
  };

  return (
    <div>
      <Navbar />

      <MDBRow className="w-50 mx-auto my-3 bg-dark">
        <h2 className="text-danger my-3 text-decoration-underline">BLOGS</h2>
        {value.map((data) => (
          <MDBCol sm="15" key={data.id}>
            <MDBCard
              className="rounded bg-light my-4"
              style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)" }}
            >
              <MDBCardBody>
                <MDBBtn
                  className="text-dark text-size-3"
                  onClick={() => handleCardButtonClick(data.id)}
                >
                  <h1>{data.title}</h1>
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
    </div>
  );
};

export default Home;
