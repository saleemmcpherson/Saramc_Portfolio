import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLight};
  // transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  align-items: center;
  height: 100vh;
  width: 100vw;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: ${({ theme }) => theme.phone}) {
    width: 100%;
  }

  a {
    width: 50rem;
    height: 20%;
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.secondaryDark};
    text-decoration: none;
    text-align: center;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.phone}) {
      width: 100vw;
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.hover};
    }
  }
`;
