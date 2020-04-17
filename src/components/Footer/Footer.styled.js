import styled from "styled-components";

export const StyledFooter = styled.div`
position: absolute;
width: 100vw;
display: flex;
background-color: white;
bottom: 0;
left: 0;
justify-content: center;

.followMe{
    display: flex;
    flex-wrap: wrap;
    width: 60%;
    justify-content: space-between;
}

.followMe > div{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    width: 4rem;
    height: 4rem;
    border: solid 1px ${({ theme }) => theme.primaryDark};

}

`;
