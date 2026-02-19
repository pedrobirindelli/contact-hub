import React, { useState } from 'react';

const SearchBar = ({ contacts, setFilteredContacts }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        const filtered = contacts.filter(contact => 
            contact.name.toLowerCase().includes(e.target.value.toLowerCase()) || 
            contact.email.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setFilteredContacts(filtered);
    };

    return (
        <input
            type="text"
            placeholder="Search contacts..."
            value={searchTerm}
            onChange={handleSearch}
            style={{ padding: '10px', width: '200px' }}
        />
    );
};

export default SearchBar;