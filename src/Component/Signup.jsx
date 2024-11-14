import React, { useState, useEffect } from 'react';
import '../Css/SignUp.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Foot from './Foot';
import Header from './Header';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import Swal from 'sweetalert2';

function SignUp() {
  const [name, setName] = useState('');
  const [loginType, setloginType] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const api = 'http://localhost:4000/api/signup';
    const signup = {
      Name: name,
      Email: email,
      User_Name: username,
      Password: password,
      LoginType:loginType
    };

    try {

      const response = await axios.post(api, signup);
      console.log('Signup Successful', response.data);


      Swal.fire({
        icon: 'success',
        title: 'Sign Up Successful!',
        text: 'Your account has been created successfully.',
        confirmButtonText: 'Go to Login',
      }).then(() => {
        window.location.href = '/login';
      });

      setName('');
      setEmail('');
      setUsername('');
      setPassword('');
    } catch (error) {

      if (error.response) {
        console.error("Signup failed", error.response.data);
        Swal.fire({
          icon: 'error',
          title: 'Sign Up Failed!',
          text: error.response.data.message || 'Something went wrong. Please try again.',
          confirmButtonText: 'Retry',
        });
      } else if (error.request) {
        console.error("No response from server", error.request);

        // Show error alert for no response from server
        Swal.fire({
          icon: 'error',
          title: 'Network Error!',
          text: 'There was no response from the server. Please try again later.',
          confirmButtonText: 'Okay',
        });
      } else {
        console.error("Error during signup", error.message);

        // Show error alert for other types of errors
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'An unexpected error occurred. Please try again.',
          confirmButtonText: 'Okay',
        });
      }
    }
  };

  // Initialize AOS animation library
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header />
      <Container className='container1'>
        <div className='signup-box'>
          <Row>
            <Col md={6} className='left' data-aos="fade-down-right">
              <div className="header1">
                <i className="bi bi-plus-lg"></i>
                <div>
                  <span style={{ color: "white", fontSize: "30px", fontWeight: "bold" }}>SIGN UP</span><br />
                  <span style={{ color: "white" }}>Social Media Accounts</span>
                </div>
              </div>
              <div className="bodytxt mt-5">
                <span>We won't post anything without your <br /> permission and your personal details are <br /> kept private.</span>
              </div>
              <div className="social-buttons mt-5">
                <div className="body1">
                  <div className='bodylogo'>
                    <img src="public/google.jpg" alt="Google logo" style={{ height: "30px" }} />
                  </div>
                  <Button className='bodybt' variant="light">SIGN IN WITH GOOGLE</Button>
                </div>
                <div className="body1">
                  <div className='bodylogo'>
                    <img src="src/assets/face.jpg" alt="Facebook logo" style={{ height: "30px" }} />
                  </div>
                  <Button className='bodybt' variant="light">SIGN IN WITH FACEBOOK</Button>
                </div>
                <div className="body1">
                  <div className='bodylogo'>
                    <img src="src/assets/link.jpg" alt="LinkedIn logo" style={{ height: "30px" }} />
                  </div>
                  <Button className='bodybt' variant="light">SIGN IN WITH LINKEDIN</Button>
                </div>
              </div>
            </Col>
            <Col md={6} className='right' data-aos="fade-down-left">
              <div className="header2">
                <i className="bi bi-plus-lg"></i>
                <div>
                  <span style={{ color: "black", fontSize: "30px", fontWeight: "bold" }}>SIGN UP</span><br />
                  <span style={{ color: "black" }}>Create an account</span>
                </div>
              </div>
              <form className="body2" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
                <Button type="submit" className="submit-btn">Submit</Button>
                <span>Have an account? <Link to="/login">Login</Link></span>
              </form>
            </Col>
          </Row>
        </div> {/* End of wrapper */}
      </Container>

      <Foot />
    </>
  );
}

export default SignUp;
