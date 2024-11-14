import React from "react";
import '../Css/Foot.css'
import { Col, Container, Row } from "react-bootstrap";
function Foot(){
    return(
       <>
       <br /><br />
        <Container fluid style={{backgroundColor:"#18191C", color:"white"}}>
            <Row className="p-0 m-0" style={{minHeight:"330px"}}>
                <Col sm={1} className="p-0 m-0"></Col>
                <Col sm={2} className="p-0 m-0">
                <div style={{height:"200px", marginTop:"50px", paddingTop:"50px"}}>
                    <h6 style={{paddingLeft:"40px"}}>Quick Links</h6>
                    <ul>
                        <li><i class="bi bi-arrow-right"></i> About</li>
                        <li><i class="bi bi-arrow-right"></i> Contact</li>
                        <li><i class="bi bi-arrow-right"></i> Pricing</li>
                        <li><i class="bi bi-arrow-right"></i> Blogs</li>
                    </ul>

                </div>
                </Col>
                <Col sm={2} className="p-0 m-0">
                <div style={{height:"200px", marginTop:"50px", paddingTop:"50px"}}>
                    <h6  style={{paddingLeft:"40px"}}>Candidates</h6>
                    <ul>
                        <li><i class="bi bi-arrow-right"></i> Browse  Job</li>
                        <li><i class="bi bi-arrow-right"></i> Browse Employer</li>
                        <li><i class="bi bi-arrow-right"></i> Candidates Account</li>
                    </ul>

                </div>
                </Col>
                {/* <Col sm={2} className="p-0 m-0">
                <div style={{height:"200px", marginTop:"50px", paddingTop:"50px"}}>
                    <h6  style={{paddingLeft:"40px"}}>Employers</h6>
                    <ul>
                        <li><i class="bi bi-arrow-right"></i> Post a Job</li>
                        <li><i class="bi bi-arrow-right"></i> Browse a Candidates</li>
                        <li><i class="bi bi-arrow-right"></i> Employer Dashboard</li>
                    </ul>

                </div>
                </Col> */}
                <Col sm={2} className="p-0 m-0">
                <div style={{height:"200px", marginTop:"50px", paddingTop:"50px"}}>
                    <h6  style={{paddingLeft:"40px"}}>Supports</h6>
                    <ul>
                        <li><i class="bi bi-arrow-right"></i> Faqs</li>
                        <li><i class="bi bi-arrow-right"></i> Privacy Policy</li>
                        <li><i class="bi bi-arrow-right"></i> Terms & Conditions</li>
                    </ul>

                </div>
                </Col>
                <Col sm={4} className="p-0 m-0">
                <div style={{height:"200px", marginTop:"50px", paddingTop:"50px"}}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.1984406591014!2d80.95302410956837!3d26.897196576559008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957af687373f1%3A0xa4954bfe5bfda975!2sDomino&#39;s%20Pizza!5e0!3m2!1sen!2sin!4v1729859718707!5m2!1sen!2sin" style={{height:"200px",width:"100%"}}   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                </Col>
                <Col sm={1} className="p-0 m-0"></Col>
            </Row>
            <Row>
            <center>
    <hr style={{ borderColor: "white", borderWidth: "2px", borderStyle: "solid", width: "100%", maxWidth: "1100px", margin: "0 auto" }} />
</center>
</Row>
    <br />
<Row>
    <Col sm={1}></Col>
    <Col>
    <center>
    <b>&copy; All Copyright Reserved to Techvine Coders</b>
    </center>
    </Col>
        <Col>
        <center>
        <b>Designed & Developed by #TechvineCoders</b>
        </center>
        </Col>
    <Col sm={1}></Col>
</Row>
    <br />
    <br />
        </Container>
       </>
    )
}
export default Foot;