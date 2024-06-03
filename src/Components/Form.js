import './FormStyles.css';
import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [error, setError] = useState({
    nameError: '',
    emailError: '',
    subError: '',
    msgError: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name) {
      newErrors.nameError = "Name is required";
    }
    if (!formData.email) {
      newErrors.emailError = "Email is required";
    }
    if (!formData.subject) {
      newErrors.subError = "Subject is required";
    }
    if (!formData.message) {
      newErrors.msgError = "Message is required";
    }

    setError(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Form is valid, you can submit the data or take further action here
      console.log('Form data submitted:', formData);
      fetch('https://formspree.io/f/moqoyege', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log('Formspree response:', data);

          // Clear the form data on successful submission
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
          });

          alert('Form submitted successfully!');
          // Optionally, you can provide feedback to the user, e.g., "Thank you for your submission."
        })
        .catch(error => {
          console.error('Error sending data to Formspree:', error);
          // Handle the error, e.g., show an error message to the user
        });
    }
  }

  return (
    <div className='container' id='contact'>
      <h1 className='text-center mt-5 clr_yellow'>Want To Ask Anything? Just Mail Me Anytime</h1>
    <div className='form'>
      <form
        action="https://formspree.io/f/moqoyege"
        method="POST"
        onSubmit={handleSubmit}
      >
        {/* <label>Your Name</label> */}
        <input
          type='text'
          name='name'
          placeholder='Enter your name*'
          onChange={(e) => handleChange(e)}
          value={formData.name} // Add value attribute to reflect the data
        />
        {error.nameError && <div className='error'>{error.nameError}*</div>}

        {/* <label>Email</label> */}
        <input
          type='email'
          name='email'
          placeholder='Enter your email*'
          onChange={(e) => handleChange(e)}
          value={formData.email} // Add value attribute to reflect the data
        />
        {error.emailError && <div className='error'>{error.emailError}*</div>}

        {/* <label>Subject</label> */}
        <input
          type='text'
          name='subject'
          placeholder='Enter subject*'
          onChange={(e) => handleChange(e)}
          value={formData.subject} // Add value attribute to reflect the data
        />
        {error.subError && <div className='error'>{error.subError}*</div>}

        {/* <label>Message</label> */}
        <textarea
          rows="3"
          name='message'
          placeholder='Type your message here*'
          onChange={(e) => handleChange(e)}
          value={formData.message} // Add value attribute to reflect the data
        />
        {error.msgError && <div className='error'>{error.msgError}*</div>}

        <button className='btn bgClr' type="submit">Send Mail</button>
      </form>
    </div>
    </div>
  );
}

export default Form;
