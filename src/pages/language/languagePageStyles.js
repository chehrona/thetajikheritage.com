import styled from "styled-components";

export const PageContainer = styled.div`
	box-sizing: border-box;
	min-height: calc(100svh - 10.23rem);
	padding: 2rem 7rem 2rem 7rem;
	background: white;

	@media (max-width: 480px) {
		min-height: calc(100svh - 9.23rem);
        padding: 1.5rem 3.2rem 1.5rem 3.2rem;
    }
`;