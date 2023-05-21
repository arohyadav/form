import React, { useState } from 'react';
import axios from 'axios';

const Consulting = () => {
  const [formValues, setFormValues] = useState({
    firstname: '',
    lastname: '',    
    email: '',
    phonenumber:'',
    companyname: '',
    companyurl: '',
    industry: '',
    pickdate: '',
    whatisyourissue: ''
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
      const res = await axios.post('/api/consulting', formValues);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} class="consulting-form">
      <label>
        First Name:
        <input type="text" name="firstname" value={formValues.firstname} onChange={handleChange} />
      </label><br></br>
      <label>
        Last Name:
        <input type="text" name="lastname" value={formValues.lastname} onChange={handleChange} />
      </label>
      <label><br></br>
        email:
        <input type="email" name="email" value={formValues.email} onChange={handleChange} />
      </label><br></br>
      <label>
      Phone Number:
        <input type="text" name="phonenumber" value={formValues.phonenumber} onChange={handleChange} />
      </label><br></br>
      <label>
      companyname:
        <input type="text" name="companyname" value={formValues.companyname} onChange={handleChange} />
      </label><br></br>
      <label>
        Companyurl:
        <input type="text" name="companyurl" value={formValues.companyurl} onChange={handleChange} />
      </label><br></br>
      <label>
        industry:
        <input type="text" name="industry" value={formValues.industry} onChange={handleChange} />
      </label><br></br>
      <label>
        pickdate:
        <input type="text" name="pickdate" value={formValues.pickdate} onChange={handleChange} />
      </label><br></br>
      <label>
        whatisyourissue:
        <textarea name="whatisyourissue" value={formValues.whatisyourissue} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Consulting;
