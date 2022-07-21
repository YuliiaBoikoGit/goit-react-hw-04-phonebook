import styled from '@emotion/styled';

export const FilterLabel = styled.label`
    font-weight: 600;
    font-size: 18px;
`;

export const FilterInput = styled.input`
    padding: 5px;
    margin-left: 5px;
    outline: none;
    border-radius: 4px;
    border: ${props => `1px solid ${props.theme.colors.lighGray}`};
    box-shadow: ${props => `2px 2px 2px ${props.theme.colors.lighGray}`};
`;