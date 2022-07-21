import PropTypes from "prop-types";
import { ContactListBtn, Contact } from "./Contact.styled";

export const ContactItem = ({ contact, onDeleteContact }) => {
    return (
        <>
            <Contact>{contact.name}: {contact.number}
                <ContactListBtn type="button" onClick={() => onDeleteContact(contact.id)}>Delete</ContactListBtn>
            </Contact>
        </>
    );
};

ContactItem.propTypes = {
    onDeleteContact: PropTypes.func.isRequired,
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }),
};