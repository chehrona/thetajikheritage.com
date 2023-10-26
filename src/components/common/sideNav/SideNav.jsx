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
        </SideNavContainer>
    )
}