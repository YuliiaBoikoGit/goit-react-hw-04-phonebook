import PropTypes from "prop-types";
import { List } from "./ContactList.styled";
import { ContactItem } from "components/Contact/Contact";

export const ContactList = ({ contacts, onDeleteContact }) => {
    return <List>
            {contacts.map(contact => 
                <ContactItem key={contact.id} contact={contact} onDeleteContact={onDeleteContact} />
            )}    
        </List>
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    })),    
};