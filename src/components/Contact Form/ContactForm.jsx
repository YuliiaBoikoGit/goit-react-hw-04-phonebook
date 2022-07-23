import { useState } from 'react';
import PropTypes from "prop-types";
import { Form, Input, Label, Button } from "./ContactForm.styled";

export const ContactForm = ({onSubmit}) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleNameChange = event => setName(event.target.value);
    const handleNumberChange = event => setNumber(event.target.value);

    const handleSubmitForm = event => {
        event.preventDefault();

        onSubmit({ name, number });

        reset();
    };

    const reset = () => {
        setName('');
        setNumber('');
    };

        return (
            <Form onSubmit={handleSubmitForm}>
                <Label>
                    Name <Input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={name}
                        onChange={handleNameChange}
                    />
                </Label>
                <Label>
                    Number <Input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={number}
                        onChange={handleNumberChange}
                    />
                </Label>
                <Button type="submit">Add Contact</Button>
            </Form>
        );
};

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};