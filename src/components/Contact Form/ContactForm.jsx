import React from 'react';
import PropTypes from "prop-types";
import { Form, Input, Label, Button } from "./ContactForm.styled";

export class ContactForm extends React.Component {
    state = {
        name: '',
        number: ''
    };

    handleInputChange = event => {
        const { name, value } = event.currentTarget;

        this.setState({ [name]: value});
    };

    handleSubmitForm = event => {
        event.preventDefault();

        this.props.onSubmit(this.state);

        this.reset();
    };

    reset = () => {
        this.setState({ name: '', number: '' });
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmitForm}>
                <Label>
                    Name <Input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={this.state.name}
                        onChange={this.handleInputChange}
                    />
                </Label>
                <Label>
                    Number <Input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={this.state.number}
                        onChange={this.handleInputChange}
                    />
                </Label>
                <Button type="submit">Add Contact</Button>
            </Form>
        );
    };
};

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};