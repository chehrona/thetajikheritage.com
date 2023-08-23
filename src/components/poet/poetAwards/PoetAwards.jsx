import React, { useState } from "react";
import { useSetLang } from "../../../App";
import { Zoom, Dialog } from '@mui/material';

import {
    MainContainer,
    AwardCard,
    Title, 
    Subtitle,
    Image,
    Desc,
    Gap,
    InnerContainer,
    Face,
    Year,
    StyledIconButton,
    StyledInfoIcon,
    InfoContainer,
    StyledContent,
    InfoTitle,
    StyledCloseIcon,
    BodyContainer,
    AwardImg,
    Wrapper
} from "./poetAwardStyles";

const Transition = ({ children, ...props }) => (
    <Zoom {...props}>
      {children}
    </Zoom>
);

export default function PoetAwards({ poet }) {
    const { lang } = useSetLang();
    const [showAwardInfo, setShowAwardInfo] = useState(false);
    const [awardInfo, setAwardInfo] = useState(null);

    function handleAwardDialog(e, award) {
        setShowAwardInfo(true);
        setAwardInfo(award)
    }

    function handleClose() {
        setShowAwardInfo(false);
    }

    return (
        <MainContainer id="Awards">
            <Gap />
            {poet[lang].map((award, i) => {
                return (
                    <AwardCard key={i}>
                        <InnerContainer>
                            <Face>
                                <Image src={award.img} />
                            </Face>
                            <Face back={true}>
                                <Title>{award.title}</Title>
                                <Subtitle>{award.subtitle}</Subtitle>
                                {award.years.map((year) => {
                                    return (
                                        <Year>{year}</Year>
                                    )
                                })}
                                <StyledIconButton onClick={(e) => handleAwardDialog(e, award)}>
                                    <StyledInfoIcon />
                                </StyledIconButton>
                            </Face>
                        </InnerContainer>
                    </AwardCard>
                )})
            }
            <Dialog
                open={showAwardInfo}
                fullWidth
                maxWidth={"md"}
                TransitionComponent={Transition}
                TransitionProps={{
                    in: showAwardInfo,
                    easing: {enter: "linear", exit: "linear"}
                }}
                PaperProps={{
                    style: {
                      backgroundColor: 'transparent',
                      boxShadow: 'none',
                    },
                }}
            >
                <StyledContent>
                    <InfoContainer>
                        <InfoTitle>{awardInfo?.title}</InfoTitle>
                        <StyledIconButton dialog={true} onClick={handleClose}>
                            <StyledCloseIcon />
                        </StyledIconButton>
                        <BodyContainer>
                            <Wrapper first={true}>
                                <AwardImg src={awardInfo?.img} />
                            </Wrapper>
                            <Wrapper>
                                <Desc dangerouslySetInnerHTML={{__html: awardInfo?.desc}} />
                            </Wrapper>
                        </BodyContainer>
                    </InfoContainer>
                </StyledContent>
            </Dialog>
        </MainContainer>
    )
}