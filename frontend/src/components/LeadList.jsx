import { useEffect, useState } from "react";
import axios from "axios";

export default function LeadList() {
  const [leads, setLeads] = useState([]);

  const fetchLeads = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/leads");
      setLeads(res.data);
    } catch (err) {
      console.error("Failed to fetch leads", err);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-lg font-semibold mb-2">Leads</h2>
      <table className="w-full table-auto border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Contact</th>
            <th className="border px-4 py-2">Stage</th>
            <th className="border px-4 py-2">Follow Up</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id}>
              <td className="border px-4 py-2">{lead.name}</td>
              <td className="border px-4 py-2">{lead.contact}</td>
              <td className="border px-4 py-2">{lead.stage}</td>
              <td className="border px-4 py-2">{lead.follow_up_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}