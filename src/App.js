import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [userType, setUserType] = useState(''); // To store whether 'Student' or 'Faculty' is selected
  const [isRegistering, setIsRegistering] = useState(false); // To track if the user is registering
  const [formData, setFormData] = useState({
    name: '',
    id: '',
    email: '',
    year: '',
    subject: '',
    faculty: '',
    feedback: '',
    empId: '',
    password: '' // Only for registration
  });

  // Faculty options based on year and subject
  const facultyByYearAndSubject = {
    'First Year': {
      'CTSD': ['Dr. Suresh Kumar', 'Prof. Manvitha Sharma'],
      'DTI': ['Dr. Swapna', 'Prof. Harathi'],
      'DTW': ['Dr. Mueed', 'Prof. Vaishanavi']
    },
    'Second Year': {
      'Java Full Stack': ['Dr. Suresh', 'Prof. Neha'],
      'DWM': ['Dr. Sravanathi', 'Prof. Kyathi'],
      'DAV': ['Dr. Mohit', 'Prof. Akshai']
    },
    'Third Year': {
      'CTOOD': ['Dr. Arjun', 'Prof. Ram Charan'],
      'DS': ['Dr. NTR', 'Prof. Chiranjeevi'],
      'MFE': ['Dr. Joshitha', 'Prof. Sai Pallavi']
    },
    'Fourth Year': {
      'FLAT': ['Dr. Arjun Reddy', 'Prof. Ranbir Singh'],
      'Chemistry': ['Dr. Mukesh Kumar', 'Prof. Alia Bhatt'],
      'Capstone Project': ['Dr. Priyanka Singh', 'Prof. Venkat']
    }
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitStudent = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Student Feedback Submitted');
  };

  const handleSubmitFaculty = (e) => {
    e.preventDefault();
    alert('Faculty viewing feedback');
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Registration details:", formData);
    alert('Account Created Successfully');
    setIsRegistering(false); // Switch back to login after registration
  };
<h1 className="welcome-heading">Welcome to the Feedback System</h1>

  return (
    <div>
      <h1>Welcome to the Feedback System</h1>
      {/* User type selection */}
      {!userType && !isRegistering && (
        <div className="user-selection">
          <h2>Select User Type</h2>
          <button onClick={() => setUserType('Student')}>Student</button>
          <button onClick={() => setUserType('Faculty')}>Faculty</button>
        </div>
      )}
      
      {/* Registration Form */}
      {isRegistering && (
        <div className="form-container">
          <h1>Register {userType}</h1>
          <form onSubmit={handleRegister}>
            <div className="input-group">
              <label>Name: </label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div className="input-group">
              {userType === 'Student' && (
                <div>
                  <label>Student ID: </label>
                  <input type="text" name="id" value={formData.id} onChange={handleChange} />
                </div>
              )}
              {userType === 'Faculty' && (
                <div>
                  <label>Employee ID: </label>
                  <input type="text" name="empId" value={formData.empId} onChange={handleChange} />
                </div>
              )}
            </div>
            <div className="input-group">
              <label>Email: </label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="input-group">
              <label>Password: </label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} />
            </div>
            <button type="submit">Register</button>
          </form>
          <button onClick={() => setIsRegistering(false)}>Go Back to Login</button>
        </div>
      )}

      {/* Student and Faculty Feedback Forms */}
      {!isRegistering && userType && (
        <div className="form-container">
          {userType === 'Student' && (
            <div>
              <h1>Student Feedback Form</h1>
              <form onSubmit={handleSubmitStudent}>
                <div className="input-group">
                  <label>Name: </label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div className="input-group">
                  <label>Student ID: </label>
                  <input type="text" name="id" value={formData.id} onChange={handleChange} />
                </div>
                <div className="input-group">
                  <label>Email: </label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="input-group">
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
                  <div className="input-group">
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
                  <div className="input-group">
                    <label>Faculty: </label>
                    <select name="faculty" value={formData.faculty} onChange={handleChange}>
                      <option value="">Select Faculty</option>
                      {facultyByYearAndSubject[formData.year][formData.subject].map((faculty, index) => (
                        <option key={index} value={faculty}>{faculty}</option>
                      ))}
                    </select>
                  </div>
                )}
                <div className="input-group">
                  <label>Feedback: </label>
                  <textarea name="feedback" value={formData.feedback} onChange={handleChange}></textarea>
                </div>
                <button type="submit">Submit</button>
              </form>
              <button onClick={() => setIsRegistering(true)}>Register</button>
            </div>
          )}
          
          {userType === 'Faculty' && (
            <div>
              <h1>Faculty View Feedback</h1>
              <form onSubmit={handleSubmitFaculty}>
                <div className="input-group">
                  <label>Employee ID: </label>
                  <input type="text" name="empId" value={formData.empId} onChange={handleChange} />
                </div>
                <div className="input-group">
                  <label>Email: </label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <button type="submit">View Feedback</button>
              </form>
              <button onClick={() => setIsRegistering(true)}>Register</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};


export default App;
