import React, { useState } from 'react';
import './EnquireForm.css';

const EnquireForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    mobile: '',
    product: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Form submitted! (Demo)');
  };

  return (
    <div className="enquire-container">
      <div className="enquire-topbar" />
      <form className="enquire-form" onSubmit={handleSubmit}>
        <h2 className="enquire-title">Enquire Now</h2>
        <div className="enquire-row">
          <div className="enquire-input-group">
            <label>
              Name <span className="required">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>
          <div className="enquire-input-group">
            <label>
              E-mail <span className="required">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>
          <div className="enquire-input-group">
            <label>
              Mobile Number <span className="required">*</span>
            </label>
            <input
              type="tel"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              required
              pattern="[0-9]{10,15}"
              autoComplete="off"
            />
          </div>
        </div>
        <div className="enquire-input-group full-width">
          <label>
            Product Requirement <span className="required">*</span>
          </label>
          <textarea
            name="product"
            rows="5"
            value={form.product}
            onChange={handleChange}
            required
          />
        </div>
        <div className="enquire-submit-group">
          <button type="submit" className="enquire-submit-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EnquireForm;
