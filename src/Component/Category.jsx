import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import '../Css/Category.css'
import { Link } from "react-router-dom";

function Category() {
    const [jdata, setJdata] = useState({ livejobs: {}, companies: {}, Candidates: {}, NewJobs: {} });

    const response = async () => {
        try {
            const data = await fetch("/Frameapi.json");
            const datas = await data.json();
            setJdata(datas);
            console.log(datas);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        response();
    }, []);  

    return (
        <>  
            <Container fluid style={{ backgroundColor: "#F7F7F8" }}>
                <br />
            <Row>
                    <Col sm={1}></Col>  
                    <Col>
                        <div className="headsecfeature" data-aos="fade-right">
                            <div style={{ float: "left" }}>
                                <h2>Popular Category</h2>
                            </div>
                            <div className="btnfeature">
                                <Link to='/categorypage'><button>View All <i className="bi bi-arrow-right"></i></button></Link>
                            </div>
                        </div>
                    </Col>
                    <Col sm={1}></Col>
                </Row>

                <Row>
                    <Col sm={2}></Col>
                    <Col sm={2}>
                        <div className="action-box" data-aos="fade-right">
                            <div className="action-logo">
                                <i className={jdata.livejobs.imgSrc || "bi bi-search"}></i>
                            </div>
                            <div className="action-text">
                                <span className="action-head">{jdata.livejobs.heading || "Loading..."}</span><br />
                                <span className="action-body">Live Jobs</span>
                            </div>
                        </div>
                    </Col>
                    <Col sm={2}>
                        <div className="action-box" data-aos="fade-down">
                            <div className="action-logo">
                                <i className={jdata.companies.imgSrc || "bi bi-search"}></i>
                            </div>
                            <div className="action-text">
                                <span className="action-head">{jdata.companies.heading || "Loading..."}</span><br />
                                <span className="action-body">{jdata.companies.title || "Loading..."}</span><br />
                            </div>
                        </div>
                    </Col>
                    <Col sm={2}>
                        <div className="action-box" data-aos="fade-down">
                            <div className="action-logo">
                                <i className={jdata.Candidates.imgSrc || "bi bi-search"}></i>
                            </div>
                            <div className="action-text">
                                <span className="action-head">{jdata.Candidates.heading || "Loading..."}</span><br />
                                <span className="action-body">{jdata.Candidates.title || "Loading..."}</span><br />
                            </div>
                        </div>
                    </Col>
                    <Col sm={2}>
                        <div className="action-box" data-aos="fade-left">
                            <div className="action-logo">
                                <i className={jdata.NewJobs.imgSrc || "bi bi-search"}></i>
                            </div>
                            <div className="action-text">
                                <span className="action-head">{jdata.NewJobs.heading || "Loading..."}</span><br />
                                <span className="action-body">{jdata.NewJobs.title || "Loading..."}</span><br />
                            </div>
                        </div>
                        <br /><br />
                    </Col>
                    <Col sm={2}></Col>
                </Row>
                <Row>
                    <Col sm={2}></Col>
                    <Col sm={2}>
                        <div className="action-box" data-aos="fade-right">
                            <div className="action-logo">
                                <i className={jdata.livejobs.imgSrc || "bi bi-search"}></i>
                            </div>
                            <div className="action-text">
                                <span className="action-head">{jdata.livejobs.heading || "Loading..."}</span><br />
                                <span className="action-body">Live Jobs</span>
                            </div>
                        </div>
                    </Col>
                    <Col sm={2}>
                        <div className="action-box" data-aos="fade-up">
                            <div className="action-logo">
                                <i className={jdata.companies.imgSrc || "bi bi-search"}></i>
                            </div>
                            <div className="action-text">
                                <span className="action-head">{jdata.companies.heading || "Loading..."}</span><br />
                                <span className="action-body">{jdata.companies.title || "Loading..."}</span><br />
                            </div>
                        </div>
                    </Col>
                    <Col sm={2}>
                        <div className="action-box" data-aos="fade-up">
                            <div className="action-logo">
                                <i className={jdata.Candidates.imgSrc || "bi bi-search"}></i>
                            </div>
                            <div className="action-text">
                                <span className="action-head">{jdata.Candidates.heading || "Loading..."}</span><br />
                                <span className="action-body">{jdata.Candidates.title || "Loading..."}</span><br />
                            </div>
                        </div>
                    </Col>
                    <Col sm={2}>
                        <div className="action-box" data-aos="fade-left">
                            <div className="action-logo">
                                <i className={jdata.NewJobs.imgSrc || "bi bi-search"}></i>
                            </div>
                            <div className="action-text">
                                <span className="action-head">{jdata.NewJobs.heading || "Loading..."}</span><br />
                                <span className="action-body">{jdata.NewJobs.title || "Loading..."}</span><br />
                            </div>
                        </div>
                        <br /><br />
                    </Col>
                    <Col sm={2}></Col>
                </Row>

                
            </Container>
        </>
    );
}

export default Category;
