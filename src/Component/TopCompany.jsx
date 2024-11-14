import React, { useEffect, useState } from "react";
import '../Css/FeaturedCompanies.css';
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Header";
import Headernext from "./Headnext";
import Foot from "./Foot";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css';

function TopCompany() {
    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/TopCompanyapi.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCardData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        AOS.init()});

    return (
        <div>
            <Header/>
         <br />
        <Container style={{  borderRadius:"10px"}}>
            <Row>
                <Col sm={1}></Col>
                <Col>
                    {/* <div className="headsecfeature">
                        <div style={{ float: "left" }}>
                            <h2>Top Companies</h2>
                        </div>
                        <div className="btnfeature">
                                <button>View All <i className="bi bi-arrow-right"></i></button>
                            </div>
                    </div>   */}
                </Col>
                <Col sm={1}></Col>
            </Row>
            <Row>
                <div className="container" data-aos="fade-right">
                    <div className="row">
                        {cardData.map(card => (
                            <div className="col-md-4 mb-4" key={card.id}>
                                <div className="card shadow-sm">
                                    <div className="card-body" > 
                                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                            <div className="logo">
                                                <img src={card.imgSrc} alt={`${card.title} logo`} className="img-fluid"/>
                                            </div>
                                            <div>
                                                <span className="title">{card.title}</span>
                                                <div className="locationOfCompany text-muted">{card.location}</div>
                                            </div>
                                        </div>
                                        <a href="#" className="btn  mt-3 btnnn" style={{color:"#4188D7", backgroundColor:"#E5EEF8"}}>{card.position}</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Row>
        </Container>
        <Foot/>
        </div>
    );
}

export default TopCompany;
