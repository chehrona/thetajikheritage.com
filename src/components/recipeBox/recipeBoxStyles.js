import { VolumeUp } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import styled from "styled-components";

export const RecipeBoxContainer = styled.div`
    margin-left: 8em;
    margin-right: 6.5em;
    margin-top: 2em;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const RecipeCard = styled.div`
    border-radius: ${({hovered}) => hovered ? "1em" : "0.7em"};
    height: 30em;
    width: 20em;
    margin-right: 1.5em;
    margin-bottom: 7em;
    ${({hovered}) => hovered && "box-shadow: 100px 10px 10px 10px black"};
    cursor: pointer;
`;

export const RecipeNameBox = styled.div`
    display: flex;
    font-size: 1.6em;
    align-items: center;
    margin-top: 0.1em;
    height: 1.5em;
`;

export const PronunciationIcon = styled(VolumeUp)`
    
`;

export const StyledIconButton = styled(IconButton)`
    width: 1.6em;
`;

export const RecipeTitle = styled.div`
    font-weight: bold;
    margin-right: 0.2em;
`;

export const RecipeSubtitle = styled.div`
    font-size: 1.2em;
    margin-top: -0.2em;
`;

export const RecipeImage= styled.img`
    border-radius: ${({hovered}) => hovered ? "1em" : "0.7em"};
    width: 100%;
    height: 100%;
`;