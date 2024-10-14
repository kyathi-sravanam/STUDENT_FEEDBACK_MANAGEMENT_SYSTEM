import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
} from 'mdb-react-ui-kit';

function Login() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    year: '',
    subject: '',
    faculty: '',
    feedback: ''
  });

  // Faculty members categorized by year and subject
  const facultyByYearAndSubject = {
    'First Year': {
      'Mathematics': ['Dr.kyathi', 'Prof. Arjun'],
      'Physics': ['Dr. swapna', 'Prof. harathi']
    },
    'Second Year': {
      'Computer Science': ['Dr. suresh', 'Prof. sitha'],
      'Electronics': ['Dr. bhaskar', 'Prof. bhagya lakshmi']
    },
    'Third Year': {
      'Data Structures': ['Dr. oohas', 'Prof. mokshith'],
      'Database Systems': ['Dr. kalyani', 'Prof. rajeswari']
    },
    'Fourth Year': {
      'Artificial Intelligence': ['Dr. Ramesh', 'Prof. william'],
      'Network Security': ['Dr. Aleem', 'Prof. sredevi']
    }
  };

  // Handle changes in input fields
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Feedback Submitted');
  };

  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className='g-0'>
          <MDBCol md='6'>
            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-100'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>
              <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                <span className="h1 fw-bold mb-0">Feedback Form</span>
              </div>

              <form onSubmit={handleSubmit}>
                <div>
                  <MDBInput wrapperClass='mb-4' label='Name' id='formControlLg' type='text' size="lg" name="name" value={formData.name} onChange={handleChange}/>
                </div>

                <div>
                  <MDBInput wrapperClass='mb-4' label='Email' id='formControlLg' type='email' size="lg" name="email" value={formData.email} onChange={handleChange}/>
                </div>

                <div>
                  <label>Year: </label>
                  <select name="year" value={formData.year} onChange={handleChange}>
                    <option value="">Select Year</option>
                    <option value="First Year">First Year</option>
                    <option value="Second Year">Second Year</option>
                    <option value="Third Year">Third Year</option>
                    <option value="Fourth Year">Fourth Year</option>
                  </select>
                </div>

                {formData.year && (
                  <div>
                    <label>Subject: </label>
                    <select name="subject" value={formData.subject} onChange={handleChange}>
                      <option value="">Select Subject</option>
                      {Object.keys(facultyByYearAndSubject[formData.year]).map((subject, index) => (
                        <option key={index} value={subject}>{subject}</option>
                      ))}
                    </select>
                  </div>
                )}

                {formData.subject && (
                  <div>
                    <label>Faculty: </label>
                    <select name="faculty" value={formData.faculty} onChange={handleChange}>
                      <option value="">Select Faculty</option>
                      {facultyByYearAndSubject[formData.year][formData.subject].map((faculty, index) => (
                        <option key={index} value={faculty}>{faculty}</option>
                      ))}
                    </select>
                  </div>
                )}

                <div>
                  <MDBInput wrapperClass='mb-4' label='Feedback' id='formControlLg' type='textarea' size="lg" name="feedback" value={formData.feedback} onChange={handleChange}/>
                </div>

                <MDBBtn className="mb-4 px-5" color='dark' size='lg'>Submit</MDBBtn>
              </form>

              <div className='d-flex flex-row justify-content-start'>
                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                <a href="#!" className="small text-muted">Privacy policy</a>
              </div>

            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}

export default Login;
