import React, { useState } from "react";
import { useSetLang } from "../../../App";

import { IconButton } from "@mui/material";
import { OpenInNew } from '@mui/icons-material';

import { DropDownContainer,
         IconContainer,
         Line,
         StyledDownIcon,
         RefContainer,
         Reference,
         SubTitle,
         StyledUpIcon,
         RefWrapper,
         RefBox,
         RefIndex
} from "./sourceStyles";

export default function Sources({data, line, color, title, background }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { lang } = useSetLang();

    return (
        <DropDownContainer>
            <IconContainer>
                <Line right={true} line={line} />
                <IconButton onClick={() => setIsDropdownOpen(prevState => !prevState)}>
                    {isDropdownOpen ? <StyledUpIcon line={line} /> : <StyledDownIcon line={line} />}
                </IconButton>
                <Line right={false} line={line} />
            </IconContainer>
            <RefContainer
                open={isDropdownOpen}
                color={color}
                background={background}
            >
                <RefWrapper>
                    <SubTitle title={title}>
                        {lang === 'ru' ? 'Литература' : (lang === 'tj' ? 'Адабиёт' : 'References')}
                    </SubTitle>
                    {data?.references[lang].map((source, i) => {
                        return (
                            <RefBox key={i}>
                                <RefIndex>
                                    <div>{i + 1}.</div>
                                </RefIndex>
                                <Reference dangerouslySetInnerHTML={{__html: source?.name}} />
                                <a href={source?.link} target="_blank">
                                    <OpenInNew />
                                </a>
                            </RefBox>   
                        )
                    })}
                </RefWrapper>
            </RefContainer>
        </DropDownContainer>

    )
}