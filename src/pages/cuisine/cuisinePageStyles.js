import styled from "styled-components";

export const PageContainer = styled.div`
	box-sizing: border-box;
	background: white;
	padding: 2rem 7rem 2rem 7rem;
    min-height: calc(100svh - 10.23rem);

    @media (max-width: 480px) {
		padding: 1.5rem 3.2rem 1.5rem 3.2rem;
		min-height: calc(100svh - 9.23rem);
    }
`;