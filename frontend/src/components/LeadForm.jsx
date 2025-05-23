import { useState } from "react";
import axios from "axios";

export default function LeadForm({ onLeadAdded }) {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    company: "",
    stage: "New",
    follow_up_date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/leads", formData);
      onLeadAdded(); 
      setFormData({
        name: "",
        contact: "",
        company: "",
        stage: "New",
        follow_up_date: "",
      });
    } catch (err) {
      alert("Failed to add lead.");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow rounded mb-4 space-y-3">
      <h2 className="text-lg font-semibold">Add New Lead</h2>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required className="w-full border p-2" />
      <input name="contact" value={formData.contact} onChange={handleChange} placeholder="Contact" required className="w-full border p-2" />
      <input name="company" value={formData.company} onChange={handleChange} placeholder="Company" className="w-full border p-2" />
      <select name="stage" value={formData.stage} onChange={handleChange} className="w-full border p-2">
        <option value="New">New</option>
        <option value="Contacted">Contacted</option>
        <option value="Qualified">Qualified</option>
        <option value="Lost">Lost</option>
      </select>
      <input name="follow_up_date" type="date" value={formData.follow_up_date} onChange={handleChange} className="w-full border p-2" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Lead</button>
    </form>
  );
}