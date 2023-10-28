export const stepInfo = [
    {
        num: "01",
        text: {
            us: {text: "Arts & crafts", font: {d: 10, m: 7.1, p: 8}, margin: {d: 2, m: 1}},
            ru: {text: "Искусства & ремесла", font: {d: 7.1, m: 4.4, p: 6}},
            tj: {text: "Санъат & ҳунар", font: {d: 9.5, m: 6.1, p: 8}, margin: {d: 2, m: 0}}
        },
        desc: {
            us: 
                {
                    text: `Handicrafts serve as a tangible representation of the intellectual and aesthetic essence 
                    of the Tajiks, intricately intertwined with their lifestyle, culture, and mythology.
                    <div class='space'></div>
                    There are nearly 500 unique arts and crafts still practiced within the Tajik communities, 
                    many as old as the Eastern Iranian civilization itself.
                    <div class='space'></div>
                    <div class='space'></div>`,
                    link: '/arts'
                },
            ru: 
                {
                    text: `Традиционные ремесла таджиков являются воплощением и интеллектуального, и эстетического 
                    наследия этого народа. Они неразрывно связаны с их образом жизни, культурой и мифологией.
                    <div class='space'></div>
                    Среди таджиков до сих пор сохранилось около 500 уникальных видов 
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
                    Дар байни тоҷикони олам то ҳол тахминан 500 намуди ҳунарҳои хос ва беҳамто вуҷуд доранд, 
                    ки қадимии бисёрашон баробари қадимии тамаддуни эрониёни шарқӣ ҳастанд.
                    <div class='space'></div>
                    <div class='space'></div>`,
                    link: '/arts?tj'
                },
        },
        outer: [
            {size: 16, bottom: "-2rem", right: "23rem"},
            {size: 12, bottom: "5rem", right: "7.7rem"},
            {size: 30, top: "-6.2rem", right: "-3rem"}
        ],
        inner: [
            {size: 15, bottom: "-1.5rem", right: "23.5rem", img: "/homeImages/craft3.png"},
            {size: 11, bottom: "5.5rem", right: "7.2rem", img: "/homeImages/craft2.png"},
            {size: 29, top: "-5.5rem", right: "-1.2rem", img: "/homeImages/craft1.png"}
        ],
    },
    {
        num: "02",
        text: {
            us: {text: "Customs", font: {d: 9.3, m: 5.8, p: 7.3}},
            ru: {text: "Обычаи", font: {d: 9.5, m: 6.1, p: 7.3}},
            tj: {text: "Расму оин", font: {d: 9, m: 7.5, p: 7.3}, margin: {d: 2, m: 0.5}}
        },
        desc: {
            us: 
                {
                    text: `Our languages, whether belonging to the Western or Eastern Iranian language continua, 
                    lie at the core of our identity and have been detrimental for our survival.
                    <div class='space'></div>
                    They encapsulate our unique worldviews, our ancestral wisdom, our stories, and our songs.
                    Our languages stand as a testament to our resilience, functioning as a bridge that 
                    connects us to our past and present - defining who we are.
                    <div class='space'></div>
                    <div class='space'></div>`,
                    link: "/customs"
                },
            ru:  {
                    text: `Традиционные ремесла таджиков являются воплощением и интеллектуального, и эстетического 
                    наследия этого народа. Они неразрывно связаны с их образом жизни, культурой и мифологией.
                    <div class='space'></div>
                    В современных таджикских общинах до сих пор сохранилось около 500 уникальных видов 
                    искусства и ремесел, многие из которых возникли наравне с формированием восточноиранской цивилизации.
                    <div class='space'></div>
                    <div class='space'></div>`,
                    link: "/customs?ru"
                },
            tj: {
                    text: `Ҳунарҳои мардумӣ ҳамчун намунаи моддии фикрӣ ва зебоишиносии тоҷикон хизмат мекунанд, 
                    ки бо тарзи зиндагӣ, фарҳанг ва асотирии тоҷикон печида аст.
                    <div class='space'></div>
                    Дар байни тоҷикони олам то ҳол тахминан 500 намуди ҳунарҳои хос ва беҳамто вуҷуд доранд, 
                    ки қадимии бисёрашон баробари қадимии тамаддуни эрониёни шарқӣ ҳастанд.
                    <div class='space'></div>
                    <div class='space'></div>`,
                    link: "/customs?tj",
                },
        },
        outer: [
            {size: 16, top: "-3rem", right: "34rem"},
            {size: 12, bottom: "1rem", right: "27.5rem"},
            {size: 30, top: "6rem", right: "0.5rem"}
        ],
        inner: [
            {size: 15, top: "-3.5rem", right: "34.7rem", img: "/homeImages/custom3.png"},
            {size: 11, bottom: "1.5rem", right: "28rem", img: "/homeImages/custom2.png"},
            {size: 29, top: "6rem", right: "1.5rem", img: "/homeImages/custom1.png"}
        ],
    },
    {
        num: "03",
        text: {
            us: {text: "Cuisine", font: {d: 11, m: 6.8, p: 7.3}},
            ru: {text: "Кухня", font: {d: 11.7, m: 7.6, p: 7.3}},
            tj: {text: "Ғизоҳо", font: {d: 10.7, m: 6.65, p: 7.3}}
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
            {size: 16, top: "-0.5rem", right: "32rem"},
            {size: 12, top: "1.5rem", right: "87.5%"},
            {size: 30, top: "12rem", right: "0rem"}
        ],
        inner: [
            {size: 15, top: "1rem", right: "32.5rem", img: "/homeImages/cuisine3.png"},
            {size: 11, top: "2rem", right: "88%", img: "/homeImages/cuisine2.png"},
            {size: 29, top: "12rem", right: "1rem", img: "/homeImages/cuisine1.png"}
        ],
    },
    {
        num: "04",
        text: {
            us: {text: "Language & literature", font: {d: 6.8, m: 4.35, p: 8}},
            ru: {text: "Язык & литература", font: {d: 6.8, m: 4.2, p: 8}},
            tj: {text: "Забон & адабиёт", font: {d: 9.2, m: 5.7, p: 8}, margin: {d: 3, m: 0}}
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
                    connecting the past and the present - defining who Tajiks are.
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
            {size: 16, top: "1.2rem", right: "1rem"},
            {size: 12, top: "4rem", right: "27rem"},
            {size: 30, bottom: "-5rem", right: "9.5rem"},
        ],
        inner: [
            {size: 15, top: "0.4rem", right: "2rem", img: "/homeImages/lang3.png"},
            {size: 11, top: "4.5rem", right: "28.5rem", img: "/homeImages/lang2.png"},
            {size: 29, bottom: "-4.5rem", right: "10rem", img: "/homeImages/lang1.png"}
        ],
    },
    {
        num: "05",
        text: {
            us: {text: "History", font: {d: 10.1, m: 6.25, p: 8}},
            ru: {text: "История", font: {d: 8.79, m: 5.4, p: 8}},
            tj: {text: "Таърих", font: {d: 10.7, m: 6.7, p: 8}}
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
            {size: 16, top: "1rem", right: "23rem"},
            {size: 12, top: "-1.5rem", right: "50rem"},
            {size: 30, bottom: "-5rem", right: "3rem"}
        ],
        inner: [
            {size: 15, top: "1.5rem", right: "23.5rem", img: "/homeImages/history3.png"},
            {size: 11, top: "0.5rem", right: "52rem", img: "/homeImages/history2.png"},
            {size: 29, bottom: "-3.5rem", right: "1.5rem", img: "/homeImages/history1.png"}
        ],
    },
];