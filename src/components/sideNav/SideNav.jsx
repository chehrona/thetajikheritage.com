import React, { useState } from "react";
import Flags from "../flags/Flags";

import { SideNavContainer,
         StyledIcon,
         StyledIconButton,
         Divider
} from "./sideNavStyles";

export default function SideNav() {
    const [pinHovered, setPinHovered] = useState("false"),
          [instHovered, setInstHovered] = useState("false"),
          [emailHovered, setEmailHovered] = useState("false");
    return (
        <SideNavContainer>
            <Flags />
            <a href='https://www.pinterest.ca/tajik_heritage/' rel="noreferrer" target={'_blank'}>
                <StyledIconButton 
                    onMouseEnter={() => setPinHovered("true")}
                    onMouseLeave={() => setPinHovered("false")}>
                    <StyledIcon src='pin.png' rad={true} hovered={pinHovered}/>
                </StyledIconButton>
            </a>
            <a href='https://www.instagram.com/tajik_heritage/' rel="noreferrer" target={'_blank'}>
                <StyledIconButton
                    onMouseEnter={() => setInstHovered("true")}
                    onMouseLeave={() => setInstHovered("false")}>
                    <StyledIcon src='inst.png' rad={false} hovered={instHovered}/>
                </StyledIconButton>
            </a>
            <a href='mailto:thetajikheritage@gmail.com' rel="noreferrer" target={'_blank'}>
                <StyledIconButton 
                    onMouseEnter={() => setEmailHovered("true")}
                    onMouseLeave={() => setEmailHovered("false")}>
                    <StyledIcon src='mail.png' rad={false} hovered={emailHovered}/>
                </StyledIconButton>
            </a>
            <Divider />
        </SideNavContainer>
    )
}