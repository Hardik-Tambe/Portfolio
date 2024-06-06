import React, { useState, useEffect } from 'react';
import './FormStyles.css';
import Aos from 'aos';
import { toast } from 'react-toastify';

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

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

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
          // Clear the form data on successful submission
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
          toast.success('Form submitted successfully!');
        })
        .catch(error => {
          console.error('Error sending data to Formspree:', error);
          toast.error('Error submitting the form. Please try again.');
        });
    } else {
      toast.error('Please fill in all required fields.');
    }
  }

  return (
    <div className='container' id='contact' data-aos="fade-up">
      <h1 className='text-center mt-5 clr_yellow'>Want To Ask Anything? Just Mail Me Anytime</h1>
      <div className='form'>
        <form
          action="https://formspree.io/f/moqoyege"
          method="POST"
          onSubmit={handleSubmit}
        >
          <input
            type='text'
            name='name'
            placeholder='Enter your name*'
            onChange={(e) => handleChange(e)}
            value={formData.name} 
          />
          {error.nameError && <div className='error'>{error.nameError}*</div>}

          <input
            type='email'
            name='email'
            placeholder='Enter your email*'
            onChange={(e) => handleChange(e)}
            value={formData.email} 
          />
          {error.emailError && <div className='error'>{error.emailError}*</div>}

          <input
            type='text'
            name='subject'
            placeholder='Enter subject*'
            onChange={(e) => handleChange(e)}
            value={formData.subject} 
          />
          {error.subError && <div className='error'>{error.subError}*</div>}

          <textarea
            rows="3"
            name='message'
            placeholder='Type your message here*'
            onChange={(e) => handleChange(e)}
            value={formData.message} 
          />
          {error.msgError && <div className='error'>{error.msgError}*</div>}

          <button className='btn bgClr' type="submit">Send Mail</button>
        </form>
      </div>
      
    </div>
  );
}

export default Form;
