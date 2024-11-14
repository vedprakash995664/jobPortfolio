import React from "react";
import '../Css/Action.css'
import { Col, Container, Row } from "react-bootstrap";
function Action(){
    return(
        <Container fluid>
            <br />
            <Row>
                <Col sm={1}></Col>
                <Col sm={5}>
                <div className="leftimg" data-aos="zoom-in">
                    <h3 style={{paddingTop:"40px", paddingLeft:"40px"}}>Become a Candidate</h3>
                    <div style={{width:"300px", marginLeft:"30px"}}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum assumenda  and he is very good person.</p></div>
                    <button style={{width:"170px", color:"#0A65CC",height:"50px", display:"flex", alignItems:"center", justifyContent:"center", backgroundColor:"white", border:"none", marginLeft:"40px", fontWeight:"bolder"}}>Register Now <i class="bi bi-arrow-right" style={{marginTop:"5px", fontSize:"20px", marginLeft:"6px", fontWeight:"bolder"}}></i></button>
                </div>
                </Col>
                <Col sm={5}>
                <div className="rightimg" data-aos="zoom-in">
                <h3 style={{paddingTop:"40px", paddingLeft:"40px", color:"white"}}>Become a Employers</h3>
                    <div style={{width:"300px", marginLeft:"30px", color:"white"}}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum assumenda  and he is very good person.</p></div>
                    <button style={{width:"170px", color:"#0A65CC",height:"50px", display:"flex", alignItems:"center", justifyContent:"center", backgroundColor:"white", border:"none", marginLeft:"40px", fontWeight:"bolder"}}>Register Now <i class="bi bi-arrow-right" style={{marginTop:"5px", fontSize:"20px", marginLeft:"6px", fontWeight:"bolder"}}></i></button>
                </div></Col>
                <Col sm={1}></Col>
            </Row>
        </Container>
    )
}
export default Action;