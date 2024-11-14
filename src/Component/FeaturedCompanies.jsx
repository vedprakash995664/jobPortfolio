import React, { useEffect, useState } from "react";
import '../Css/FeaturedCompanies.css';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function FeatureCompanies() {
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

    return (
        <Container style={{ backgroundColor: "#F7F7F8" }}>
            <Row>
                <Col sm={1}></Col>
                <Col>
                    <div className="headsecfeature">
                        <div style={{ float: "left" }}>
                            <h2>Top Companies</h2>
                        </div>
                        <div className="btnfeature">
                                <Link to='/topcompany'><button>View All <i className="bi bi-arrow-right"></i></button></Link>
                            </div>
                    </div>  
                </Col>
                <Col sm={1}></Col>
            </Row>
            <Row>
                <div className="container" data-aos="fade-right">
                    <div className="row">
                        {cardData.map(card => (
                            <div className="col-md-4 mb-4" key={card.id}>
                                <div className="card shadow-sm">
                                    <div className="card-body">
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
    );
}

export default FeatureCompanies;
