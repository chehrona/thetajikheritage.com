import React, { useState } from "react";
import Flags from "../flags/Flags";
import pinIcon from "./icons/pin.png";
import instIcon from "./icons/inst.png";
import mailIcon from "./icons/mail.png";

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
                    <StyledIcon loading="lazy" src={pinIcon} rad={true} hovered={pinHovered}/>
                </StyledIconButton>
            </a>
            <a href='https://www.instagram.com/tajik_heritage/' rel="noreferrer" target={'_blank'}>
                <StyledIconButton
                    onMouseEnter={() => setInstHovered("true")}
                    onMouseLeave={() => setInstHovered("false")}>
                    <StyledIcon src={instIcon} rad={false} hovered={instHovered}/>
                </StyledIconButton>
            </a>
            <a href='mailto:thetajikheritage@gmail.com' rel="noreferrer" target={'_blank'}>
                <StyledIconButton 
                    onMouseEnter={() => setEmailHovered("true")}
                    onMouseLeave={() => setEmailHovered("false")}>
                    <StyledIcon src={mailIcon} rad={false} hovered={emailHovered}/>
                </StyledIconButton>
            </a>
            <Divider />
        </SideNavContainer>
    )
}