import styled from 'styled-components';

export const CartButton = styled.button`
  font-size: 1.2rem;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  padding: 0.3rem 0.5rem;
  color: var(--mainWhite);
  border-radius: 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transtion: all 0.5s ease-in-out;
  &:hover{
    background: var(--lightBlue);
    color: var(--darkBlue);
  }
  &:focus{
    outline: none;
  }
`