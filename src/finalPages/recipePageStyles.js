import styled from "styled-components";
import { Pinterest } from "@mui/icons-material";

export const PageContainer = styled.div`
    box-sizing: border-box;
    margin: 5rem;
`;

export const MainImage = styled.img`
    border-radius: 1rem;
    width: 100%;
    height: 100%;
`;

export const IntroSection = styled.div`
    display: flex;
    width: 100%;
    margin-top: 2rem;
`;

export const MainTitle = styled.div`
    font-size: 5rem;
    margin-top: -1rem;
`;

export const ImageContainer = styled.div`
    width: 30rem;
    height: 45rem;
    margin-right: 5rem;
`;

export const InfoContainer = styled.div`
    width: 45rem;
`;

export const HistoryInfo = styled.div`
    font-size: 1.2rem;
    margin-top: 0.5rem;
    color: #212529;
`;

export const AllergyContainer = styled.div`
    display: flex;
    margin-top: 2rem;
`;

export const ContainsBox = styled.div`
    background: rgb(244 225 225);
    border-radius: 1rem;
    padding: 0.8rem;
    padding-top: 0.5rem;
`;

export const LabelContainer = styled.div`
    margin-right: 1rem;
    text-align: center;

    &:last-child {
        margin-right: 0rem;
    }
`;

export const BoxTitle = styled.div`
    margin-bottom: 0.8rem;
    font-weight: bold;
    font-size: 1.2rem;
`;

export const LabelWrapper = styled.div`
    display: flex;
`;

export const LabelImage = styled.img`
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background: white;
`;

export const AllergenName = styled.div`
    font-size: 0.8rem;
`;

export const StyledPinIcon = styled(Pinterest)`
    color: #e60022;
    position: absolute;
    left: 5rem;
    top: 13rem;
    font-size: 2em !important;
`;

export const IngredientContainer = styled.div`
    border-radius: 1rem;
    width: 100%;
    height: 100%;
    background: #eaeaea;
`;

export const IngredientBox = styled.div`
    margin: 2rem;
    margin-left: ${({margin}) => margin === "false" && "0rem"};
`;

export const SubTitle = styled.div`
    font-size: 2rem;
    padding-right: 2rem;
    padding-left: ${({margin}) => margin === "false" ? "0rem" : "2rem"};
    padding-top: 1rem;
    padding-bottom: 0rem;
`;

export const Ingredient = styled.div`
    font-size: 1.2rem;
    margin-top: 0.5rem;
    color: #212529;
    min-height: 2rem;
`;