import React from "react";
import { useSetLang } from "../../App";
import { Link, useNavigate } from "react-router-dom";
import { MenuContainer, LogoContainer, Logo, PageName, MenuItem, LogoHalf, PageNamesContainer,Background, PageDesc } from "./menuStyles";

export default function Menu() {
    const { lang } = useSetLang(),
          navigate = useNavigate();
    const pageInfo = {
        "us": [
            {title: "Arts & Crafts", desc: "Material culture", link: "/arts"},
            {title: "Customs", desc: "Intangible heritage", link: "/customs"},
            {title: "Cuisine", desc: "Food & national identity", link: "/cuisine"},
            {title: "Language", desc: "Sounds of the past and present", link: "/language"},
            {title: "History", desc: "Ancient, medieval and modern", link: "/history"}
        ],
        "ru": [
            {title: "Искусства & ремесла", desc: "Материальная культура"},
            {title: "Обычаи", desc: "Нематериальное наследие"},
            {title: "Кухня", desc: "Кулинарная & национальная самобытность"},
            {title: "Язык", desc: "Звуки прошлого и настоящего"},
            {title: "История", desc: "Древняя, средневековая и современная"}
        ],
        "tj": [
            {title: "Санъат ва ҳунар", desc: "Фарҳанги моддӣ"},
            {title: "Расму русум", desc: "Мероси ғайримоддӣ"},
            {title: "Ғизоҳо", desc: "Хӯрокпазӣ & хусусияти миллӣ"},
            {title: "Забон", desc: "Садоҳои гузашта ва ҳозира"},
            {title: "Таърих", desc: "Қадима, асрҳои миёна ва муосир"}
        ],
        "kh": [
            {title: "هنر و صنعت", desc: "فرهنگ مادی"},
            {title: "رسم و رسوم", desc: "میراث ناملموس"},
            {title: "غذاها", desc: "خوراک‌پزی و هویت ملی"},
            {title: "زبان", desc: "صداهای گذشته و حال"},
            {title: "تاریخ", desc: "باستان، قرون وسطی و مدرن"},
        ]
    }

    function navigateToPage(e) {
        console.log(e.target.datatype, "target")
        // history.push()
    }
    return (
        <MenuContainer>
            <Background />
            <LogoContainer>
                {/* <LogoHalf src="zarduzi.png"></LogoHalf> */}
                <Logo src="tajiks.svg"></Logo>
            </LogoContainer>
            <PageNamesContainer>
                {pageInfo[lang]?.map((entry) => {
                    return (
                        <Link to={entry.link}>
                            <div onClick={(e) => navigateToPage(e)} datatype={entry.link}>
                                <PageName>{entry.title}</PageName>
                                <PageDesc>{entry.desc}</PageDesc>
                            </div>
                        </Link>
                    )
                })}
            </PageNamesContainer>
        </MenuContainer>

    )

}