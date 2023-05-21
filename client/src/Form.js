import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [formValues, setFormValues] = useState({
    firstname: '',
    lastname: '',    
    workemail: '',
    phonenumber:'',
    jobtitle: '',
    company: '',
    messagebox: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormValues(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(formValues);
    try {
      const res = await axios.post('/api/contact', formValues);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} class="contact-us-form">
      <label>
        First Name:
        <input type="text" name="firstname" value={formValues.firstname} onChange={handleChange} />
      </label><br></br>
      <label>
        Last Name:
        <input type="text" name="lastname" value={formValues.lastname} onChange={handleChange} />
      </label>
      <label><br></br>
        Work email:
        <input type="email" name="workemail" value={formValues.workemail} onChange={handleChange} />
      </label><br></br>
      <label>
      Phone Number:
        <input type="text" name="phonenumber" value={formValues.phonenumber} onChange={handleChange} />
      </label><br></br>
      <label>
      Job title:
        <input type="text" name="jobtitle" value={formValues.jobtitle} onChange={handleChange} />
      </label><br></br>
      <label>
        Company:
        <input type="text" name="company" value={formValues.company} onChange={handleChange} />
      </label><br></br>
      <label>
        Messagebox:
        <textarea name="messagebox" value={formValues.messagebox} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
