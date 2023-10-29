import styled from "styled-components";

export const PageContainer = styled.div`
	box-sizing: border-box;
	min-height: 100svh;
	padding: 2rem 7rem 2rem 7rem;
	display: flex;

	@media (max-width: 768px) {
        padding: 1.5rem 3.2rem 1.5rem 3.2rem;
    }
`;