const express = require('express');
const router = express.Router();


let leads = [];


router.post('/', (req, res) => {
  const newLead = { id: Date.now(), ...req.body };
  leads.push(newLead);
  res.status(201).json(newLead);
});


router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { stage } = req.body;
  const lead = leads.find(l => l.id == id);
  if (lead) {
    lead.stage = stage;
    res.json(lead);
  } else {
    res.status(404).json({ message: 'Lead not found' });
  }
});


router.get('/', (req, res) => {
  const { stage, follow_up_date } = req.query;
  let filtered = leads;
  if (stage) filtered = filtered.filter(l => l.stage === stage);
  if (follow_up_date) filtered = filtered.filter(l => l.follow_up_date === follow_up_date);
  res.json(filtered);
});

module.exports = router;