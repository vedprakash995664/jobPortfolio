import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import '../Css/Header.css';
import '../Css/FindJob.css';
import Foot from './Foot';
import { Col, Container, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Header from "./Header";

import AOS from 'aos';
import 'aos/dist/aos.css';

function FindJob() {
    const [jobs, setJobs] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        // Fetch the JSON data
        fetch('/FeaturedJobapi.json')
            .then(response => response.json())
            .then(data => setJobs(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);  

    useEffect(() => {
        AOS.init(); // Initialize AOS
    }, []);

    // Handle search query change
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // Filter jobs based on the search query
    const filteredJobs = jobs.filter(job => 
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <Container fluid className="p-0">
                <Header />
                <Row style={{ backgroundColor: "white" }}>
                    <Col sm={1}></Col>
                    <Col sm={10}>
                        <Navbar expand="lg" className="header" data-aos="slide-right" data-aos-delay="10" data-aos-duration="600" >
                            <Container>
                                <Navbar.Brand style={{ display: "flex", gap: "10px", alignItems: "center", justifyContent: "center" }}>
                                    <h2>Featured Job</h2>
                                </Navbar.Brand>
                                <Form className="d-flex" style={{ gap: "6px" }}>
                                    <Form.Control
                                        type="search"
                                        placeholder="Job, Keyword, Company"
                                        className="search"
                                        aria-label="Search"
                                        value={searchQuery}
                                        onChange={handleSearchChange}
                                    />
                                    <button className='searchjobbtn'>Search</button>
                                </Form>
                            </Container>
                        </Navbar>
                    </Col>
                    <Col sm={1}></Col>
                </Row>
                <Container fluid style={{ backgroundColor: "#F7F7F8" }}>
                    <br />
                    <div className="container">
                        <Row className="justify-content-center">
                            {filteredJobs.map(({ id, title, type, salary, icon, company, location }) => (
                                <Col xs={12} sm={6} md={4} key={id} className="mb-4">
                                    <Card 
                                        className="card" 
                                        data-aos="zoom-out-down" 
                                        data-aos-delay="300"  
                                        data-aos-duration="600" 
                                    >
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
                    <Foot />
                </Container>
            </Container>
        </>
    );
}

export default FindJob;
