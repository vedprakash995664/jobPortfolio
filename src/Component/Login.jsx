    import React, { useState, useEffect } from 'react';
    import { Link, useNavigate } from 'react-router-dom';
    import '../Css/Login.css';
    import { Button, Col, Container, Row } from 'react-bootstrap';
    import Foot from './Foot';
    import Header from './Header';
    import AOS from 'aos';
    import 'aos/dist/aos.css';
    import axios from 'axios';

    function Login() {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [loginType, setloginType] = useState('');
        const [error, setError] = useState(null); // To handle error messages
        const navigate = useNavigate();  // Import the navigate function

        const handleLogin = async (e) => {
            e.preventDefault();
            console.log("Data is", { email, password, loginType });
            

            const apiUrl = "http://localhost:4000/api/login"; 
            const loginData = { Email: email, Password: password, LoginType: loginType };

            try {
                // Send POST request to the API
                const response = await axios.post(apiUrl, loginData);
                console.log("Login Successful", response.data);

                const name = response.data.Users ? response.data.Users.Name : "Guest";
                if(loginType=='JobSeeker'){
                navigate("/udashboard", { state: { name } });
            }
            else if(loginType=='Recruiter'){
                navigate("/rdashboard", { state: { name } });
            }

                // Reset form fields after successful login
                setEmail('');
                setPassword('');
                setError(null); 
            } catch (err) {
                console.error("Login failed", err);
                if (err.response && err.response.data && err.response.data.message) {
                    setError(err.response.data.message);  // Use API's error message
                } else {
                    setError("Login failed. Please check your credentials or try again later.");
                }
            }
        
    }


        useEffect(() => {
            AOS.init();  // Initialize animations
        }, []);

        return (
            <>
                <Header />
                <Container className='container1'>
                    <div className='login-box'>
                        <Row>
                            {/* Left Column - Social Logins */}
                            <Col md={6} className='left' data-aos="zoom-in-right">
                                <div className="header1">
                                    <i className="bi bi-lock-fill"></i>
                                    <div>
                                        <span style={{ color: "white", fontSize: "30px", fontWeight: "bold" }}>LOGIN</span><br />
                                        <span style={{ color: "white" }}>Access Your Account</span>
                                    </div>
                                </div>
                                <div className="bodytxt mt-5">
                                    <span style={{ color: "white" }}>Welcome back! Please login to continue.</span>
                                </div>
                                <div className="social-buttons mt-5">
                                    <div className="body1">
                                        <div className='bodylogo'>
                                            <img src="/google.jpg" alt="Google logo" style={{ height: "30px" }} />
                                        </div>
                                        <Button variant="light" className="social-button">SIGN IN WITH GOOGLE</Button>
                                    </div>
                                    <div className="body1">
                                        <div className='bodylogo'>
                                            <img src="/face.jpg" alt="Facebook logo" style={{ height: "30px" }} />
                                        </div>
                                        <Button variant="light" className="social-button">SIGN IN WITH FACEBOOK</Button>
                                    </div>
                                    <div className="body1">
                                        <div className='bodylogo'>
                                            <img src="/link.jpg" alt="LinkedIn logo" style={{ height: "30px" }} />
                                        </div>
                                        <Button variant="light" className="social-button">SIGN IN WITH LINKEDIN</Button>
                                    </div>
                                </div>
                            </Col>
                            
                            {/* Right Column - Login Form */}
                            <Col md={6} className='right' data-aos="zoom-in-left">
                                <div className="header2">
                                    <i className="bi bi-lock-fill"></i>
                                    <div>
                                        <span style={{ color: "black", fontSize: "30px", fontWeight: "bold" }}>LOGIN</span><br />
                                        <span style={{ color: "black" }}>Access Your Account</span>
                                    </div>
                                </div>
                                <form className="body2" onSubmit={handleLogin}>
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)} 
                                        required
                                    />
                                    <label htmlFor="loginType">Select Login Type</label>
                                    <select value={loginType} onChange={(e) => setloginType(e.target.value)} name="loginType" required>
                                        <option value="" disabled>Select</option>
                                        <option value="JobSeeker">Job Seeker</option>
                                        <option value="Recruiter">Recruiter</option>
                                    </select>
                                    <br />
                                    {error && <div className="error-message">{error}</div>} {/* Display error message if any */}
                                    <Button type="submit" className="submit-btn">Login</Button>
                                </form>
                                <div className="signup-link mt-3">
                                    <span>Don't have an account? <Link to="/signup">Sign Up</Link></span>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
                <Foot />
            </>
        );
    }

    export default Login;
