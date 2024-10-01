import React, { useState } from 'react';
import './FarmerProfile.css';

function FarmerProfile() {
  const [form, setForm] = useState({ name: '', location: '', product: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Farmer ${form.name} from ${form.location} has ${form.product} ready.`);
  };

  return (
    <section className="farmer-profile" id="profile">
      <h2>Create Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={form.name} onChange={handleInputChange} required />
        
        <label>Location:</label>
        <input type="text" name="location" value={form.location} onChange={handleInputChange} required />
        
        <label>Product:</label>
        <input type="text" name="product" value={form.product} onChange={handleInputChange} required />
        
        <button type="submit">Notify Company</button>
      </form>
    </section>
  );
}

export default FarmerProfile;
