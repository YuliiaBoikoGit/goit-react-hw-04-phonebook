import styled from '@emotion/styled';

export const Form = styled.form`
    padding: 30px;
    margin-bottom: 35px;
    width: 500px;
    border-radius: 4px;
    box-shadow: ${props => `0 2px 10px ${props.theme.colors.gray}`};
`;

export const Input = styled.input`
    display: block;
    margin-top: 10px;
    margin-bottom: 20px;
    padding: 5px;
    outline: none;
    border-radius: 4px;
    border: ${props => `1px solid ${props.theme.colors.lighGray}`};
    box-shadow: ${props => `2px 2px 2px ${props.theme.colors.lighGray}`};
`;

export const Label = styled.label`
    padding-left: 5px;
    font-weight: 600;
`;

export const Button = styled.button`
    padding: 10px 20px;
    outline: none;
    font-weight: 600;
    border: none;
    border-radius: 4px;
    color: ${props => `${props.theme.colors.white}`};
    background-color: ${props => `${props.theme.colors.accent}`};
    box-shadow: ${props => `2px 2px 2px ${props.theme.colors.accent}`};
    cursor: pointer;
`;