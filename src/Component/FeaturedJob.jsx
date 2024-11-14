import React, { useEffect, useState } from "react";
import '../Css/FeaturedJob.css';
import { Col, Container, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button'; // Import Bootstrap Button
import { Link } from "react-router-dom";

function FeaturedJob() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        // Fetch the JSON data
        fetch('/FeaturedJobapi.json')
            .then(response => response.json())
            .then(data => setJobs(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);  

    return (
        <>
            <Container fluid style={{ backgroundColor: "#F7F7F8" }}>
                <Row>
                    <Col sm={1}></Col>
                    <Col>
                        <div className="headsecfeature">
                            <div style={{ float: "left" }}>
                                <h2>Featured Job</h2>
                            </div>
                            <div className="btnfeature">
                                <Link to='/findjob'><button>View All <i className="bi bi-arrow-right"></i></button></Link>
                            </div>
                        </div>
                    </Col>
                    <Col sm={1}></Col>
                </Row>
                <div className="container">
            <Row className="justify-content-center">
                {jobs.slice(0, 3).map(({ id, title, type, salary, icon, company, location }) => (
                    <Col xs={12} sm={6} md={4} key={id} className="mb-4">
                        <Card className="card" data-aos="fade-right">
                            <ListGroup className="jobcard">
                                <ListGroup.Item style={{ border: 'none' }}>
                                    <h5 style={{ fontWeight: "bold", fontSize: "20px" }}>{title}</h5>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <div style={{ display: "flex", gap: "10px" }}>
                                            <div className="jobtime">
                                                <span>{type}</span>
                                            </div>
                                            <div>Salary: <span style={{ color: "gray" }}>{salary}</span></div>
                                        </div>
                                        <Button className="applybtn" size="sm">Apply</Button>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item style={{ border: 'none' }}>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <div className="icon-container">
                                            <img src={icon} alt={`${company} logo`} style={{ height: "50px", width: "50px", borderRadius: "8px" }} />
                                        </div>
                                        <div className="job-company">
                                            <span>{company}</span><br />
                                            <div className="job-location">
                                                <span>
                                                    <i className="bi bi-geo-alt-fill"></i> {location}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                ))}
            </Row>
            </div>
            </Container>
        </>
    );
}

export default FeaturedJob;
