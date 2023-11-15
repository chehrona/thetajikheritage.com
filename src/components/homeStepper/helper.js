export const stepInfo = [
    {
        num: "01",
        text: {
            us: {text: "Arts & crafts", font: {d: 10, m: 7.1, t: 10}, margin: {d: 2, m: 2, t: -4}},
            ru: {text: "Искусства & ремесла", font: {d: 7.1, m: 4.4, t: 7.1}, margin: {d: -2, m: 0, t: -8}},
            tj: {text: "Санъат & ҳунар", font: {d: 9.5, m: 6.1, t: 8.65}, margin: {d: 1, m: 2, t: -6}}
        },
        desc: {
            us: 
                {
                    text: `Handicrafts serve as a tangible representation of the intellectual and aesthetic essence 
                    of the Tajiks, intricately intertwined with their lifestyle, culture, and mythology.
                    <div class='space'></div>
                    There are nearly 200 unique arts and crafts still practiced within the Tajik communities, 
                    many as old as the Eastern Iranian civilization itself.
                    <div class='space'></div>
                    <div class='space'></div>`,
                    link: '/arts'
                },
            ru: 
                {
                    text: `Народные промыслы являются воплощением и интеллектуального, и эстетического 
                    наследия таджиков. Они неразрывно связаны с их образом жизни, культурой и мифологией.
                    <div class='space'></div>
                    Среди таджиков до сих пор сохранилось около 200 уникальных видов 
                    искусства и ремесел, многие из которых возникли наравне с формированием восточноиранской цивилизации.
                    <div class='space'></div>
                    <div class='space'></div>`,
                    link: '/arts?ru'
                },
            tj: 
                {
                    text: `Ҳунарҳои мардумӣ ҳамчун намунаи моддии фикрӣ ва зебоишиносии тоҷикон хизмат мекунанд, 
                        ки бо тарзи зиндагӣ, фарҳанг ва асотири тоҷикон печида аст.
                        <div class='space'></div>
                        Дар байни тоҷикони олам то ҳол тахминан 200 намуди ҳунарҳои хос ва беҳамто вуҷуд доранд, 
                        ки қадимии бисёрашон баробари қадимии тамаддуни эрониёни шарқӣ ҳастанд.
                        <div class='space'></div>
                        <div class='space'></div>`,
                    link: '/arts?tj'
                },
        },
        outer: [
            {size: 16, bottom: {d: "-2rem", t: "-2rem"}, right: {d: "23rem", t: "18rem"}},
            {size: 12, bottom: {d: "5rem", t: "18rem"}, right: {d: "7.7rem", t: "7rem"}},
            {size: 30, top: {d: "-6.2rem", t: "-7.2rem"}, right: {d: "-3rem", t: "-4.5rem"}}
        ],
        inner: [
            {size: 15, bottom: {d: "-1.5rem", t: "-1.5rem"}, right: {d: "23.5rem", t: "18.5rem"}, img: "/homeImages/craft3.png"},
            {size: 11, bottom: {d: "5.5rem", t: "18.5rem"}, right: {d: "7.2rem", t: "6.5rem"}, img: "/homeImages/craft2.png"},
            {size: 29, top: {d: "-6rem", t: "-6.5rem"}, right: {d: "-1.2rem", t: "-2.2rem"}, img: "/homeImages/craft1.png"}
        ],
    },
    {
        num: "02",
        text: {
            us: {text: "Customs", font: {d: 9.3, m: 5.8, t: 9.4}, margin: {d: -3, m: -1, t: -10}},
            ru: {text: "Обычаи", font: {d: 9.5, m: 6.1, t: 9.8}, margin: {d: -4, m: -1, t: -10.5}},
            tj: {text: "Расму оин", font: {d: 9, m: 7.5, t: 10}, margin: {d: -2, m: 3, t: -5}}
        },
        desc: {
            us: 
                {
                    text: `Tajik customs and traditions reflect a mix of Persian, Islamic, Zoroastrian, and Central Asian heritage, 
                        reflected in their strong emphasis on family values and honoring elders. Celebrations like Navrüz, Mehrgon and 
                        weddings are filled with spirituality and are accompanied by colorful rituals, traditional clothing, and folk songs and dances. 
                        <div class='space'></div>
                        The culture values hospitality and finds artistic richness in classical poetry, folklore, and ornate handicrafts.
                        <div class='space'></div>
                        <div class='space'></div>`,
                    link: "/customs"
                },
            ru:  {
                    text: `Таджикские обычаи и традиции отражают смесь персидского, исламского, 
                        зороастрийского и центральноазиатского наследия, что проявляется в значимости семьи и почитании старших. 
                        Такие праздники, как Навруз, Мехрган и свадьбы пропитаны духовностью и сопровождаются народными песнями, 
                        танцами и обрядами.
                        <div class='space'></div>
                        Культура отличается гостеприимством и большое значение придается 
                        классической поэзии, фольклору и ремеслам.           
                        <div class='space'></div>
                        <div class='space'></div>`,
                    link: "/customs?ru"
                },
            tj: {
                    text: `Дар урфу одат ва анъанаҳои тоҷикон омезиши маданияти форсӣ, исломӣ, зардуштӣ ва Осиёи Марказӣ зоҳир мешаванд, ки 
                        аҳамияти калон ба арзишҳои оилавӣ ва эҳтироми пирон дода мешаванд. Ҷашнвораҳо аз қабили Наврӯзу Меҳргон ва 
                        тӯйҳо саршори расму оинҳои рангоранг, либосҳои маҳаллӣ ва суруду рақсҳои мардумӣ ҳастанд.
                        <div class='space'></div>
                        Тоҷикон мардуми меҳмоннавоз буда, дар ин фарҳанг ашъори классикӣ, фолклор ва ҳунарҳои дастӣ ҷои махсусро ишғол мекунанд.
                        <div class='space'></div>
                        <div class='space'></div>`,
                    link: "/customs?tj",
                },
        },
        outer: [
            {size: 16, top: {d: "-3rem", t: "-2rem"}, right: {d: "34rem", t: "32rem"}},
            {size: 12, bottom: {d: "1rem", t: "50rem"}, right: {d: "27.5rem", t: "2rem"}},
            {size: 30, top: {d: "6rem", t: "38rem"}, right: {d: "0.5rem", t: "1rem"}}
        ],
        inner: [
            {size: 15, top: {d: "-3.5rem", t: "-2.5rem"}, right: {d: "34.7rem", t: "32.7rem"}, img: "/homeImages/custom3.png"},
            {size: 11, bottom: {d: "1.5rem", t: "50.5rem"}, right: {d: "28rem", t: "2.5rem"}, img: "/homeImages/custom2.png"},
            {size: 29, top: {d: "6rem", t: "38rem"}, right: {d: "1.5rem", t: "2rem"}, img: "/homeImages/custom1.png"}
        ],
    },
    {
        num: "03",
        text: {
            us: {text: "Cuisine", font: {d: 11, m: 6.8, t: 11}, margin: {d: 0, m: 0, t: -9.5}},
            ru: {text: "Кухня", font: {d: 11.7, m: 7.6, t: 12}, margin: {d: 0, m: 0, t: -9.5}},
            tj: {text: "Ғизоҳо", font: {d: 10.7, m: 6.65, t: 10.5}, margin: {d: 0, m: -0.5, t: -9.5}}
        },
        desc: {
            us: {
                text: `Handicrafts serve as a tangible representation of the intellectual and aesthetic essence 
                of the Tajiks, intricately intertwined with their lifestyle, culture, and mythology.
                <div class='space'></div>
                There are nearly 500 unique arts and crafts still practiced within the Tajik communities, 
                many as old as the Eastern Iranian civilization itself.
                <div class='space'></div>
                <div class='space'></div>`,
                link: "/cuisine"
            },
            ru: {
                text: `Традиционные ремесла таджиков являются воплощением и интеллектуального, и эстетического 
                наследия этого народа. Они неразрывно связаны с их образом жизни, культурой и мифологией.
                <div class='space'></div>
                В современных таджикских общинах до сих пор сохранилось около 500 уникальных видов 
                искусства и ремесел, многие из которых возникли наравне с формированием восточноиранской цивилизации.
                <div class='space'></div>
                <div class='space'></div>`,
                link: "/cuisine?ru"
            },
            tj: {
                    text: `Ҳунарҳои мардумӣ ҳамчун намунаи моддии фикрӣ ва зебоишиносии тоҷикон хизмат мекунанд, 
                    ки бо тарзи зиндагӣ, фарҳанг ва асотирии тоҷикон печида аст.
                    <div class='space'></div>
                    Дар байни тоҷикони олам то ҳол тахминан 500 намуди ҳунарҳои хос ва беҳамто вуҷуд доранд, 
                    ки қадимии бисёрашон баробари қадимии тамаддуни эрониёни шарқӣ ҳастанд.
                    <div class='space'></div>
                    <div class='space'></div>`,
                    link: "/cuisine?tj"
                }
        },
        outer: [
            {size: 16, top: {d: "-0.5rem", t: "36rem"}, right: {d: "32rem", t: "3.5rem"}},
            {size: 12, top: {d: "1.5rem", t: "56rem"}, right: {d: "87.5%", t: "10rem"}},
            {size: 30, top: {d: "12rem", t: "-8rem"}, right: {d: "0rem", t: "15rem"}}
        ],
        inner: [
            {size: 15, top: {d: "1rem", t: "36.5rem"}, right: {d: "32.5rem", t: "2.5rem"}, img: "/homeImages/cuisine3.png"},
            {size: 11, top: {d: "2rem", t: "56.5rem"}, right: {d: "88%", t: "10.5rem"}, img: "/homeImages/cuisine2.png"},
            {size: 29, top: {d: "12rem", t: "-8rem"}, right: {d: "1rem", t: "16rem"}, img: "/homeImages/cuisine1.png"}
        ],
    },
    {
        num: "04",
        text: {
            us: {text: "Language & literature", font: {d: 6.8, m: 4.35, t: 6.85}, margin: {d: -2, m: 0, t: -9}},
            ru: {text: "Язык & литература", font: {d: 6.8, m: 4.2, t: 6.8}, margin: {d: 0, m: 0, t: -9}},
            tj: {text: "Забон & адабиёт", font: {d: 9.2, m: 5.7, t: 9}, margin: {d: 3, m: 1.5, t: -6}}
        },
        desc: {
            us: {
                    text: `The languages spoken by the Tajik peoples, whether belonging to the Western or 
                    Eastern Iranian language continua, 
                    lie at the core of their identity and have been detrimental for their survival.
                    <div class='space'></div>
                    They encapsulate their unique worldviews, their ancestral wisdom, 
                    their stories, and their songs.
                    These languages stand as a testament of resilience, serving as a bridge 
                    connecting the past and the present — defining who Tajiks are.
                    <div class='space'></div>
                    <div class='space'></div>`,
                    link: "/language"
                },
            ru: {
                    text: `Традиционные ремесла таджиков являются воплощением и интеллектуального, и эстетического 
                    наследия этого народа. Они неразрывно связаны с их образом жизни, культурой и мифологией.
                    <div class='space'></div>
                    В современных таджикских общинах до сих пор сохранилось около 500 уникальных видов 
                    искусства и ремесел, многие из которых возникли наравне с формированием восточноиранской цивилизации.
                    <div class='space'></div>
                    <div class='space'></div>`,
                    link: "/language?ru"
                },
            tj: {
                    text: `Ҳунарҳои мардумӣ ҳамчун намунаи моддии фикрӣ ва зебоишиносии тоҷикон хизмат мекунанд, 
                    ки бо тарзи зиндагӣ, фарҳанг ва асотирии тоҷикон печида аст.
                    <div class='space'></div>
                    Дар байни тоҷикони олам то ҳол тахминан 500 намуди ҳунарҳои хос ва беҳамто вуҷуд доранд, 
                    ки қадимии бисёрашон баробари қадимии тамаддуни эрониёни шарқӣ ҳастанд.
                    <div class='space'></div>
                    <div class='space'></div>`,
                    link: "/language?tj"
                }
        },
        outer: [
            {size: 16, top: {d: "1.2rem", t: "40rem"}, right: {d: "1rem", t: "3rem"}},
            {size: 12, top: {d: "4rem", t: "4rem"}, right: {d: "27rem", t: "35rem"}},
            {size: 30, bottom: {d: "-5rem", t: "45rem"}, right: {d: "9.5rem", t: "-5rem"}},
        ],
        inner: [
            {size: 15, top: {d: "0.4rem", t: "39rem"}, right: {d: "2rem", t: "3rem"}, img: "/homeImages/lang3.png"},
            {size: 11, top: {d: "4.5rem", t: "4.5rem"}, right: {d: "28.5rem", t: "36rem"}, img: "/homeImages/lang2.png"},
            {size: 29, bottom: {d: "-4.5rem", t: "45.5rem"}, right: {d: "10rem", t: "-4.5rem"}, img: "/homeImages/lang1.png"}
        ],
    },
    {
        num: "05",
        text: {
            us: {text: "History", font: {d: 10.1, m: 6.25, t: 10}, margin: {d: 0, m: -0.5, t: -10}},
            ru: {text: "История", font: {d: 8.79, m: 5.4, t: 8.8}, margin: {d: 0, m: -1, t: -10.5}},
            tj: {text: "Таърих", font: {d: 10.7, m: 6.7, t: 10.5}, margin: {d: 0, m: -1, t: -10}}
        },
        desc: {
            us: {
                    text: `Handicrafts serve as a tangible representation of the intellectual and aesthetic essence 
                    of the Tajiks, intricately intertwined with their lifestyle, culture, and mythology.
                    <div class='space'></div>
                    There are nearly 500 unique arts and crafts still practiced within the Tajik communities, 
                    many as old as the Eastern Iranian civilization itself.
                    <div class='space'></div>
                    <div class='space'></div>`,
                    link: "/history"
                },
            ru: {
                    text: `Традиционные ремесла таджиков являются воплощением и интеллектуального, и эстетического 
                    наследия этого народа. Они неразрывно связаны с их образом жизни, культурой и мифологией.
                    <div class='space'></div>
                    В современных таджикских общинах до сих пор сохранилось около 500 уникальных видов 
                    искусства и ремесел, многие из которых возникли наравне с формированием восточноиранской цивилизации.
                    <div class='space'></div>
                    <div class='space'></div>`,
                    link: "/history?ru"
                },
            tj: {
                text: `Ҳунарҳои мардумӣ ҳамчун намунаи моддии фикрӣ ва зебоишиносии тоҷикон хизмат мекунанд, 
                ки бо тарзи зиндагӣ, фарҳанг ва асотирии тоҷикон печида аст.
                <div class='space'></div>
                Дар байни тоҷикони олам то ҳол тахминан 500 намуди ҳунарҳои хос ва беҳамто вуҷуд доранд, 
                ки қадимии бисёрашон баробари қадимии тамаддуни эрониёни шарқӣ ҳастанд.
                <div class='space'></div>
                <div class='space'></div>`,
                link: "/history?tj"
            }
        },
        outer: [
            {size: 16, top: {d: "1rem", t: "3rem"}, right: {d: "23rem", t: "3rem"}},
            {size: 12, top: {d: "-1.5rem", t: "1rem"}, right: {d: "50rem", t: "33rem"}},
            {size: 30, bottom: {d: "-5rem", t: "-4rem"}, right: {d: "3rem", t: "1.5rem"}}
        ],
        inner: [
            {size: 15, top: {d: "1.5rem", t: "3.5rem"}, right: {d: "23.5rem", t: "3.5rem"}, img: "/homeImages/history3.png"},
            {size: 11, top: {d: "0.5rem", t: "2rem"}, right: {d: "52rem", t: "35rem"}, img: "/homeImages/history2.png"},
            {size: 29, bottom: {d: "-3.5rem", t: "-3.5rem"}, right: {d: "1.5rem", t: "1.5rem"}, img: "/homeImages/history1.png"}
        ],
    },
];