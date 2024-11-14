import React, { useState, useEffect } from "react";
import '../Css/Frame.css';
import { Col, Container, Row } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Frame() {
    useEffect(() => {
        AOS.init({
        duration: 600, // Animation duration in milliseconds
        easing: 'ease-in-sine', // Easing function
        delay: 100, // Delay in milliseconds
        });
        }, []);
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
    },[]);     

    useEffect(() => {
        AOS.init()});

    return (
        <>    
            <Container fluid style={{ backgroundColor: "#F7F7F8" }}>
                <br />
                <Row>
                    <Col sm={1}></Col>
                    <Col sm={6} data-aos="fade-right">
                        <div className="text ">
                            <h1>Find a Job that suits</h1> 
                            <h1>your interest & skills.</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Ipsa quas architecto voluptatem aliquam fugit.</p>
                        </div>
                        <br /><br />
                        <div className="findJob">
                            <div className="searchLogo">
                                <i className="bi bi-search"></i>
                            </div>
                            <div className="jobname">
                                <input type="search" placeholder="Job title, Keyword, company" />
                            </div>
                            <div style={{ height: "30px", width: "1px", border: "1px solid" }}></div>
                            <div className="location">
                                <i className="bi bi-geo-alt"></i>
                            </div>
                            <div className="locationName">
                                <input type="search" placeholder="Your Location" />
                            </div>
                            &emsp;
                            <div className="findbtn">
                                <button>Find Job</button>
                            </div>
                        </div> 
                        <br /><br /><br />
                        <span style={{ color: "gray" }}>Suggestion:</span>
                        <span style={{ color: "black", fontWeight: "500" }}> Designer, Programming</span>
                        <span style={{ color: "#0A65CC", fontWeight: "500" }}> Digital Marketing</span>
                        <span> Video and Animation</span>
                    </Col>
                    <Col sm={4}>
                        <div data-aos="fade-left">
                            <img src="src/assets/w.png" className="img-fluid" alt="" />
                        </div>
                    </Col>
                    <Col sm={1}></Col>
                </Row>
                <br />
            </Container>
            <Container fluid style={{ backgroundColor: "#F7F7F8" }}>
                <Row>
                    <Col sm={2}></Col>
                    <Col sm={2}>
                        <div className="box1" data-aos="fade-down"> 
                            <div className="box1logo">
                                <i className={jdata.livejobs.imgSrc || "bi bi-search"}></i>
                            </div>
                            <div className="box1txt">
                                <span className="txthead">{jdata.livejobs.heading || "Loading..."}</span><br />
                                <span className="txtbody">Live Jobs</span>
                            </div>
                        </div>
                    </Col>
                    <Col sm={2}>
                        <div className="box1" data-aos="fade-down">
                            <div className="box1logo">
                                <i className={jdata.companies.imgSrc || "bi bi-search"}></i>
                            </div>
                            <div className="box1txt">
                                <span className="txthead">{jdata.companies.heading || "Loading..."}</span><br />
                                <span className="txtbody">{jdata.companies.title || "Loading..."}</span><br />
                            </div>
                        </div>
                    </Col>
                    <Col sm={2}>
                        <div className="box1" data-aos="fade-down">
                            <div className="box1logo">
                               <i className={jdata.Candidates.imgSrc || "bi bi-search"}></i>
                            </div>
                            <div className="box1txt">
                            <span className="txthead">{jdata.Candidates.heading || "Loading..."}</span><br />
                            <span className="txtbody">{jdata.Candidates.title || "Loading..."}</span><br />
                            </div>
                        </div>
                    </Col>
                    <Col sm={2}>
                        <div className="box1" data-aos="fade-down">
                            <div className="box1logo">
                            <i className={jdata.NewJobs.imgSrc || "bi bi-search"}></i>
                            </div>
                            <div className="box1txt">
                            <span className="txthead">{jdata.NewJobs.heading || "Loading..."}</span><br />
                            <span className="txtbody">{jdata.NewJobs.title || "Loading..."}</span><br />
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

export default Frame;
