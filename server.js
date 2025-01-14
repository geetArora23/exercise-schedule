const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let sequences = []; // Example storage for sequences

// Get all sequences
app.get('/sequences', (req, res) => {
    res.json(sequences);
});

// Add a new sequence
app.post('/sequences', (req, res) => {
    const { name, exercises } = req.body;
    sequences.push({ name, exercises });
    res.status(201).json({ message: 'Sequence added successfully' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
