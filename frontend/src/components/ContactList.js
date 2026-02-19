import React from 'react';

class ContactList extends React.Component {
    state = {
        contacts: [],
        name: '',
        email: '',
    };

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    addContact = (event) => {
        event.preventDefault();
        const { name, email } = this.state;
        if (name && email) {
            this.setState((prevState) => ({
                contacts: [...prevState.contacts, { name, email }],
                name: '',
                email: '',
            }));
        }
    };

    render() {
        return (
            <div>
                <h2>Contact List</h2>
                <form onSubmit={this.addContact}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        required
                    />
                    <button type="submit">Add Contact</button>
                </form>
                <ul>
                    {this.state.contacts.map((contact, index) => (
                        <li key={index}>{contact.name} - {contact.email}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default ContactList;