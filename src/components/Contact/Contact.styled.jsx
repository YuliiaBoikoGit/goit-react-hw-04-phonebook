import styled from '@emotion/styled';

export const ContactListBtn = styled.button`
    padding: 5px 10px;
    outline: none;
    font-weight: 600;
    border: none;
    border-radius: 4px;
    color: ${props => `${props.theme.colors.white}`};
    background-color: ${props => `${props.theme.colors.accent}`};
    box-shadow: ${props => `1px 1px 1px ${props.theme.colors.accent}`};
    cursor: pointer;
`;

export const Contact = styled.li`
    margin-bottom: 10px;
    padding: 10px;
    width: 500px;
    display: flex;
    justify-content: space-between;
    align-content: center;
    font-size: 18px;
    border-radius: 4px;
    box-shadow: ${props => `0 2px 2px ${props.theme.colors.gray}`};
`;