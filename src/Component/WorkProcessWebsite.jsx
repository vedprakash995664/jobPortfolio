import React from "react";
import '../Css/WorkProcess.css'
import { Col, Container, Row } from "react-bootstrap";
function WorkProcess(){
    return(
     <>
        <Container fluid style={{backgroundColor:"#F1F2F4"}}>
                 <Row>
                    <Col sm={1}></Col>
                    <Col><h1 style={{marginTop:"40px",textAlign:"center"}}>How Techvine Coders Work</h1></Col>
                    <Col sm={1}></Col>
                 </Row>
            <Row>
                <Col sm={2}></Col>
                {/* <Col> */}
                    {/* <div className="work"> */}
                    <Col sm={2}>
                        <div className="workbox" data-aos="slide-right">
                            <div className="workboxlogo">
                                <div className="lo"><i class="bi bi-person-fill-add"></i></div>
                            </div>
                            <div className="workboxtxt">
                                <h5 style={{textAlign:"center"}}>Create Account</h5>
                                <p style={{textAlign:"center", color:"gray"}}>Aliquam facilisis egestas sapien,nec <br /> tempor leo tristique at.</p>
                            </div>
                        </div>
                        </Col>
                        <Col sm={2}>
                        <div className="workbox" data-aos="zoom-in">
                            <div className="workboxlogo">
                            <div className="lo"><i class="bi bi-cloud-arrow-up-fill"></i></div>
                            </div>
                            <div className="workboxtxt">
                            <h5 style={{textAlign:"center"}}>Upload CV/Resume</h5>
                            <p style={{textAlign:"center", color:"gray"}}>Aliquam facilisis egestas sapien,nec <br /> tempor leo tristique at.</p>
                            </div>
                        </div>
                        </Col>
                        <Col sm={2}>
                        <div className="workbox" data-aos="zoom-in">  
                            <div className="workboxlogo">
                            <div className="lo"><i class="bi bi-search-heart"></i></div>
                            </div>
                            <div className="workboxtxt">
                            <h5 style={{textAlign:"center"}}>Find suitable job</h5>
                            <p style={{textAlign:"center", color:"gray"}}>Aliquam facilisis egestas sapien,nec <br /> tempor leo tristique at.</p>
                            </div>
                        </div>
                        </Col>
                        <Col sm={2}>
                        <div className="workbox" data-aos="slide-left">
                            <div className="workboxlogo">
                            <div className="lo"><i class="bi bi-patch-check-fill"></i></div>
                            </div>
                            <div className="workboxtxt">
                            <h5 style={{textAlign:"center"}}>Apply job</h5>
                            <p style={{textAlign:"center", color:"gray"}}>Aliquam facilisis egestas sapien,nec <br /> tempor leo tristique at.</p>
                            </div>
                        </div>
                        <br /><br />
                        </Col>
                    {/* </div> */}
                {/* </Col> */}
                <Col sm={2}></Col>
               
            </Row>    
        </Container> 
     
     </>
    )
}
export default WorkProcess;  