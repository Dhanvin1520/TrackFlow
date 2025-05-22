const express = require('express');
const cors = require('cors');
const app = express();

const leadsRoutes = require('./routes/leads');

app.use(cors());
app.use(express.json());


app.use('/api/leads', leadsRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});