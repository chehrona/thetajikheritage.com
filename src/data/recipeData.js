module.exports.recipes = [
    // {
    //     id: 'oshi-palov',
    //     title: 'Osh-i palov',
    //     subtitle: 'Rice pilaf',
    //     mainImg: 'oshipalov.png',
    //     sound: '/recipeNames/oshipalov.mp3',
    //     history: '',
    //     link: '/osh-i-palov',
    // },
    {
        id: 'shirchoy',
        title: {us: 'Shirchoy', ru: 'Ширчой', tj: 'Ширчой', kh: 'شیرچوی'},
        subtitle: {us: 'Salted milk tea', ru: 'Солёный чай с молоком', tj: '', kh: ''},
        mainImg: '/recipePics/shirchoy.jpeg',
        sound: '/recipeNames/shirchoy.mp3',
        history: {
            us: `<span class='termSpan'>Shirchoy</span> is a traditional dish prepared in various Central Asian
                countries, including Tajikistan. Its name, "shirchoy" originates from a combination of two Tajiki-Persian words: 
                <span class='termSpan'>"shir,"</span> meaning milk, and <span class='termSpan'>"choy,"</span>  which refers to tea.<sup>1</sup>
                The exact regional or historical origins of shirchoy remain uncertain. However, the most detailed account of the dish can be 
                found in the writings of the 19th—century Tajik scholar Vozeh.<sup>1,2</sup> It is conceivable that the dish traces its roots 
                as far back as the mid-8th century when tea was introduced to Central Asia from China.<sup>3</sup>
                Additionally, the Pamiris have a legendary account regarding the creation of the very first shirchoy:
                <div class='quoteContainer'><div><div class='quoteSymbol'></div>
                <div class='quoteWrapper'>One day, people came back 
                to our village ... [and] brought leaves with them... We boiled a big pot of water and threw in all the tea, then invited 
                the villagers to drink it. People tried it ..., 
                but found it horrible [very bitter]. Later, people began to add [extra] things to it - milk, walnuts, dried apple, other 
                things - and it slowly grew on them.<sup style='font-style: normal'>4</sup></div></div></div>
                Unlike milk teas from the West, like English tea, Tajik milk tea is more than just a beverage — it serves as a substantial 
                meal typically enjoyed for breakfast or as a light dinner.<br>
                The preparation of shirchoy involves the combination of milk and tea, but it doesn't stop there. Additional ingredients are added to enhance its flavor and texture. 
                These may include pieces of flatbread (usually stale bread is repurposed), butter or ghee, dried apple slices, mulberry, almond leaves, walnuts, and rose hip flowers.<sup>2,4</sup>
                Shirchoy can incorporate unconventional ingredients for milk-based meals, including small amounts of pepper (seasoning), 
                <div class="tooltip">raw onion slices<span class="tooltiptext" style='width: 12rem; margin-left: -6rem;'>Only in Samarkand</span></div>
                or even melted <div class="tooltip">sheep tail fat
                <span class="tooltiptext" style='width: 17rem; margin-left: -8.5rem;'>Mainly in Samarkand, Bukhara, Fergana and Northern Tajikistan</span></div>.<sup>2</sup>
                Also, shirchoy is occasionally known by different names that highlight additional ingredients beyond tea and milk. 
                Since it is predominantly a salty dish, it is alternatively called <span class='termSpan'>"shürchoy,"</span> derived from the Tajiki-Persian word for salty, "shür."
                In the region of Badakhshan, a flavorful variation of shirchoy called <span class='termSpan'>"ghüzshirchoy"</span> is prepared, featuring ground toasted walnuts as one
                of its key ingredients.<sup>4</sup> The name is derived from the Shughni word <span class='termSpan'>"ghüz" [ɣůz]</span> meaning "walnut".<sup>5</sup><br>
                The specific ingredients in shirchoy can vary based on the local climate and preferences. For instance, mountainous communities often incorporate ghee
                or cream, providing them with higher-calorie sustenance to endure the harsh and cold weather. Given the variety of ingredients used in shirchoy, 
                it can be classified as a milk-based "soup" mainly served in bowls or deep wooden plates.<br>
                Interestingly, despite being a liquid dish, shirchoy is traditionally consumed with hands. The pieces of bread, once soaked in milk, are eaten by hand, 
                and the remaining liquid is drunk from the bowl.<sup>6</sup> This approach allows the bread to serve a dual purpose. While urban Tajiks tend to enjoy shirchoy 
                primarily during the winter months, mountain communities such as the Pamiri people enjoy it year-round and multiple times a day, owing to their high-altitude environment.<sup>2,4</sup>`,
            ru: `<span class='termSpan'>Ширчой</span> — традиционное блюдо, которое готовят в разных странах Центральной Азии, в том числе в Таджикистане. Его название «ширчой» происходит 
                от сочетания двух таджикско-персидских слов: <span class='termSpan'>«шир»</span>, что означает молоко, и <span class='termSpan'>«чой»</span>, что означает чай.<sup>1</sup>
                Конкретное региональное или историческое происхождение ширчоя остается неопределённым. Однако наиболее подробное описание блюда можно найти в трудах таджикского учёного XIX века Возеха.<sup>1,2</sup>
                Можно предположить, что это блюдо начали готовить еще в середине VIII века, когда чай был завезен в Среднюю Азию из Китая.<sup>3</sup>
                Кроме того, у памирцев есть легенда о создании самого первого ширчоя:
                <div class='quoteContainer'><div class='quoteSymbol'></div><div class='quoteWrapper'>
                Однажды люди вернулись в нашу деревню ... [и] принесли с собой листья ... Мы вскипятили большую кастрюлю с водой и бросили в нее весь чай, 
                а затем пригласили жителей деревни пить его. Люди пробовали это..., но находили это ужасным [очень горьким]. Позже люди стали добавлять в него [дополнительные] вещи 
                [ингредиенты] — молоко, грецкие орехи, сушёное яблоко, другие вещи — и оно им постепенно начало нравиться.<sup style='font-style: normal'>4</sup>
                <div style='font-style: normal; font-size: 1.1rem;'>*Дословный перевод с английского.</div></div></div>
                В отличие от чая с молоком с Запада, такого как английский чай, таджикский чай с молоком это больше, чем просто напиток — он служит сытной едой, которую обычно подают 
                на завтрак или в качестве легкого ужина.<br>
                Приготовление ширчоя предполагает сочетание молока и чая, но на этом не останавливается. Дополнительные ингредиенты добавляются для улучшения вкуса и текстуры. Это могут 
                быть кусочки лепёшки (обычно используется черствый хлеб), сливочное или топлёное масло, кусочки сушёных яблок, шелковица, листья миндаля, грецкие орехи и цветки шиповника.<sup>2,4</sup> 
                Ширчой может включать нетрадиционные ингредиенты для блюда на основе молока, например небольшое количество перца (приправы), 
                <div class="tooltip">кусочки сырого лука<span class="tooltiptext" style='width: 14rem; margin-left: -7rem;'>Только в Самарканде</span></div>
                или даже растопленый <div class="tooltip">курдючный жир
                <span class="tooltiptext" style='width: 17rem; margin-left: -8.5rem;'>В основном в Самарканде, Бухаре, Фергане и Северном Таджикистане</span></div>.<sup>2</sup>
                Кроме того, ширчой иногда известен под разными названиями, которые подчеркивают дополнительные ингредиенты, помимо чая и молока. Поскольку это преимущественно солёное 
                блюдо, его также называют <span class='termSpan'>«шурчой»</span>, от таджикско-персидского слова, обозначающего солёный, «шур».
                В Бадахшане готовят вкусный вариант ширчоя под названием <span class='termSpan'>«гузширчой»</span>, одним из основных ингредиентов которого являются молотые жареные грецкие орехи.<sup>4</sup>
                Название происходит от шугнанского слова <span class='termSpan'>«гуз» [ɣůz]</span>, означающего «грецкий орех».<sup>5</sup><br>
                Конкретные ингредиенты ширчоя могут варьироваться в зависимости от местного климата и предпочтений. Например, горные общины часто используют топлёное масло или сливки, 
                обеспечивая их более калорийной пищей, чтобы выдержать суровую и холодную погоду. Учитывая разнообразие ингредиентов, используемых в ширчое, его можно классифицировать как «суп» 
                на молочной основе, который в основном подают в мисках или глубоких деревянных тарелках.<br>
                Интересно, что несмотря на то, что ширчой является жидким блюдом, его традиционно едят руками. Кусочки хлеба, размоченные в молоке, едят руками, а оставшуюся жидкость выпивают 
                из миски.<sup>6</sup> Таким образом, хлеб служит двойному назначению. В то время как городские таджики, наслаждаются ширчоем в основном в зимние месяцы, 
                горные общины, такие как памирцы, наслаждаются им круглый год и несколько раз в день из-за их высокогорной среды.<sup>2,4</sup>`,
            kh: `<span class='termSpan'>شیرچوی</span> غذایی است که در کشورهای مختلف آسیای مرکزی و همچنین در تاجیکستان آماده می شود
            `,
            tj: `<span class='termSpan'>Ширчой</span> таомест, ки дар кишварҳои мухталифи Осиёи Миёна ва ҳамчунин 
                дар Тоҷикистон тайёр карда мешавад. Номи "ширчой" аз ду калимаи тоҷикӣ-форсии 
                <span class='termSpan'>"шир"</span> ва <span class='termSpan'>"чой"</span> гирифта шудааст.<sup>1</sup> Замон ё макони аниқи пайдоиши ширчой номаълум боқӣ мемонад. Аммо 
                оиди ин таом пурратарин маълумотро
                дар навиштаҳои олими асри XIX-и тоҷик — Возеҳ, дарёфтан мумкин аст.<sup>1,2</sup> Шояд, ки ин ғизо аз давраҳое, ки чой ба Осиёи Марказӣ аз Чин ворид карда шуда буд 
                (миёнаҳои асри VIII), омода карда мешавад.<sup>3</sup> Илова бар ин, помириҳо дар бораи созиши аввалин ширчой ривояте доранд: 
                <div class='quoteContainer'><div class='quoteSymbol'></div><div class='quoteWrapper'>
                Рӯзе одамон ба қишлоқи мо ... баргаштанд. Онҳо бо худ ин баргҳоро оварданд ва ҳамаро барои тамошо даъват карданд. Мо дар як зарфи калон об ҷӯшонда,
                ҳамаи баргҳои чойро дар он андохтем, сипас, ҳамаи сокинони деҳаро барои нӯшидани он даъват кардем. Мардум... онро ... чашида ... буданд, аммо 
                онро қабеҳ [хеле талх] дарёфтанд. Баъдтар мардум ҳар чизеро ба он илова карданд — шир, чормағз, себи хушк, ва оҳиста-оҳиста ба он одат 
                карданд.<sup style='font-style: normal'>4</sup></div></div>
                Ширчойи тоҷикӣ нисбат ба ширчойҳое, ки махсусан дар кишварҳои Ғарб (масалан чойи англисӣ) омода мекунанд, камтар фарқ мекунад. Ширчойи тоҷикӣ ин ғизои пурра аст, 
                ки ҳамчун субҳона ва ё шоми сабук истеъмол карда мешавад.<br> Албатта, барои тайёр кардани ширчой, ширу чой кофӣ ҳастанд, 
                вале барои беҳтар кардани маззааш чизҳои дигар ҳам илова карда мешаванд. Инҳо метавонанд пораҳои нон (одатан нони хушк), 
                маска ё равғани зарди сӯхта, буридаҳои себи хушк, тут, баргҳои бодом, чормағз ва гулҳои хуч (шиповник)-ро дар бар гиранд.<sup>2,4</sup> 
                Ба ширчой баъзан чизҳои барои хӯрокҳои ширӣ ғайриоддӣ, аз монанди мурч, 
                <div class="tooltip">пиёз<span class="tooltiptext" style='width: 14rem; margin-left: -7rem;'>Танҳо дар Самарқанд</span></div> ва ҳатто 
                равғани <div class="tooltip">думбаи обкардашуда
                <span class="tooltiptext" style='width: 18rem; margin-left: -10rem;'>Асосан дар Самарқанд, Бухоро, Фарғона ва вилояти Суғд</span></div>, андохта мешаванд.
                Инчунин, ширчой бо номҳои гуногун ҳам маъруф аст, ки онҳо аз яке аз маҳсулотҳои иловагиаш гирифта мешаванд. Азбаски ширчой одатан як хӯроки шӯр аст, 
                яке аз номҳои дигараш <span class='termSpan'>"шӯрчой"</span> мебошад. Дар вилояти Бадахшон як намуди болаззати ширчой — <span class='termSpan'>"ғӯзширчой"</span> омода карда 
                мешавад, ки яке аз қисмҳои асосии он чормағзи тафтдодашудаи кӯфта мебошад.<sup>4</sup>
                Номаш аз калимаи шуғнии <span class='termSpan'>"ғӯз" [ɣůz]</span> гирифта шудааст, ки маънояш "чормағз" мебошад.<sup>5</sup><br>
                Таркиби ширчой аз обу ҳавои минтақа ва хоҳиши пазанда вобастагӣ дорад. Масалан, мардуми кӯҳистон аксар вақт ба он равған ё қаймоқ илова мекунанд, чунки 
                барои тобоварӣ ба обу ҳавои сард ба хӯрокҳои серкалория ниёз доранд. Бо назардошти гуногунии маҳсулотҳое, ки дар ширчой истифода мешаванд, 
                онро "шӯрбо"-и ширӣ ҳисоб кардан мумкин аст, ки асосан дар коса ё табақҳои чуқури чӯбӣ мекашанд.<br> 
                Ҷолиб он аст, ки ширчой бо вуҷуди як хӯроки моеъ буданаш, онро одатан бо даст мехӯранд. Пораҳои нони дар шир тар шударо бо 
                даст гирифта истеъмол мекунанд ва моеъи боқимондаро аз коса менӯшанд.<sup>6</sup> Бо ин роҳ, нон ҳамчун асбоби хӯрокхурӣ ва ҳам калорияи иловагӣ хидмат мекунад. Аҳолии 
                шаҳрӣ ширчойро бисёртар дар фасли зимистон истеъмол мекунад, вале ҷамоаҳои кӯҳӣ, ба мисли помириҳо, аз сабаби муҳити баландкӯҳиашон аз он тамоми сол ва дар 
                як рӯз чанд маротиба лаззат мебаранд.<sup>2,4</sup>`
        },
        link: '/shirchoy',
        contains: ['dairy', 'gluten', 'nuts'],
        diet: ["veg"],
        containsLang: {ru: 'Содержит', us: 'Contains', tj: 'Дорад', kh: 'داراد'},
        dietLang: {us: "Diet", ru: "Диета", tj: "Парҳез", kh: "پرهز"},
        dietLabels: [
            {us: 'Vegetarian', ru: 'Вегетарианская', tj: 'Гиёҳхорӣ', kh: 'گیاه خواری'},
        ],
        ingredientsLang: {ru: 'Ингредиенты', us: 'Ingredients', tj: 'Маҳсулот', kh: 'محصولات'},
        directionsLang: {ru: 'Приготовление', us: 'Directions', tj: 'Тарзи омодакунӣ', kh: 'طرز آمادهکنی'},
        references: {
            us: [
                    {name: 'Vozeh, Qori Rahmatullo. کان لذت و خان نعمت [Source of pleasure and table spread of blessings]. <span style="font-style: italic">In Tajiki-Persian w. Perso-Arabic script. </span>Bukhara. 1880 - 1881.', link: ""},
                    {name: 'Shovalieva, Mumina. "История кулинарной культуры таджикского народа" ["The history of the culinary culture of the Tajik people"]. <span style="font-style: italic">In Russian. </span>PhD dissertation, (A. Donish Institute of History, Archeology and Ethnography, 2019, pp. 97 — 98).', link: ""},
                    {name: 'N. Ershov, “Food”, Tajiks of Karategin and Darvas, Issue 3, p. 290, 1976.', link: ""},
                    {name: 'van Oudenhoven, Frederik and Haider, Jamila. With Our Own Hands: A Celebration of Food and Life in the Pamir Mountains of Afghanistan and Tajikistan. <span style="font-style: italic">In English, Tajiki- and Dari-Persian. </span>LM Publishers, 2015, p. 599.', link: ""},
                    {name: 'Steblin-Kamenskiy, I.M. Очерки по истории лексики памирских языков. Названия культурных растений [Essays on the history of Pamiri languages. Names of cultivated plants]. <span style="font-style: italic">In Russian.</span> Moscow, "Nauka" publishing house, 1982, pp. 110 — 111.', link: ""},
                    {name: 'Kislyakova, N. A. and Pisarchik, A. K. Таджики Каратегина и Дарваза (Вып. 2) [Tajiks of Karategin and Darvaz (Issue 2)]. <span style="font-style: italic">In Russian. </span>Dushanbe, "Donish" publishing house, 1970, p. 256.', link: ""}
            ],
            ru: [
                    {name: 'Возех, Кори Рахматулло. کان لذت و خان نعمت [Источник наслаждения и скатерть благ]. <span style="font-style: italic">На тадж. с арабо-персидским алфавитом. </span>Бухара. 1880 - 1881.', link: ""},
                    {name: 'Шовалиева, Мумина. "История кулинарной культуры таджикского народа". Дис. канд. ист. наук, (Институт истории, археологии и этнографии им. А.Дониша, 2019, с. 97 — 98).', link: ""},
                    {name: 'ван Оуденховен, Фредерик и Хайдар, Джамила. With Our Own Hands: A Celebration of Food and Life in the Pamir Mountains of Afghanistan and Tajikistan [Своими руками: праздник еды и жизни в Памирских горах Афганистана и Таджикистана]. <span style="font-style: italic">На анг, таджикско- и дари-персидском языках. </span>Издательство "LM Publishers", 2015, с. 599.', link: ""},
                    {name: 'Стеблин-Каменский И.М. Очерки по истории лексики памирских языков. Названия культурных растений. Москва, издательство "Наука", 1982, с. 110 — 111.', link: ""},
                    {name: 'Кислякова, Н. A. и Писарчик, A. K. Таджики Каратегина и Дарваза (Вып. 2). Душанбе, издательство "Дониш", 1970, с. 256.', link: ""}
            ],
            tj: [
                    {name: 'Возеҳ, Қорӣ Раҳматулло. کان لذت و خان نعمت [Кони лаззат ва хони неъмат]. <span style="font-style: italic">Ба забони тоҷикӣ бо хати форсӣ.</span> Бухоро. 1880 - 1881.', link: ""},
                    {name: 'Шовалиева, Мӯмина. "История кулинарной культуры таджикского народа" ["Таърихи маданияти хӯрокпазии халқи тоҷик"]. Диссертатсияи дараҷаи илмии доктори фалсафа, (Институти таърих, бостоншиносӣ ва мардумшиносии ба номи А. Дониш, 2019, с. 97 — 98).', link: ""},
                    {name: 'ван Оуденҳовен, Фредерик ва Ҳайдар, Ҷамила. Бо дастони худ: ҷашни таъом ва зиндагӣ дар кӯҳистони Помири Афғонистон ва Тоҷикистон. <span style="font-style: italic">Ба забонҳои тоҷикӣ, дарӣ ва анг. </span>Нашриёти "LM Publishers", 2015, с. 599.', link: ""},
                    {name: 'Стеблин-Каменский И.М. Очерки по истории лексики памирских языков. Названия культурных растений [Иншоҳо оид ба таърихи луғати забонҳои помирӣ. Номҳои растаниҳои киштшаванда]. Маскав, нашриёти "Наука", 1982, с. 110 — 111.', link: ""},
                    {name: 'Кислякова, Н. A. ва Писарчик, A. K. Таджики Каратегина и Дарваза (Вып. 2) [Тоҷикони Қаротегин ва Дарвоз (Ҷузъи 2)]. Душанбе, нашриёти "Дониш", 1970, с. 256.', link: ""}
            ],
            kh: ['واضح٬ قاری رحمةالله', "2. here 2"],
        },
        invite: {
            us: `Nerdy talk aside, let's make some shirchoy!`,
            ru: `Разговоры в сторону, давайте приготовим ширчой!`,
            tj: `Сар пур шуд, биёед шикамро пур кунем!`,
            kh: `!سر پر شد، بیایید شکم را پر کنیم`
        },
        labels: [
            {us: 'Dairy', ru: 'Молоко', tj: 'Шир', kh: 'شیر'},
            {us: 'Gluten', ru: 'Клейковина', tj: 'Глютен', kh: 'گلوتن'},
            {us: 'Nuts', ru: 'Орехи', tj: 'Чормағз', kh: 'چارمغزحا'}
        ],
        ingredients: {
            us: [
                    {amount: '1&#189', calc: 1.5, unit: "cups", item: "milk"},
                    {amount: '1', calc: 1, unit: "cup", item: "water"},
                    {amount: '2', calc: 2, unit: "tsps", item: "black tea"},
                    {amount: '1&#189', calc: 1.5, unit: "cups", item: "milk"},
                ],
            ru: [
                    {amount: '1&#189', calc: 1.5, unit: "стакана", item: "молока"},
                    {amount: '1', calc: 1, unit: "стакана", item: "воды"},
                    {amount: '2', calc: 2, unit: "c.л.", item: "чёрного чая"},
                    {amount: '1&#189', calc: 1.5, unit: "стакана", item: "молока"},
                ],
            tj: ["3 стакан шир", "2 қошуқи калон чойи сиёҳ", "1-то нон", "&#189 стакан измельченных грецких орехов", "1 қошуқча равғани зард", "2 қошуқча шакар"],
            kh: ["3 стакана молока", "2 чёрного чая", ""],
        },
        directions: {
            us: ["Boil the water in a pot over medium heat.", "Add the black tea leaves and simmer for 10-15 minutes, stirring occasionally.", "Strain the tea leaves and return the tea to the pot.", "Add the walnuts, milk, and any other spices and bring the mixture to a boil, stirring constantly.", "Add salt to taste.", "Simmer the tea for another 5 minutes, stirring occasionally."],
            ru: ["Pour the water into a pot and bring it to boil", "Add the tea and let it seap until the color is released (around 2-3 min)", "Pour in the milk and let everything boil for another 5 min"],
            tj: ["Pour the water into a pot and bring it to boil", "Add the tea and let it seap until the color is released (around 2-3 min)", "Pour in the milk and let everything boil for another 5 min"],
            kh: ["Pour the water into a pot and bring it to boil", "Add the tea and let it seap until the color is released (around 2-3 min)", "Pour in the milk and let everything boil for another 5 min"],
        },
        time: {
            us: {total: "15 min", prep: "5 min", cook: "10 min"}, ru: {total: "15 мин", prep: "5 мин", cook: "10 мин"},
            tj: {total: "15 дақ", prep: "5 дақ", cook: "10 дақ"}, kh: {total: "15 мин", prep: "5 мин", cook: "10 мин"}
        },
        servingAlert: {
            us: ["Sorry, the serving amount cannot be less than 1", "Servings must be a number greater than 0"], 
            ru: ["К сожалению, количество порций не может быть меньше 1", "Количество порций должно быть больше 0"], 
            tj: ["Бубахшед, портсия набояд аз 1 камтар бошад", "Бубахшед, портсия бояд аз 0 зиёд бошад"], 
            kh: ["", ""]},
        serving: {us: "serv.", ru: "порц.", tj: "", kh: ""},
        startServing: 2,
        pinUrl: 'https://www.thetajikheritage.com/cuisine/shirchoy/',
        pinDesc: {
            us: 'Shirchoy is a traditional dish prepared in Tajikistan',
            ru: '',
            tj: '',
            kh: ''
        },
        pinMedia: 'https://i.pinimg.com/736x/17/34/8e/17348e163a3212c06e61c41c4b22b87a.jpg'
    },
    // {
    //     id: 'qurutob',
    //     title: 'Qurutob',
    //     subtitle: 'Bread salad',
    //     mainImg: 'qurutob.png',
    //     sound: '/recipeNames/qurutob.mp3',
    //     history: '',
    //     link: '/qurutob',
    // },
    // {
    //     title: 'Kichiri',
    //     subtitle: 'Rice porridge with mung beans',
    //     mainImg: '/recipePics/kichiri.png',
    //     sound: '/recipeNames/kichiri.mp3',
    // },
    // {
    //     title: 'Mastoba',
    //     subtitle: 'Rice soup with beef',
    //     mainImg: '/recipePics/mastoba.png',
    //     sound: '/recipeNames/mastoba.mp3',
    // },
    // {
    //     title: 'Dügh/Ayron',
    //     subtitle: 'Yogurt drink',
    //     mainImg: '/recipePics/dugh.png',
    //     sound: '/recipeNames/dugh.mp3',
    // },
    // {
    //     title: 'Mastoba-i qaylagi',
    //     subtitle: 'Rice soup with yogurt and dried dill',
    //     mainImg: '/recipePics/qaylagi.png',
    //     sound: '/recipeNames/mastobaiqaylagi.mp3',
    // },
    // {
    //     title: 'Siyoh alaf',
    //     subtitle: 'Soup with spring herbs',
    //     mainImg: 'siyohalaf.png',
    //     sound: '/recipeNames/siyohalaf.mp3',
    // },
    // {
    //     title: 'Shirbirinj',
    //     subtitle: 'Milk porridge',
    //     mainImg: 'shirbirinj.png',
    //     sound: '/recipeNames/shirbirinj.mp3',
    // },
    // {
    //     title: 'Piyoba',
    //     subtitle: 'Onion soup',
    //     mainImg: 'piyoba.png',
    //     sound: '/recipeNames/piyoba.mp3',
    // },
    // {
    //     title: 'Pamiri lamb stew',
    //     subtitle: 'Pamiri lamb stew',
    //     mainImg: 'pamirimeat.png',
    //     sound: '/recipeNames/pamirimeat.mp3',
    // },
    // {
    //     title: 'Sambusa',
    //     subtitle: 'Meat pocket with phyllo dough',
    //     mainImg: 'sambusa.png',
    //     sound: '/recipeNames/sambusa.mp3',
    // },
    // {
    //     title: 'Burchak-i güshti',
    //     subtitle: 'Rectangular meat pocket',
    //     mainImg: 'burchak.png',
    //     sound: '/recipeNames/burchakigushti.mp3',
    // },
    // {
    //     title: 'Shüla',
    //     subtitle: 'Sticky rice with carrots',
    //     mainImg: 'shula.png',
    //     sound: '/recipeNames/shula.mp3',
    // },
    // {
    //     title: 'Shürbo',
    //     subtitle: 'Soup with vegetables and bone-in meat',
    //     mainImg: 'shurbo.png',
    //     sound: '/recipeNames/shurbo.mp3',
    // },
    // {
    //     title: 'Tunukcha',
    //     subtitle: 'Fried flat bread',
    //     mainImg: 'tunukcha.png',
    //     sound: '/recipeNames/tunukcha.mp3',
    // },
    // {
    //     title: 'Torpukht',
    //     subtitle: 'Cream stuffed flat bread',
    //     mainImg: 'torpukht.png',
    //     sound: '/recipeNames/torpukht.mp3',
    // },
    // {
    //     title: 'Zanbürugh-i tanüri',
    //     subtitle: 'Baked mushrooms',
    //     mainImg: 'torpukht.png',
    //     sound: '/recipeNames/zanburughitanuri.mp3',
    // },
    // {
    //     title: 'Küza kabob',
    //     subtitle: 'Kabab in a jug',
    //     mainImg: 'torpukht.png',
    //     sound: '/recipeNames/kuzakabob.mp3',
    // },
    // {
    //     title: 'Falla',
    //     subtitle: 'Soft cheese with the first milk of the cow',
    //     mainImg: 'torpukht.png',
    //     sound: '/recipeNames/falla.mp3',
    // },
    // {
    //     title: 'Shirkadu/Kadu-ba-shir',
    //     subtitle: 'Pumpkin porridge with milk',
    //     mainImg: 'shirkadu.png',
    //     sound: '/recipeNames/shirkadu.mp3',
    // },
    // {
    //     title: 'Lüla kabob',
    //     subtitle: 'Rolled kebab',
    //     mainImg: 'lulakabob.png',
    //     sound: '/recipeNames/lulakabob.mp3',
    // },
    // {
    //     title: 'Buron-i bodimjon',
    //     subtitle: 'Fried meat with eggplants',
    //     mainImg: 'buronibodimjon.png',
    //     sound: '/recipeNames/buronibodimjon.mp3',
    // },
    // {
    //     title: 'Nakhütak',
    //     subtitle: 'Fried chickpeas',
    //     mainImg: 'nakhutak.png',
    //     sound: '/recipeNames/nakhutak.mp3',
    // },
    // {
    //     title: 'Khomshürbo',
    //     subtitle: 'Vegetable soup',
    //     mainImg: 'khomshurbo.png',
    //     sound: '/recipeNames/khomshurbo.mp3',
    // },
    // {
    //     title: 'Poplang',
    //     subtitle: 'Spread with dried mulberries and nuts',
    //     mainImg: 'poplang.png',
    //     sound: '/recipeNames/poplang.mp3',
    // },
    // {
    //     title: 'Non-i zaghora',
    //     subtitle: 'Corn bread',
    //     mainImg: 'nonizaghora.png',
    //     sound: '/recipeNames/nonizaghora.mp3',
    // },
    // {
    //     title: 'Buron-i khiyor',
    //     subtitle: 'Fried meat with cucumbers',
    //     mainImg: 'buronikhiyor.png',
    //     sound: '/recipeNames/buronikhiyor.mp3',
    // },
    // {
    //     title: 'Nonpalov',
    //     subtitle: 'Rice pilaf with bread',
    //     mainImg: 'nonpalov.png',
    //     sound: '/recipeNames/nonpalov.mp3',
    // },
    // {
    //     title: 'Mantu',
    //     subtitle: 'Steamed dumplings',
    //     mainImg: 'mantu.png',
    //     sound: '/recipeNames/mantu.mp3',
    // },
    // {
    //     title: 'Tushbera',
    //     subtitle: 'Beef pierogies',
    //     mainImg: 'tushbera.png',
    //     sound: '/recipeNames/tushbera.mp3',
    // },
    // {
    //     title: 'Girdacha',
    //     subtitle: 'Tajik bread',
    //     mainImg: 'girdacha.png',
    //     sound: '/recipeNames/girdacha.mp3',
    // },
    
]
