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
            us: `<span style='font-weight: bold; color: black;'>Shirchoy</span> is a meal prepared in various countries in 
                Central Asia, including Tajikistan. The name "shirchoy" is derived from two Tajiki-Persian words: 
                <span style='font-weight: bold; color: black;'>"shir,"</span> which means milk, and 
                <span style='font-weight: bold; color: black;'>"choy"</span> - tea. Unlike the milk teas prepared in the West, 
                such as English tea, Tajik milk tea is a substantial meal, which can be consumed as a breakfast or a light dinner. 
                In addition to milk and tea, people add flatbread pieces, ghee or <div class="tooltip">sheep tail fat
                <span class="tooltiptext" style='width: 18rem; margin-left: -10rem;'>Mainly in Samarkand, Bukhara, Fergana and Northern Tajikistan</span></div>, 
                almond leaves, walnuts, and rose hip flowers. Depending on personal preference, sugar or salt, and sometimes even pepper is added. The salty version is known 
                as <span style='font-weight: bold; color: black;'>"shürchoy"</span> ("shür" is derived from Tajiki-Persian - salty). 
                The shirchoy ingredients vary based on the climate, such as the addition of ghee or even cream being more 
                common among mountainous peoples, who need a high-calorie food to help them endure the harsh and cold weather. 
                Therefore, shirchoy can be seen as a milk-based "soup" typically served in a bowl or on deep wooden plates. Urban 
                Tajiks mainly consume it during winter, while mountain communities, such as the Pamiri people, enjoy it year-round.`,
            ru: `<span style='font-weight: bold; color: black;'>Ширчой</span> это блюдо, которое готовят в разных странах Центральной 
                Азии, в том числе в Таджикистане. Название «ширчой» образовано от двух таджико-персидских слов: 
                <span style='font-weight: bold; color: black;'>«шир»</span>, что означает молоко, и 
                <span style='font-weight: bold; color: black;'>«чой»</span> — чай. В отличие от чаев с молоком, приготавливающихся на Западе, таких 
                как английский чай, таджикский чай с молоком — это сытная еда, которую можно употреблять в качестве завтрака или легкого ужина. 
                В дополнение к молоку и чаю добавляют кусочки лепёшек, топлёное сливочное или 
                <div class="tooltip">курдючное <span class="tooltiptext" style='width: 18rem; margin-left: -10rem;'>В основном в Самарканде, Бухаре, Фергане и Северном Таджикистане</span></div>
                масло, листья миндаля, грецкие орехи, и цветки шиповника. В зависимости от личных предпочтений можно добавить еще сахар или соль, а иногда и перец. Соленый вариант 
                также известен как <span style='font-weight: bold; color: black;'>«шурчой»</span> («шур» происходит от таджико-персидского — соленый).  
                Ингредиенты ширчоя варьируются в зависимости от климата, например, добавление топлёного масла или даже сливок более распространено 
                среди горцев, которым нужна высококалорийная еда, чтобы выдержать суровый климат. Поэтому ширчой можно считать 
                молочным «супом», который обычно подают в миске или на глубоких деревянных тарелках. Городское население потребляет его в основном 
                зимой, тогда как горные общины, такие как памирцы, наслаждаются им круглый год.`,
            kh: `<span style='font-weight: bold; color: black;'>شیرچوی</span>`,
            tj: `<span style='font-weight: bold; color: black;'>Ширчой</span> таомест, ки дар кишварҳои мухталифи Осиёи Миёна ва ҳамчунин 
                дар Тоҷикистон тайёр карда мешавад. Номи "ширчой" аз ду калимаи тоҷикӣ-форсии 
                <span style='font-weight: bold; color: black;'>"шир"</span> ва <span style='font-weight: bold; color: black;'>"чой"</span> гирифта 
                шудааст. Нисбат ба ширчойҳое, ки махсусан дар кишварҳои Ғарб (масалан чойи англисӣ) омода мекунанд, ширчойи тоҷикӣ камтар фарқ 
                мекунад. Ширчойи тоҷикӣ ин ғизои пурра аст, ки ҳамчун субҳона ва ё шоми сабук истеъмол карда мешавад. Ба ғайр аз ширу чой 
                ба он порчаҳои нон, равғани зарди сӯхта ё ин ки равғани <div class="tooltip">дунбаи обкардашуда
                <span class="tooltiptext" style='width: 18rem; margin-left: -10rem;'>Асосан дар Самарқанд, Бухоро, Фарғона ва вилояти Суғд</span></div>, 
                барги бодом, чормағз ва гулҳои хуч (шиповник) меандозанд. Вобаста аз хости хонавода, шакар ё намак, ва баъзан мурч низ метавонанд илова кунанд. 
                Намуди намакдораш бо номи 
                <span style='font-weight: bold; color: black;'>"шӯрчой"</span> ҳам маъруф аст (аз вожаи тоҷикӣ-форсии шӯр). 
                Маҳсулоти ширчой аз обу ҳаво вобаста аст, масалан мардуми кӯҳистон бештар равған ё ҳатто қаймоқ илова мекунанд, 
                чунки барои тобоварӣ ба обу ҳавои сард ба хӯрокҳои серкалория ниёз доранд. Аз ин рӯ, ширчойро "шӯрбо"-и ширӣ ҳисоб кардан 
                мумкин аст ва онро асосан дар коса ё табақҳои чуқури чӯбӣ мекашанд. Аҳолии шаҳрӣ онро бисёртар дар фасли зимистон 
                истеъмол мекунад, вале ҷамоаҳои кӯҳӣ, ба мисли помириҳо, аз ширчой тамоми сол лаззат мебаранд.`
        },
        link: '/shirchoy',
        contains: ['dairy', 'gluten', 'nuts'],
        containsLang: {ru: 'Содержит', us: 'Contains', tj: 'Дорад', kh: ''},
        ingredientsLang: {ru: 'Ингредиенты', us: 'Ingredients', tj: 'Маҳсулот', kh: ''},
        directionsLang: {ru: 'Приготовление', us: 'Directions', tj: 'Тарзи омодакунӣ', kh: ''},
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
