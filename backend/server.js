const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Sample in-memory "database" for contacts
let contacts = [];

// Create a new contact
app.post('/api/contacts', (req, res) => {
    const contact = req.body;
    contacts.push(contact);
    res.status(201).json(contact);
});

// Read all contacts
app.get('/api/contacts', (req, res) => {
    res.json(contacts);
});

// Read a single contact
app.get('/api/contacts/:id', (req, res) => {
    const contact = contacts.find(c => c.id === parseInt(req.params.id));
    if (!contact) return res.status(404).send('Contact not found');
    res.json(contact);
});

// Update a contact
app.put('/api/contacts/:id', (req, res) => {
    const index = contacts.findIndex(c => c.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).send('Contact not found');
    contacts[index] = req.body;
    res.json(contacts[index]);
});

// Delete a contact
app.delete('/api/contacts/:id', (req, res) => {
    const index = contacts.findIndex(c => c.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).send('Contact not found');
    const deletedContact = contacts.splice(index, 1);
    res.json(deletedContact);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
