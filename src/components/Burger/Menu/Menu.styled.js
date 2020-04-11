import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLight};
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
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
    display: flex;
    width: 70%;
    height: 20%;
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    background-color: color: ${({ theme }) => theme.primaryLight};
    text-decoration: none;
    justify-content: center;
    align-items: center;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.phone}) {
      width: 100vw;
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      background-color: ${({ theme }) => theme.primaryDark};
      // color: ${({ theme }) => theme.primaryLight};
      color: #dedede;
      // transition: text-color 0.2s linear;
      // transition: background-color 0.5s linear;

      box-shadow: 20px 20px 50px grey;
    }
  }
`;
