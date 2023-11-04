import React, { useEffect } from "react";
import { useSetLang } from "../../App";
import { useParams } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

import { poets } from "../../data/poetData";

import { 
    PageContainer,
    PoetContainer,
    RefContainer
} from "./poetPageStyles";

import PoetBio from "../../components/poet/poetBio/PoetBio";
import PoetIntro from "../../components/poet/poetIntro/PoetIntro";
import PoetWorks from "../../components/poet/poetWorks/PoetWorks";
import PoetAwards from "../../components/poet/poetAwards/PoetAwards";
import PoetMovies from "../../components/poet/poetMovies/PoetMovies";
import Sources from "../../components/common/sources/Sources";
import PoetCareer from "../../components/poet/poetCareer/PoetCareer";
import SectionOptions from "../../components/poet/sectionOptions/SectionOptions";
import Tooltip from "../../components/common/tooltip/Tooltip";

export default function PoetPage() {
    const { id } = useParams();
    const { lang } = useSetLang();
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });
    const poet = poets.filter((poet) => poet.id === id)[0];

    const scrollToView = (e) => {
        e.preventDefault();
        const target = e.target.getAttribute("data");
        const parent = document.querySelector(".content-container");
        
        if (parent) {
            parent.scrollTo({
                top: document.querySelector(target).offsetTop,
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        const tooltip = document.querySelector(".tooltip");
        const tooltipText = document.querySelector(".tooltiptext");

        if (tooltip) {
            const tooltipRect = tooltip.getBoundingClientRect();
            const tooltipTextRect = tooltipText.getBoundingClientRect();

            if (tooltipTextRect.x < 0) {
                tooltipText.style.left = '0%';
                tooltipText.style.right = 'auto';
                tooltipText.style.transform = `translateX(0%)`;
            } else if ((tooltipTextRect.x + tooltipTextRect.width) > window.outerWidth) {
                tooltipText.style.right = '0%';
                tooltipText.style.left = 'auto';
                tooltipText.style.transform = `translateX(0%)`;
            }
        }
    }, [lang]);

    if (poet) {
        return (
            <PageContainer>
                <Tooltip text={"Hello dufus"} />
                <PoetContainer>
                    <PoetIntro poet={poet} scrollToView={scrollToView} />
                    {isMobile && <SectionOptions poet={poet} scrollToView={scrollToView} />}
                    <PoetBio poet={poet} />
                    <PoetWorks poet={poet.works} />
                    <PoetMovies poet={poet.movies} />
                    <PoetCareer points={poet.career} />
                    <PoetAwards poet={poet.awards} />
                    <RefContainer>
                        <Sources
                            data={poet}
                            line={'#504221d1'}
                            color={'#dedbdb'}
                            title={'#fcf6e9'}
                            background={'#0F0A00'}
                        />
                    </RefContainer>
                </PoetContainer>
            </PageContainer>
        )
    }
}