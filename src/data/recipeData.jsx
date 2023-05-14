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
        mainImg: '/recipePics/kichiri.png',
        sound: '/recipeNames/shirchoy.mp3',
        history: {
            us: `<span class='termSpan'>Shirchoy</span> is a traditional dish prepared in various Central Asian
                countries, including Tajikistan. Its name, "shirchoy" originates from a combination of two Tajiki-Persian words: 
                <span class='termSpan'>"shir,"</span> meaning milk, and <span class='termSpan'>"choy,"</span>  which refers to tea.<sup>1</sup>
                The specific regional or historical origins of shirchoy remain uncertain. However, the most detailed account of the dish can be 
                found in the writings of the 19th-century Tajik scholar Vozeh.<sup>1,2</sup> It is conceivable that the dish traces its roots 
                as far back as the mid-8th century when tea was introduced to Central Asia from China.<sup>3</sup>
                Additionally, the Pamiris have a legendary account regarding the creation of the very first shirchoy:
                <div class='quoteContainer'><div class='quoteSymbol'></div>
                <div class='quoteWrapper'>One day, people came back 
                to our village ... [and] brought leaves with them... We boiled a big pot of water and threw in all the tea, then invited 
                the villagers to drink it. People tried it ..., 
                but found it horrible [very bitter]. Later, people began to add [extra] things to it - milk, walnuts, dried apple, other 
                things - and it slowly grew on them.<sup style='font-style: normal'>4</sup></div></div>
                Unlike milk teas from the West, like English tea, Tajik milk tea is more than just a beverage — it serves as a substantial 
                meal typically enjoyed for breakfast or as a light dinner.<br>
                The preparation of shirchoy involves the combination of milk and tea, but it doesn't stop there. Additional ingredients are added to enhance its flavor and texture. 
                These may include pieces of flatbread (usually stale bread is repurposed), butter or ghee, dried apple slices, mulberry, almond leaves, walnuts, and rose hip flowers.<sup>2,4</sup>
                Shirchoy can incorporate unconventional ingredients that are not typically associated with milk-based meals, including small amounts of pepper (seasoning), 
                <div class="tooltip">raw onion slices<span class="tooltiptext" style='width: 12rem; margin-left: -6rem;'>Only in Samarkand</span></div>
                or even melted <div class="tooltip">sheep tail fat
                <span class="tooltiptext" style='width: 17rem; margin-left: -8.5rem;'>Mainly in Samarkand, Bukhara, Fergana and Northern Tajikistan</span></div>.<sup>2</sup>
                Also, shirchoy is occasionally known by different names that highlight additional ingredients beyond tea and milk. 
                It is predominantly a salty dish, alternatively called <span class='termSpan'>"shürchoy,"</span> derived from the Tajiki-Persian word for salty, "shür."
                In the region of Badakhshan, a flavorful variation of shirchoy called <span class='termSpan'>"ghuz-choy"</span> is prepared, featuring ground walnuts as one
                of its key ingredients.<sup>4</sup><br>
                The specific ingredients in shirchoy can vary based on the local climate and preferences. For instance, mountainous communities often incorporate ghee
                or cream into their shirchoy, providing them with higher-calorie sustenance to endure the harsh and cold weather. Given the variety of ingredients used in shirchoy, 
                it can be classified as a milk-based "soup" mainly served in bowls or deep wooden plates.<br>
                Interestingly, despite being a liquid dish, shirchoy is traditionally consumed with hands. The pieces of bread, once soaked in milk, are eaten by hand, 
                and the remaining liquid is drunk from the bowl.<sup>5</sup> This approach allows the bread to serve a dual purpose. While urban Tajiks tend to enjoy shirchoy 
                primarily during the winter months, mountain communities such as the Pamiri people enjoy it year-round and multiple times a day, owing to their high-altitude environment.<sup>2</sup>`,
            ru: `<span class='termSpan'>Ширчой</span> — традиционное блюдо, которое готовят в разных странах Центральной Азии, в том числе в Таджикистане. Его название «ширчой» происходит 
                от сочетания двух таджикско-персидских слов: <span class='termSpan'>«шир»</span>, что означает молоко, и <span class='termSpan'>«чой»</span>, что означает чай.<sup>1</sup>
                Конкретное региональное или историческое происхождение ширчоя остается неопределенным. Однако наиболее подробное описание блюда можно найти в трудах таджикского ученого XIX века Возеха.<sup>1,2</sup>
                Можно предположить, что это блюдо что это блюдо начали готовить еще в середине VIII века, когда чай был завезен в Среднюю Азию из Китая.<sup>3</sup>
                Кроме того, у памирцев есть легенда о создании самого первого ширчоя:
                <div class='quoteContainer'><div class='quoteSymbol'></div><div class='quoteWrapper'>
                Однажды люди вернулись в нашу деревню ... [и] принесли с собой листья ... Мы вскипятили большую кастрюлю с водой и бросили в нее весь чай, 
                а затем пригласили жителей деревни пить его. Люди пробовали это..., но находили это ужасным [очень горьким]. Позже люди стали добавлять в него [дополнительные] вещи 
                [ингредиенты] — молоко, грецкие орехи, сушеное яблоко, другие вещи — и оно им постепенно начало нравиться.<sup style='font-style: normal'>4</sup>
                <div style='font-style: normal; font-size: 1.1rem;'>*Дословный перевод с английского.</div></div></div>
                В отличие от чая с молоком с Запада, такого как английский чай, таджикский чай с молоком это больше, чем просто напиток — он служит сытной едой, которую обычно подают 
                на завтрак или в качестве легкого ужина.<br>
                Приготовление ширчоя предполагает сочетание молока и чая, но на этом не останавливается. Дополнительные ингредиенты добавляются для улучшения вкуса и текстуры. Это могут быть кусочки 
                лепешек, сливочное масло, топленое масло или <div class="tooltip">курдючное сало
                <span class="tooltiptext" style='width: 17rem; margin-left: -8.5rem;'>В основном в Самарканде, Бухаре, Фергане и Северном Таджикистане</span></div>, 
                листья миндаля, грецкие орехи и цветки шиповника.<sup>2</sup> Shirchoy is generally a savory dish, though in certain regions, 
                a hint of pepper or even small amounts of <div class="tooltip">raw onion<span class="tooltiptext" style='width: 12rem; margin-left: -6rem;'>Only in Samarkand</span></div><sup>2</sup>
                may be added, leading to its alternate name <span class='termSpan'>"shürchoy,"</span> derived from the Tajiki-Persian word for salty, "shür."<br>
                The specific ingredients in shirchoy can vary based on the local climate and preferences. For instance, mountainous communities often incorporate ghee
                or cream into their shirchoy, providing them with higher-calorie sustenance to endure the harsh and cold weather. Consequently, shirchoy can be 
                considered a milk-based "soup" traditionally served in bowls or deep wooden plates.<br>
                Interestingly, despite being a liquid dish, shirchoy is traditionally consumed with hands. The pieces of bread, once soaked in milk, are eaten by hand, 
                and the remaining liquid is drunk from the bowl.<sup>5</sup> This approach allows the bread to serve a dual purpose. While urban Tajiks tend to enjoy shirchoy 
                primarily during the winter months, mountain communities such as the Pamiri people enjoy it year-round, owing to their high-altitude environment.<sup>2</sup>`,
            kh: `<span class='termSpan'>شیرچوی</span>`,
            tj: `<span class='termSpan'>Ширчой</span> таомест, ки дар кишварҳои мухталифи Осиёи Миёна ва ҳамчунин 
                дар Тоҷикистон тайёр карда мешавад. Номи "ширчой" аз ду калимаи тоҷикӣ-форсии 
                <span class='termSpan'>"шир"</span> ва <span class='termSpan'>"чой"</span> гирифта 
                шудааст. Нисбат ба ширчойҳое, ки махсусан дар кишварҳои Ғарб (масалан чойи англисӣ) омода мекунанд, ширчойи тоҷикӣ камтар фарқ 
                мекунад. Ширчойи тоҷикӣ ин ғизои пурра аст, ки ҳамчун субҳона ва ё шоми сабук истеъмол карда мешавад. Ба ғайр аз ширу чой 
                ба он порчаҳои нон, равғани зарди сӯхта ё ин ки равғани <div class="tooltip">думбаи обкардашуда
                <span class="tooltiptext" style='width: 18rem; margin-left: -10rem;'>Асосан дар Самарқанд, Бухоро, Фарғона ва вилояти Суғд</span></div>, 
                барги бодом, чормағз ва гулҳои хуч (шиповник) меандозанд. Вобаста аз хости хонавода, шакар ё намак, ва баъзан мурч низ метавонанд илова кунанд. 
                Намуди намакдораш бо номи 
                <span class='termSpan'>"шӯрчой"</span> ҳам маъруф аст (аз вожаи тоҷикӣ-форсии шӯр). 
                Маҳсулоти ширчой аз обу ҳаво вобаста аст, масалан мардуми кӯҳистон бештар равған ё ҳатто қаймоқ илова мекунанд, 
                чунки барои тобоварӣ ба обу ҳавои сард ба хӯрокҳои серкалория ниёз доранд. Аз ин рӯ, ширчойро "шӯрбо"-и ширӣ ҳисоб кардан 
                мумкин аст ва онро асосан дар коса ё табақҳои чуқури чӯбӣ мекашанд. Аҳолии шаҳрӣ онро бисёртар дар фасли зимистон 
                истеъмол мекунад, вале ҷамоаҳои кӯҳӣ, ба мисли помириҳо, аз ширчой тамоми сол лаззат мебаранд.`
        },
        link: '/shirchoy',
        contains: ['dairy', 'gluten', 'nuts'],
        diet: ["veg"],
        containsLang: {ru: 'Содержит', us: 'Contains', tj: 'Дорад', kh: ''},
        dietLang: {us: "Diet", ru: "Диета", tj: "Парҳез", kh: ""},
        dietLabels: [
            {us: 'Vegetarian', ru: 'Вегетарианская', tj: 'Гиёҳхорӣ', kh: 'گیاه خواری'},
        ],
        ingredientsLang: {ru: 'Ингредиенты', us: 'Ingredients', tj: 'Маҳсулот', kh: ''},
        directionsLang: {ru: 'Приготовление', us: 'Directions', tj: 'Тарзи омодакунӣ', kh: ''},
        referencesLang: {ru: 'Литература', us: 'References', tj: 'Адабиёт', kh: ''},
        references: {
            us: ['Vozeh, Qori Rahmatullo. کانی لاززات و خانی نعمت [Source of pleasure and table spread of blessings]. Bukhara. 1880 - 1881.',
                'Shovalieva, Mumina. "История кулинарной культуры таджикского народа" ["The history of the culinary culture of the Tajik people"]. PhD dissertation, (A. Donish Institute of History, Archeology and Ethnography, 2019, pp. 97 - 98).', 
                'N. Ershov, “Food”, Tajiks of Karategin and Darvas, Issue 3, p. 290, 1976.',
                'van Oudenhoven, Frederik and Haider, Jamila. With Our Own Hands: A Celebration of Food and Life in the Pamir Mountains of Afghanistan and Tadjikistan. LM Publishers, 2015, p. 599.',
                'Kislyakova, N. A. and Pisarchik, A. K. Таджики Каратегина и Дарваза (Вып. 2) [Tajiks of Karategin and Darvaz (Issue 2)]. Dushanbe, "Donish" publishing house, 1970, p. 256.'
            ],
            ru: ['Возех, Кори Рахматулло. کانی لاززات و خانی نعمت [Источник наслаждения и скатерть благ]. Бухара. 1880 - 1881.',
                'Шовалиева, Мумина. "История кулинарной культуры таджикского народа". дис. канд. ист. наук, (Институт истории, археологии и этнографии им. А.Дониша, 2019, с. 97 - 98).',
            ],
            tj: ['Возеҳ, Қорӣ Раҳматулло. کانی لاززات و خانی نعمت [Кони лаззат ва хони неъмат]. Бухоро. 1880 - 1881.',
                'ван Оуденҳовен, Фредерик ва Ҳайдар, Ҷамила. Бо дастони худ: ҷашни таъом ва зиндагӣ дар кӯҳистони Помири Афғонистон ва Тоҷикистон, 2015, с. 599.',
            ],
            kh: ["1. here", "2. here 2"],
        },
        labels: [
            {us: 'Dairy', ru: 'Молоко', tj: 'Шир', kh: 'شیر'},
            {us: 'Gluten', ru: 'Клейковина', tj: 'Глютен', kh: 'گلوتن'},
            {us: 'Nuts', ru: 'Орехи', tj: 'Чормағз', kh: 'آجیل'}
        ],
        ingredients: {
            us: ["3 cups milk", "2 Tbsps black tea", "1 loaf baguette", "&#189 cup chopped walnuts", "1 tsp ghee", "2 tsps sugar"],
            ru: ["3 стакана молока", "2 c.л. чёрного чая", "1 лепёшка", "&#189 стакана измельченных грецких орехов", "1 ч.л. топлёного масла", "2 ч.л. cахара"],
            tj: ["3 стакан шир", "2 қошуқи калон чойи сиёҳ", "1-то нон", "&#189 стакан измельченных грецких орехов", "1 қошуқча равғани зард", "2 қошуқча шакар"],
            kh: ["3 стакана молока", "2 чёрного чая", ""],
        },
        directions: {
            us: ["1. Boil the water in a pot over medium heat.", "2. Add the black tea leaves and simmer for 10-15 minutes, stirring occasionally.", "3. Strain the tea leaves and return the tea to the pot.", "5. Add the walnuts, milk, and any other spices and bring the mixture to a boil, stirring constantly.", "6. Add salt to taste.", "7. Simmer the tea for another 5 minutes, stirring occasionally."],
            ru: ["Pour the water into a pot and bring it to boil", "Add the tea and let it seap until the color is released (around 2-3 min)", "Pour in the milk and let everything boil for another 5 min"],
            tj: ["Pour the water into a pot and bring it to boil", "Add the tea and let it seap until the color is released (around 2-3 min)", "Pour in the milk and let everything boil for another 5 min"],
            kh: ["Pour the water into a pot and bring it to boil", "Add the tea and let it seap until the color is released (around 2-3 min)", "Pour in the milk and let everything boil for another 5 min"],
        },
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
