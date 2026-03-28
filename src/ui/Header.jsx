import styled from "styled-components";


const StyledHeader = styled.header`
    border-bottom: 1px solid var(--color-grey-200);
`

function Header() {
    return (
        <StyledHeader>
            HEADER
        </StyledHeader>
    )
}

export default Header