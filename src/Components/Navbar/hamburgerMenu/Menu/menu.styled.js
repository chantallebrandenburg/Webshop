import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: none;

@media only screen and (max-width: 768px) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(255, 255, 255);
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  width: 100%;

  a {
    font-size: 1.5rem;
    text-transform: uppercase;
    padding: 1.5rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: black;
    text-decoration: none;
  }
}
`;