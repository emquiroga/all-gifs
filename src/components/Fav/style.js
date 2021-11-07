import styled from "@emotion/styled";

export const FavCheck = styled.button`
 background: rgba(255, 172, 172, 0.3);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    width: 30px;
    height: 30px;
    transition: all 150 ease-in-out;
    :hover {
        transition: all 150 ease-in-out;
        background: rgba(255, 172, 172, 0.87);
    }
`
export const FavSpan = styled.span`
display: block;
width: 20px;
text-align: center;
`