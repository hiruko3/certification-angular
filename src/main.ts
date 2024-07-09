import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { setupWorker } from 'msw/browser';
import { http, HttpResponse } from 'msw';

const handlers = [
  http.get('/cockails', ({ request, params, cookies }) => {
    return HttpResponse.json([
      {
        "id": "12560",
        "name": "Afterglow",
        "isAlcoholic": false,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/vuquyv1468876052.jpg",
        "instructions": "Mix. Serve over ice.",
        "ingredients": [
          "Grenadine",
          "Orange juice",
          "Pineapple juice"
        ]
      },
      {
        "id": "17141",
        "name": "Smut",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/rx8k8e1504365812.jpg",
        "instructions": "Throw it all together and serve real cold.",
        "ingredients": [
          "Red wine",
          "Peach schnapps",
          "Pepsi Cola",
          "Orange juice"
        ]
      },
      {
        "id": "17840",
        "name": "Affinity",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/wzdtnn1582477684.jpg",
        "instructions": "In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
        "ingredients": [
          "Scotch",
          "Sweet Vermouth",
          "Dry Vermouth",
          "Orange bitters"
        ]
      },
      {
        "id": "16990",
        "name": "Sweet Tooth",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/j6rq6h1503563821.jpg",
        "instructions": "Put 2 shots Godiva Liquour into a glass, add as much or as little milk as you would like.",
        "ingredients": [
          "Godiva liqueur",
          "Milk"
        ]
      },
      {
        "id": "12190",
        "name": "Sherry Flip",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/qrryvq1478820428.jpg",
        "instructions": "Shake all ingredients (except nutmeg) with ice and strain into a whiskey sour glass. Sprinkle nutmeg on top and serve.",
        "ingredients": [
          "Sherry",
          "Light cream",
          "Powdered sugar",
          "Egg",
          "Nutmeg"
        ]
      },
      {
        "id": "11023",
        "name": "Almeria",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/rwsyyu1483388181.jpg",
        "instructions": "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
        "ingredients": [
          "Dark rum",
          "Kahlua",
          "Egg white"
        ]
      },
      {
        "id": "11021",
        "name": "Allegheny",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/uwvyts1483387934.jpg",
        "instructions": "Shake all ingredients (except lemon peel) with ice and strain into a cocktail glass. Top with the twist of lemon peel and serve.",
        "ingredients": [
          "Dry Vermouth",
          "Bourbon",
          "Blackberry brandy",
          "Lemon juice",
          "Lemon peel"
        ]
      },
      {
        "id": "13501",
        "name": "ABC",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg",
        "instructions": "Layered in a shot glass.",
        "ingredients": [
          "Amaretto",
          "Baileys irish cream",
          "Cognac"
        ]
      },
      {
        "id": "12130",
        "name": "Scooter",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/twuptu1483388307.jpg",
        "instructions": "Shake all ingredients well with cracked ice, strain into a cocktail glass, and serve.",
        "ingredients": [
          "Brandy",
          "Amaretto",
          "Light cream"
        ]
      },
      {
        "id": "17836",
        "name": "Acapulco",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/il9e0r1582478841.jpg",
        "instructions": "Combine and shake all ingredients (except mint) with ice and strain into an old-fashioned glass over ice cubes. Add the sprig of mint and serve.",
        "ingredients": [
          "Light rum",
          "Triple sec",
          "Lime juice",
          "Sugar",
          "Egg white"
        ]
      },
      {
        "id": "12127",
        "name": "Sazerac",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/vvpxwy1439907208.jpg",
        "instructions": "Rinse a chilled old-fashioned glass with the absinthe, add crushed ice, and set it aside. Stir the remaining ingredients over ice and set it aside. Discard the ice and any excess absinthe from the prepared glass, and strain the drink into the glass. Add the lemon peel for garnish.",
        "ingredients": [
          "Ricard",
          "Sugar",
          "Peychaud bitters",
          "Water",
          "Bourbon"
        ]
      },
      {
        "id": "15941",
        "name": "Americano",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/709s6m1613655124.jpg",
        "instructions": "Pour the Campari and vermouth over ice into glass, add a splash of soda water and garnish with half orange slice.",
        "ingredients": [
          "Campari",
          "Sweet Vermouth",
          "Lemon peel",
          "Orange peel"
        ]
      },
      {
        "id": "13024",
        "name": "Sweet Sangria",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/uqqvsp1468924228.jpg",
        "instructions": "Dissolve the sugar in hot water and cool. Peel the citrus fruits and break into wedges. Mix the wine, sugar syrup, fruit, and Fresca in a pitcher and put in the fridge for a few hours. Serve in tall glasses with a straw.",
        "ingredients": [
          "Red wine",
          "Sugar",
          "Water",
          "Apple",
          "Orange"
        ]
      },
      {
        "id": "12756",
        "name": "Autodafé",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/7dkf0i1487602928.jpg",
        "instructions": "Mix and fill up with soda water. Drunk by finns on a sunny day any time of the year and day.",
        "ingredients": [
          "Vodka",
          "Lime juice",
          "Soda water"
        ]
      },
      {
        "id": "17835",
        "name": "Abilene",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/smb2oe1582479072.jpg",
        "instructions": "Pour all of the ingredients into a highball glass almost filled with ice cubes. Stir well.",
        "ingredients": [
          "Dark rum",
          "Peach nectar",
          "Orange juice"
        ]
      },
      {
        "id": "12724",
        "name": "Sweet Bananas",
        "isAlcoholic": false,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/sxpcj71487603345.jpg",
        "instructions": "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.",
        "ingredients": [
          "Milk",
          "Banana",
          "Honey"
        ]
      },
      {
        "id": "15266",
        "name": "Avalon",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/3k9qic1493068931.jpg",
        "instructions": "Fill a tall glass with ice. Layer the Finlandia Vodka, lemon and apple juices, Pisang Ambon, and top up with lemonade. Stir slightly and garnish with a spiralled cucumber skin and a red cherry. The cucumber provides zest and looks attractive. This drink, created by Timo Haimi, took first prize in the 1991 Finlandia Vodka Long Drink Competition.",
        "ingredients": [
          "Vodka",
          "Pisang Ambon",
          "Apple juice",
          "Lemon juice",
          "Lemonade"
        ]
      },
      {
        "id": "12256",
        "name": "Sol Y Sombra",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/3gz2vw1503425983.jpg",
        "instructions": "Shake ingredients with ice, strain into a brandy snifter, and serve. (The English translation of the name of this drink is \"Sun and Shade\", and after sampling this drink, you'll understand why. Thanks, Kirby.)",
        "ingredients": [
          "Brandy",
          "Anisette"
        ]
      },
      {
        "id": "12188",
        "name": "Sherry Eggnog",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/xwrpsv1478820541.jpg",
        "instructions": "Shake sherry, powdered sugar, and egg with ice and strain into a collins glass. Fill with milk and stir. Sprinkle nutmeg on top and serve.",
        "ingredients": [
          "Sherry",
          "Powdered sugar",
          "Egg",
          "Milk",
          "Nutmeg"
        ]
      },
      {
        "id": "17215",
        "name": "Spritz",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/j9evx11504373665.jpg",
        "instructions": "Build into glass over ice, garnish and serve.",
        "ingredients": [
          "Prosecco",
          "Campari",
          "Soda Water"
        ]
      },
      {
        "id": "16311",
        "name": "Applejack",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/sutyqp1479209062.jpg",
        "instructions": "Add all ingredients into mixing glass, chill and strain into cocktail glass",
        "ingredients": [
          "Jack Daniels",
          "Midori melon liqueur",
          "Sour mix"
        ]
      },
      {
        "id": "17228",
        "name": "Addison",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/yzva7x1504820300.jpg",
        "instructions": "Shake together all the ingredients and strain into a cold glass.",
        "ingredients": [
          "Gin",
          "Vermouth"
        ]
      },
      {
        "id": "15106",
        "name": "Apello",
        "isAlcoholic": false,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/uptxtv1468876415.jpg",
        "instructions": "Stirr. Grnish with maraschino cherry.",
        "ingredients": [
          "Orange juice",
          "Grapefruit juice",
          "Apple juice",
          "Maraschino cherry"
        ]
      },
      {
        "id": "12196",
        "name": "Sidecar",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/x72sik1606854964.jpg",
        "instructions": "Pour all ingredients into cocktail shaker filled with ice. Shake well and strain into cocktail glass.",
        "ingredients": [
          "Cognac",
          "Cointreau",
          "Lemon juice"
        ]
      },
      {
        "id": "11046",
        "name": "Applecar",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/sbffau1504389764.jpg",
        "instructions": "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
        "ingredients": [
          "Applejack",
          "Triple sec",
          "Lemon juice"
        ]
      },
      {
        "id": "17180",
        "name": "Aviation",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/trbplb1606855233.jpg",
        "instructions": "Add all ingredients into cocktail shaker filled with ice. Shake well and strain into cocktail glass. Garnish with a cherry.",
        "ingredients": [
          "Gin",
          "lemon juice",
          "maraschino liqueur"
        ]
      },
      {
        "id": "12308",
        "name": "Stone Sour",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/vruvtp1472719895.jpg",
        "instructions": "Shake all ingredients with ice, strain into a chilled whiskey sour glass, and serve.",
        "ingredients": [
          "Apricot brandy",
          "Orange juice",
          "Sweet and sour"
        ]
      },
      {
        "id": "16985",
        "name": "Shot-gun",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/2j1m881503563583.jpg",
        "instructions": "Pour one part Jack Daneils and one part Jim Beam into shot glass then float Wild Turkey on top.",
        "ingredients": [
          "Jim Beam",
          "Jack Daniels",
          "Wild Turkey"
        ]
      },
      {
        "id": "16273",
        "name": "Shark Attack",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/uv96zr1504793256.jpg",
        "instructions": "Mix lemonade and water according to instructions on back of can. If the instructions say to add 4 1/3 cans of water do so. Mix into pitcher. Add 1 1/2 cup of Vodka (Absolut). Mix well. Pour into glass of crushed ice. Excellent!",
        "ingredients": [
          "Lemonade",
          "Water",
          "Vodka"
        ]
      },
      {
        "id": "17837",
        "name": "Adam",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/v0at4i1582478473.jpg",
        "instructions": "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
        "ingredients": [
          "Dark rum",
          "Lemon juice",
          "Grenadine"
        ]
      },
      {
        "id": "15182",
        "name": "After sex",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/xrl66i1493068702.jpg",
        "instructions": "Pour the vodka and creme over some ice cubes in a tall glass and fill up with juice. to make it beuty full make the top of the glass with a grenadine and sugar",
        "ingredients": [
          "Vodka",
          "Creme de Banane",
          "Orange juice"
        ]
      },
      {
        "id": "15184",
        "name": "San Francisco",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/szmj2d1504889961.jpg",
        "instructions": "Take a tall glass and put in a few ice cubes, fill the vodka over it and fill with juice then the \"creme\", to end fill in the grenadine but very carefully at the side of the glass so it will lay down in the bottom. garnish with orange and strawberry.",
        "ingredients": [
          "Vodka",
          "Creme de Banane",
          "Grenadine",
          "Orange juice"
        ]
      },
      {
        "id": "13162",
        "name": "Afternoon",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/vyrurp1472667777.jpg",
        "instructions": "Build into a suiting glass, with no ice. Cream on top if wanted. Served directly.",
        "ingredients": [
          "Kahlua",
          "Baileys irish cream",
          "Frangelico",
          "Coffee",
          "Cream"
        ]
      },
      {
        "id": "178349",
        "name": "Snowday",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/4n1ipk1614009624.jpg",
        "instructions": "Stir all ingredients with ice. Strain into a chilled rocks glass over fresh ice. Express orange peel over drink and garnish.",
        "ingredients": [
          "Vodka",
          "Amaro Montenegro",
          "Ruby Port",
          "Blood Orange",
          "Angostura Bitters"
        ]
      },
      {
        "id": "17222",
        "name": "A1",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg",
        "instructions": "Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass.",
        "ingredients": [
          "Gin",
          "Grand Marnier",
          "Lemon Juice",
          "Grenadine"
        ]
      },
      {
        "id": "12158",
        "name": "Scotch Sour",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/0dnb6k1504890436.jpg",
        "instructions": "Shake scotch, juice of lime, and powdered sugar with ice and strain into a whiskey sour glass. Decorate with 1/2 slice lemon, top with the cherry, and serve.",
        "ingredients": [
          "Scotch",
          "Lime",
          "Powdered sugar",
          "Lemon",
          "Cherry"
        ]
      },
      {
        "id": "17193",
        "name": "Stinger",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/2ahv791504352433.jpg",
        "instructions": "Pour in a mixing glass with ice, stir and strain into a cocktail glass. May also be served on rocks in a rocks glass.",
        "ingredients": [
          "Brandy",
          "White Creme de Menthe"
        ]
      },
      {
        "id": "17225",
        "name": "Ace",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/l3cd7f1504818306.jpg",
        "instructions": "Shake all the ingredients in a cocktail shaker and ice then strain in a cold glass.",
        "ingredients": [
          "Gin",
          "Grenadine",
          "Heavy cream",
          "Milk",
          "Egg White"
        ]
      },
      {
        "id": "13020",
        "name": "Sangria",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/xrvxpp1441249280.jpg",
        "instructions": "Mix all together in a pitcher and refrigerate. Add cloves and cinnamon sticks to taste. Serve in wine glasses.",
        "ingredients": [
          "Red wine",
          "Sugar",
          "Orange juice",
          "Lemon juice",
          "Cloves"
        ]
      },
      {
        "id": "13377",
        "name": "Sea breeze",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/7rfuks1504371562.jpg",
        "instructions": "Build all ingredients in a highball glass filled with ice. Garnish with lime wedge.",
        "ingredients": [
          "Vodka",
          "Cranberry juice",
          "Grapefruit juice"
        ]
      },
      {
        "id": "12107",
        "name": "Salty Dog",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/4vfge01504890216.jpg",
        "instructions": "Pour all ingredients over ice cubes in a highball glass. Stir well and serve. (Vodka may be substituted for gin, if preferred.)",
        "ingredients": [
          "Grapefruit juice",
          "Gin",
          "Salt"
        ]
      },
      {
        "id": "178322",
        "name": "Spice 75",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/0108c41576797064.jpg",
        "instructions": "Gently warm 60g golden caster sugar in a pan with 30ml water and 1 tbsp allspice. Cook gently until the sugar has dissolved, then leave the mixture to cool. Strain through a sieve lined with a coffee filter (or a double layer of kitchen paper).\r\n\r\nPour 60ml of the spiced syrup into a cocktail shaker along with 200ml rum and 90ml lime juice. Shake with ice and strain between six flute glasses. Top up with 600ml champagne and garnish each with an orange twist.",
        "ingredients": [
          "Sugar",
          "Allspice",
          "Rum",
          "Lime Juice",
          "Champagne"
        ]
      },
      {
        "id": "13938",
        "name": "AT&T",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/rhhwmp1493067619.jpg",
        "instructions": "Pour Vodka and Gin over ice, add Tonic and Stir",
        "ingredients": [
          "Absolut Vodka",
          "Gin",
          "Tonic water"
        ]
      },
      {
        "id": "17839",
        "name": "Affair",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/h5za6y1582477994.jpg",
        "instructions": "Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.",
        "ingredients": [
          "Strawberry schnapps",
          "Orange juice",
          "Cranberry juice",
          "Club soda"
        ]
      },
      {
        "id": "17833",
        "name": "A. J.",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/l74qo91582480316.jpg",
        "instructions": "Shake ingredients with ice, strain into a cocktail glass, and serve.",
        "ingredients": [
          "Applejack",
          "Grapefruit juice"
        ]
      },
      {
        "id": "12162",
        "name": "Screwdriver",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/8xnyke1504352207.jpg",
        "instructions": "Mix in a highball glass with ice. Garnish and serve.",
        "ingredients": [
          "Vodka",
          "Orange juice"
        ]
      },
      {
        "id": "14610",
        "name": "ACID",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/xuxpxt1479209317.jpg",
        "instructions": "Poor in the 151 first followed by the 101 served with a Coke or Dr Pepper chaser.",
        "ingredients": [
          "151 proof rum",
          "Wild Turkey"
        ]
      },
      {
        "id": "14195",
        "name": "Snowball",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/7ibfs61504735416.jpg",
        "instructions": "Place one ice cube in the glass and add 1 1/2 oz of Advocaat. Fill up the glass with lemonade and decorate with a slice of lemon. Serve at once.",
        "ingredients": [
          "Advocaat",
          "Lemonade",
          "Lemon",
          "Ice"
        ]
      },
      {
        "id": "15226",
        "name": "Space Odyssey",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/vxtjbx1504817842.jpg",
        "instructions": "Fill glass with ice and add shots of Bacardi and Malibu. Add splash of pineapple juice and top with orange juice. Add grenadine for color and garnish with cherries.",
        "ingredients": [
          "151 proof rum",
          "Malibu rum",
          "Pineapple juice",
          "Orange juice",
          "Grenadine"
        ]
      },
      {
        "id": "11014",
        "name": "Alexander",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/0clus51606772388.jpg",
        "instructions": "Shake all ingredients with ice and strain contents into a cocktail glass. Sprinkle nutmeg on top and serve.",
        "ingredients": [
          "Gin",
          "Creme de Cacao",
          "Light cream",
          "Nutmeg"
        ]
      }
    ]);
  }),
  http.get('/cockails/:id', ({ params }) => {
    const options = {
      "11014": {
        "id": "11014",
        "name": "Alexander",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/0clus51606772388.jpg",
        "ingredients": [ "Gin", "Creme de Cacao", "Light cream", "Nutmeg" ],
        "instructions": "Shake all ingredients with ice and strain contents into a cocktail glass. Sprinkle nutmeg on top and serve."
      },
      "11021": {
        "id": "11021",
        "name": "Allegheny",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/uwvyts1483387934.jpg",
        "ingredients": [ "Dry Vermouth", "Bourbon", "Blackberry brandy", "Lemon juice", "Lemon peel" ],
        "instructions": "Shake all ingredients (except lemon peel) with ice and strain into a cocktail glass. Top with the twist of lemon peel and serve."
      },
      "11023": {
        "id": "11023",
        "name": "Almeria",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/rwsyyu1483388181.jpg",
        "ingredients": [ "Dark rum", "Kahlua", "Egg white" ],
        "instructions": "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass."
      },
      "11046": {
        "id": "11046",
        "name": "Applecar",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/sbffau1504389764.jpg",
        "ingredients": [ "Applejack", "Triple sec", "Lemon juice" ],
        "instructions": "Shake all ingredients with ice, strain into a cocktail glass, and serve."
      },
      "12107": {
        "id": "12107",
        "name": "Salty Dog",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/4vfge01504890216.jpg",
        "ingredients": [ "Grapefruit juice", "Gin", "Salt" ],
        "instructions": "Pour all ingredients over ice cubes in a highball glass. Stir well and serve. (Vodka may be substituted for gin, if preferred.)"
      },
      "12127": {
        "id": "12127",
        "name": "Sazerac",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/vvpxwy1439907208.jpg",
        "ingredients": [ "Ricard", "Sugar", "Peychaud bitters", "Water", "Bourbon" ],
        "instructions": "Rinse a chilled old-fashioned glass with the absinthe, add crushed ice, and set it aside. Stir the remaining ingredients over ice and set it aside. Discard the ice and any excess absinthe from the prepared glass, and strain the drink into the glass. Add the lemon peel for garnish."
      },
      "12130": {
        "id": "12130",
        "name": "Scooter",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/twuptu1483388307.jpg",
        "ingredients": [ "Brandy", "Amaretto", "Light cream" ],
        "instructions": "Shake all ingredients well with cracked ice, strain into a cocktail glass, and serve."
      },
      "12158": {
        "id": "12158",
        "name": "Scotch Sour",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/0dnb6k1504890436.jpg",
        "ingredients": [ "Scotch", "Lime", "Powdered sugar", "Lemon", "Cherry" ],
        "instructions": "Shake scotch, juice of lime, and powdered sugar with ice and strain into a whiskey sour glass. Decorate with 1/2 slice lemon, top with the cherry, and serve."
      },
      "12162": {
        "id": "12162",
        "name": "Screwdriver",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/8xnyke1504352207.jpg",
        "ingredients": [ "Vodka", "Orange juice" ],
        "instructions": "Mix in a highball glass with ice. Garnish and serve."
      },
      "12188": {
        "id": "12188",
        "name": "Sherry Eggnog",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/xwrpsv1478820541.jpg",
        "ingredients": [ "Sherry", "Powdered sugar", "Egg", "Milk", "Nutmeg" ],
        "instructions": "Shake sherry, powdered sugar, and egg with ice and strain into a collins glass. Fill with milk and stir. Sprinkle nutmeg on top and serve."
      },
      "12190": {
        "id": "12190",
        "name": "Sherry Flip",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/qrryvq1478820428.jpg",
        "ingredients": [ "Sherry", "Light cream", "Powdered sugar", "Egg", "Nutmeg" ],
        "instructions": "Shake all ingredients (except nutmeg) with ice and strain into a whiskey sour glass. Sprinkle nutmeg on top and serve."
      },
      "12196": {
        "id": "12196",
        "name": "Sidecar",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/x72sik1606854964.jpg",
        "ingredients": [ "Cognac", "Cointreau", "Lemon juice" ],
        "instructions": "Pour all ingredients into cocktail shaker filled with ice. Shake well and strain into cocktail glass."
      },
      "12256": {
        "id": "12256",
        "name": "Sol Y Sombra",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/3gz2vw1503425983.jpg",
        "ingredients": [ "Brandy", "Anisette" ],
        "instructions": "Shake ingredients with ice, strain into a brandy snifter, and serve. (The English translation of the name of this drink is \"Sun and Shade\", and after sampling this drink, you'll understand why. Thanks, Kirby.)"
      },
      "12308": {
        "id": "12308",
        "name": "Stone Sour",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/vruvtp1472719895.jpg",
        "ingredients": [ "Apricot brandy", "Orange juice", "Sweet and sour" ],
        "instructions": "Shake all ingredients with ice, strain into a chilled whiskey sour glass, and serve."
      },
      "12560": {
        "id": "12560",
        "name": "Afterglow",
        "isAlcoholic": false,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/vuquyv1468876052.jpg",
        "ingredients": [ "Grenadine", "Orange juice", "Pineapple juice" ],
        "instructions": "Mix. Serve over ice."
      },
      "12724": {
        "id": "12724",
        "name": "Sweet Bananas",
        "isAlcoholic": false,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/sxpcj71487603345.jpg",
        "ingredients": [ "Milk", "Banana", "Honey" ],
        "instructions": "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up."
      },
      "12756": {
        "id": "12756",
        "name": "Autodafé",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/7dkf0i1487602928.jpg",
        "ingredients": [ "Vodka", "Lime juice", "Soda water" ],
        "instructions": "Mix and fill up with soda water. Drunk by finns on a sunny day any time of the year and day."
      },
      "13020": {
        "id": "13020",
        "name": "Sangria",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/xrvxpp1441249280.jpg",
        "ingredients": [ "Red wine", "Sugar", "Orange juice", "Lemon juice", "Cloves" ],
        "instructions": "Mix all together in a pitcher and refrigerate. Add cloves and cinnamon sticks to taste. Serve in wine glasses."
      },
      "13024": {
        "id": "13024",
        "name": "Sweet Sangria",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/uqqvsp1468924228.jpg",
        "ingredients": [ "Red wine", "Sugar", "Water", "Apple", "Orange" ],
        "instructions": "Dissolve the sugar in hot water and cool. Peel the citrus fruits and break into wedges. Mix the wine, sugar syrup, fruit, and Fresca in a pitcher and put in the fridge for a few hours. Serve in tall glasses with a straw."
      },
      "13162": {
        "id": "13162",
        "name": "Afternoon",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/vyrurp1472667777.jpg",
        "ingredients": [ "Kahlua", "Baileys irish cream", "Frangelico", "Coffee", "Cream" ],
        "instructions": "Build into a suiting glass, with no ice. Cream on top if wanted. Served directly."
      },
      "13377": {
        "id": "13377",
        "name": "Sea breeze",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/7rfuks1504371562.jpg",
        "ingredients": [ "Vodka", "Cranberry juice", "Grapefruit juice" ],
        "instructions": "Build all ingredients in a highball glass filled with ice. Garnish with lime wedge."
      },
      "13501": {
        "id": "13501",
        "name": "ABC",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg",
        "ingredients": [ "Amaretto", "Baileys irish cream", "Cognac" ],
        "instructions": "Layered in a shot glass."
      },
      "13938": {
        "id": "13938",
        "name": "AT&T",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/rhhwmp1493067619.jpg",
        "ingredients": [ "Absolut Vodka", "Gin", "Tonic water" ],
        "instructions": "Pour Vodka and Gin over ice, add Tonic and Stir"
      },
      "14195": {
        "id": "14195",
        "name": "Snowball",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/7ibfs61504735416.jpg",
        "ingredients": [ "Advocaat", "Lemonade", "Lemon", "Ice" ],
        "instructions": "Place one ice cube in the glass and add 1 1/2 oz of Advocaat. Fill up the glass with lemonade and decorate with a slice of lemon. Serve at once."
      },
      "14610": {
        "id": "14610",
        "name": "ACID",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/xuxpxt1479209317.jpg",
        "ingredients": [ "151 proof rum", "Wild Turkey" ],
        "instructions": "Poor in the 151 first followed by the 101 served with a Coke or Dr Pepper chaser."
      },
      "15106": {
        "id": "15106",
        "name": "Apello",
        "isAlcoholic": false,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/uptxtv1468876415.jpg",
        "ingredients": [ "Orange juice", "Grapefruit juice", "Apple juice", "Maraschino cherry" ],
        "instructions": "Stirr. Grnish with maraschino cherry."
      },
      "15182": {
        "id": "15182",
        "name": "After sex",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/xrl66i1493068702.jpg",
        "ingredients": [ "Vodka", "Creme de Banane", "Orange juice" ],
        "instructions": "Pour the vodka and creme over some ice cubes in a tall glass and fill up with juice. to make it beuty full make the top of the glass with a grenadine and sugar"
      },
      "15184": {
        "id": "15184",
        "name": "San Francisco",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/szmj2d1504889961.jpg",
        "ingredients": [ "Vodka", "Creme de Banane", "Grenadine", "Orange juice" ],
        "instructions": "Take a tall glass and put in a few ice cubes, fill the vodka over it and fill with juice then the \"creme\", to end fill in the grenadine but very carefully at the side of the glass so it will lay down in the bottom. garnish with orange and strawberry."
      },
      "15226": {
        "id": "15226",
        "name": "Space Odyssey",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/vxtjbx1504817842.jpg",
        "ingredients": [ "151 proof rum", "Malibu rum", "Pineapple juice", "Orange juice", "Grenadine" ],
        "instructions": "Fill glass with ice and add shots of Bacardi and Malibu. Add splash of pineapple juice and top with orange juice. Add grenadine for color and garnish with cherries."
      },
      "15266": {
        "id": "15266",
        "name": "Avalon",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/3k9qic1493068931.jpg",
        "ingredients": [ "Vodka", "Pisang Ambon", "Apple juice", "Lemon juice", "Lemonade" ],
        "instructions": "Fill a tall glass with ice. Layer the Finlandia Vodka, lemon and apple juices, Pisang Ambon, and top up with lemonade. Stir slightly and garnish with a spiralled cucumber skin and a red cherry. The cucumber provides zest and looks attractive. This drink, created by Timo Haimi, took first prize in the 1991 Finlandia Vodka Long Drink Competition."
      },
      "15941": {
        "id": "15941",
        "name": "Americano",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/709s6m1613655124.jpg",
        "ingredients": [ "Campari", "Sweet Vermouth", "Lemon peel", "Orange peel" ],
        "instructions": "Pour the Campari and vermouth over ice into glass, add a splash of soda water and garnish with half orange slice."
      },
      "16273": {
        "id": "16273",
        "name": "Shark Attack",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/uv96zr1504793256.jpg",
        "ingredients": [ "Lemonade", "Water", "Vodka" ],
        "instructions": "Mix lemonade and water according to instructions on back of can. If the instructions say to add 4 1/3 cans of water do so. Mix into pitcher. Add 1 1/2 cup of Vodka (Absolut). Mix well. Pour into glass of crushed ice. Excellent!"
      },
      "16311": {
        "id": "16311",
        "name": "Applejack",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/sutyqp1479209062.jpg",
        "ingredients": [ "Jack Daniels", "Midori melon liqueur", "Sour mix" ],
        "instructions": "Add all ingredients into mixing glass, chill and strain into cocktail glass"
      },
      "16985": {
        "id": "16985",
        "name": "Shot-gun",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/2j1m881503563583.jpg",
        "ingredients": [ "Jim Beam", "Jack Daniels", "Wild Turkey" ],
        "instructions": "Pour one part Jack Daneils and one part Jim Beam into shot glass then float Wild Turkey on top."
      },
      "16990": {
        "id": "16990",
        "name": "Sweet Tooth",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/j6rq6h1503563821.jpg",
        "ingredients": [ "Godiva liqueur", "Milk" ],
        "instructions": "Put 2 shots Godiva Liquour into a glass, add as much or as little milk as you would like."
      },
      "17141": {
        "id": "17141",
        "name": "Smut",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/rx8k8e1504365812.jpg",
        "ingredients": [ "Red wine", "Peach schnapps", "Pepsi Cola", "Orange juice" ],
        "instructions": "Throw it all together and serve real cold."
      },
      "17180": {
        "id": "17180",
        "name": "Aviation",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/trbplb1606855233.jpg",
        "ingredients": [ "Gin", "lemon juice", "maraschino liqueur" ],
        "instructions": "Add all ingredients into cocktail shaker filled with ice. Shake well and strain into cocktail glass. Garnish with a cherry."
      },
      "17193": {
        "id": "17193",
        "name": "Stinger",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/2ahv791504352433.jpg",
        "ingredients": [ "Brandy", "White Creme de Menthe" ],
        "instructions": "Pour in a mixing glass with ice, stir and strain into a cocktail glass. May also be served on rocks in a rocks glass."
      },
      "17215": {
        "id": "17215",
        "name": "Spritz",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/j9evx11504373665.jpg",
        "ingredients": [ "Prosecco", "Campari", "Soda Water" ],
        "instructions": "Build into glass over ice, garnish and serve."
      },
      "17222": {
        "id": "17222",
        "name": "A1",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg",
        "ingredients": [ "Gin", "Grand Marnier", "Lemon Juice", "Grenadine" ],
        "instructions": "Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass."
      },
      "17225": {
        "id": "17225",
        "name": "Ace",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/l3cd7f1504818306.jpg",
        "ingredients": [ "Gin", "Grenadine", "Heavy cream", "Milk", "Egg White" ],
        "instructions": "Shake all the ingredients in a cocktail shaker and ice then strain in a cold glass."
      },
      "17228": {
        "id": "17228",
        "name": "Addison",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/yzva7x1504820300.jpg",
        "ingredients": [ "Gin", "Vermouth" ],
        "instructions": "Shake together all the ingredients and strain into a cold glass."
      },
      "17833": {
        "id": "17833",
        "name": "A. J.",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/l74qo91582480316.jpg",
        "ingredients": [ "Applejack", "Grapefruit juice" ],
        "instructions": "Shake ingredients with ice, strain into a cocktail glass, and serve."
      },
      "17835": {
        "id": "17835",
        "name": "Abilene",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/smb2oe1582479072.jpg",
        "ingredients": [ "Dark rum", "Peach nectar", "Orange juice" ],
        "instructions": "Pour all of the ingredients into a highball glass almost filled with ice cubes. Stir well."
      },
      "17836": {
        "id": "17836",
        "name": "Acapulco",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/il9e0r1582478841.jpg",
        "ingredients": [ "Light rum", "Triple sec", "Lime juice", "Sugar", "Egg white" ],
        "instructions": "Combine and shake all ingredients (except mint) with ice and strain into an old-fashioned glass over ice cubes. Add the sprig of mint and serve."
      },
      "17837": {
        "id": "17837",
        "name": "Adam",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/v0at4i1582478473.jpg",
        "ingredients": [ "Dark rum", "Lemon juice", "Grenadine" ],
        "instructions": "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass."
      },
      "17839": {
        "id": "17839",
        "name": "Affair",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/h5za6y1582477994.jpg",
        "ingredients": [ "Strawberry schnapps", "Orange juice", "Cranberry juice", "Club soda" ],
        "instructions": "Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve."
      },
      "17840": {
        "id": "17840",
        "name": "Affinity",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/wzdtnn1582477684.jpg",
        "ingredients": [ "Scotch", "Sweet Vermouth", "Dry Vermouth", "Orange bitters" ],
        "instructions": "In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass."
      },
      "178322": {
        "id": "178322",
        "name": "Spice 75",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/0108c41576797064.jpg",
        "ingredients": [ "Sugar", "Allspice", "Rum", "Lime Juice", "Champagne" ],
        "instructions": "Gently warm 60g golden caster sugar in a pan with 30ml water and 1 tbsp allspice. Cook gently until the sugar has dissolved, then leave the mixture to cool. Strain through a sieve lined with a coffee filter (or a double layer of kitchen paper).\r\n\r\nPour 60ml of the spiced syrup into a cocktail shaker along with 200ml rum and 90ml lime juice. Shake with ice and strain between six flute glasses. Top up with 600ml champagne and garnish each with an orange twist."
      },
      "178349": {
        "id": "178349",
        "name": "Snowday",
        "isAlcoholic": true,
        "imageUrl": "https://www.thecocktaildb.com/images/media/drink/4n1ipk1614009624.jpg",
        "ingredients": [ "Vodka", "Amaro Montenegro", "Ruby Port", "Blood Orange", "Angostura Bitters" ],
        "instructions": "Stir all ingredients with ice. Strain into a chilled rocks glass over fresh ice. Express orange peel over drink and garnish."
      }
    }
    // @ts-ignore
    return HttpResponse.json(options[params.id]);
  }),

];

setupWorker(...handlers).start()
  .then(() => bootstrapApplication(AppComponent, appConfig))
  .catch((err) => console.error(err));

