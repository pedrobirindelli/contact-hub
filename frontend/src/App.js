import React, { useState } from 'react';

const App = () => {
    const [contacts, setContacts] = useState([]);
    const [newContact, setNewContact] = useState('');

    const handleAddContact = () => {
        if (newContact) {
            setContacts([...contacts, newContact]);
            setNewContact('');
        }
    };

    return (
        <div>
            <h1>Contact Management</h1>
            <input
                type="text"
                value={newContact}
                onChange={(e) => setNewContact(e.target.value)}
                placeholder="Add new contact"
            />
            <button onClick={handleAddContact}>Add Contact</button>
            <ul>
                {contacts.map((contact, index) => (
                    <li key={index}>{contact}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;