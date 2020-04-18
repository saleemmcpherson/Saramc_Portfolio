import styled from "styled-components";

export const StyledFooter = styled.div`
position: fixed;
display: flex;
width: 70%;
background: rgba(255,255,255,0.2);
border-radius: 10px 10px 0 0;
bottom: 0;
left: 20%;
right; 20%;
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
