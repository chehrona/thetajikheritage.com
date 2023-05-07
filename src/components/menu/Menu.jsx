import React from "react";
import { useSetLang } from "../../App";
import logo from "./tajiks.svg";
import { MenuContainer,
        LogoContainer,
        Logo,
        PageName,
        LogoHalf,
        PageNamesContainer,
        Background,
        PageDesc,
        StyledLink 
} from "./menuStyles";

export default function Menu() {
    const { lang, setIsMenuShown } = useSetLang();

    const pageInfo = {
        us: [
            {title: "Arts & Crafts", desc: "Material culture", link: "/arts"},
            {title: "Customs", desc: "Intangible heritage", link: "/customs"},
            {title: "Cuisine", desc: "Food & national identity", link: "/cuisine"},
            {title: "Language", desc: "Sounds of the past and present", link: "/language"},
            {title: "History", desc: "Ancient, medieval and modern", link: "/history"}
        ],
        ru: [
            {title: "Искусства & ремесла", desc: "Материальная культура", link: "/arts"},
            {title: "Обычаи", desc: "Нематериальное наследие", link: "/customs"},
            {title: "Кухня", desc: "Кулинарная & национальная самобытность", link: "/cuisine"},
            {title: "Язык", desc: "Звуки прошлого и настоящего", link: "/language"},
            {title: "История", desc: "Древняя, средневековая и современная", link: "/history"}
        ],
        tj: [
            {title: "Санъат ва ҳунар", desc: "Фарҳанги моддӣ", link: "/arts"},
            {title: "Расму русум", desc: "Мероси ғайримоддӣ", link: "/customs"},
            {title: "Ғизоҳо", desc: "Хӯрокпазӣ & хусусияти миллӣ", link: "/cuisine"},
            {title: "Забон", desc: "Садоҳои гузашта ва ҳозира", link: "/language"},
            {title: "Таърих", desc: "Қадима, асрҳои миёна ва муосир", link: "/history"}
        ],
        "kh": [
            {title: "هنر و صنعت", desc: "فرهنگ مادی", link: "/arts"},
            {title: "رسم و رسوم", desc: "میراث ناملموس", link: "/customs"},
            {title: "غذاها", desc: "خوراک‌پزی و هویت ملی", link: "/cuisine"},
            {title: "زبان", desc: "صداهای گذشته و حال", link: "/language"},
            {title: "تاریخ", desc: "باستان، قرون وسطی و مدرن", link: "/history"},
        ]
    }

    return (
        <MenuContainer>
            <Background />
            <LogoContainer>
                {/* <LogoHalf src="zarduzi.png"></LogoHalf> */}
                <Logo src={logo}></Logo>
            </LogoContainer>
            <PageNamesContainer>
                {pageInfo[lang]?.map((entry) => {
                    return (
                        <StyledLink to={entry.link}>
                            <div onClick={() => setIsMenuShown(false)}>
                                <PageName>{entry.title}</PageName>
                                <PageDesc>{entry.desc}</PageDesc>
                            </div>
                        </StyledLink>
                    )
                })}
            </PageNamesContainer>
        </MenuContainer>

    )

}