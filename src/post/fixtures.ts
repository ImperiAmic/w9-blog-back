import { PostData, PostStructure } from "./types.js";

const recipe1: PostStructure = {
  _id: "68068eedaad91c08b13ed667",
  publishDate: new Date("2025-04-13T09:00:00.000Z"),
  title: "Instant Pot Mac and Cheese",
  imageUrl: "https://example.com/images/mac-and-cheese.jpg",
  imageAlt: "Creamy mac and cheese",
  tags: ["quick meals", "instant pot", "comfort food"],
  content: `Ingredients:
- 2 cups elbow macaroni
- 4 cups water
- 1 tsp salt
- 2 cups shredded cheddar
- 1/2 cup milk
- 2 tbsp butter

Instructions:
1. Add pasta, water, and salt to the Instant Pot.
2. Cook on high pressure for 4 minutes.
3. Quick release, then stir in butter, milk, and cheese.
4. Mix until creamy and smooth.`,
  author: "Negri de Cal Negri",
};

const recipe2: PostStructure = {
  _id: "68068eedaad91c08b13ed668",
  publishDate: new Date("2025-04-14T11:30:00.000Z"),
  title: "Slow Cooker BBQ Pulled Pork",
  imageUrl: "https://example.com/images/pulled-pork.jpg",
  imageAlt: "Pulled pork sandwich with BBQ sauce",
  tags: ["slow cook", "bbq", "pork"],
  content: `Ingredients:
- 3 lb pork shoulder
- 1 cup BBQ sauce
- 1 onion, sliced
- 1/2 cup apple cider vinegar
- Salt and pepper to taste

Instructions:
1. Place onion in bottom of slow cooker.
2. Add pork, vinegar, salt, and pepper.
3. Cook on low for 8 hours.
4. Shred pork, stir in BBQ sauce, and serve.`,
  author: "Negri de Cal Negri",
};

const recipe3: PostStructure = {
  _id: "68068eedaad91c08b13ed669",
  publishDate: new Date("2025-04-16T07:00:00.000Z"),
  title: "Overnight Oats with Berries",
  imageUrl: "https://example.com/images/overnight-oats.jpg",
  imageAlt: "Jar of overnight oats topped with berries",
  tags: ["breakfast", "healthy", "no cook"],
  content: `Ingredients:
- 1/2 cup rolled oats
- 1/2 cup milk or almond milk
- 1/4 cup yogurt
- 1 tbsp chia seeds
- 1/2 cup mixed berries

Instructions:
1. Combine oats, milk, yogurt, and chia seeds in a jar.
2. Stir well and refrigerate overnight.
3. Top with fresh berries in the morning and enjoy.`,
  author: "Negri de Cal Negri",
};

const recipe4: PostStructure = {
  _id: "68068eedaad91c08b13ed670",
  publishDate: new Date("2025-04-17T09:00:00.000Z"),
  title: "Rice Cooker Vegetable Curry",
  imageUrl: "https://example.com/images/vegetable-curry.jpg",
  imageAlt: "Colorful vegetable curry in a bowl",
  tags: ["vegetarian", "rice cooker", "easy dinner"],
  content: `Ingredients:
- 1 cup chopped potatoes
- 1 cup chopped carrots
- 1/2 cup peas
- 1 onion, chopped
- 1 can coconut milk
- 2 tbsp curry paste

Instructions:
1. Add all ingredients to the rice cooker.
2. Stir to combine.
3. Set to 'Cook' and stir occasionally.
4. Serve hot with rice or naan.`,
  author: "Negri de Cal Negri",
};

const recipe5: PostStructure = {
  _id: "68068eedaad91c08b13ed671",
  publishDate: new Date("2025-04-19T12:00:00.000Z"),
  title: "Pan-Fried Salmon with Dill Sauce",
  imageUrl: "https://example.com/images/salmon-dill.jpg",
  imageAlt: "Salmon filet with creamy dill sauce",
  tags: ["seafood", "pan fry", "dinner"],
  content: `Ingredients:
- 2 salmon fillets
- Salt and pepper to taste
- 1 tbsp olive oil
- 1/2 cup sour cream
- 1 tbsp chopped dill
- 1 tsp lemon juice

Instructions:
1. Season salmon with salt and pepper.
2. Pan-fry in olive oil until golden and cooked through.
3. Mix sour cream, dill, and lemon juice for sauce.
4. Serve salmon topped with dill sauce.`,
  author: "Negri de Cal Negri",
};

const recipe6: PostStructure = {
  _id: "68068eedaad91c08b13ed672",
  publishDate: new Date("2025-04-20T08:00:00.000Z"),
  title: "No-Bake Chocolate Oat Bars",
  imageUrl: "https://example.com/images/chocolate-oat-bars.jpg",
  imageAlt: "Stack of no-bake chocolate oat bars",
  tags: ["dessert", "no bake", "snacks"],
  content: `Ingredients:
- 2 cups rolled oats
- 1 cup peanut butter
- 1/2 cup honey
- 1/2 cup dark chocolate chips

Instructions:
1. Melt peanut butter and honey together.
2. Mix in oats.
3. Press into a lined pan.
4. Melt and drizzle chocolate on top.
5. Refrigerate for 1 hour before cutting.`,
  author: "Negri de Cal Negri",
};

const recipe7: PostStructure = {
  _id: "68068eedaad91c08b13ed673",
  publishDate: new Date("2025-04-21T10:30:00.000Z"),
  title: "Spaghetti Aglio e Olio",
  imageUrl: "https://example.com/images/aglio-e-olio.jpg",
  imageAlt: "Spaghetti with garlic and olive oil",
  tags: ["italian", "quick meals", "vegan"],
  content: `Ingredients:
- 8 oz spaghetti
- 4 cloves garlic, sliced
- 1/4 cup olive oil
- 1/4 tsp red pepper flakes
- Salt and parsley to taste

Instructions:
1. Cook spaghetti and drain.
2. Sauté garlic in olive oil until golden.
3. Add red pepper flakes.
4. Toss pasta in garlic oil.
5. Garnish with parsley and serve.`,
  author: "Negri de Cal Negri",
};

const recipe8: PostStructure = {
  _id: "68068eedaad91c08b13ed674",
  publishDate: new Date("2025-04-22T09:15:00.000Z"),
  title: "Chickpea Salad Wraps",
  imageUrl: "https://example.com/images/chickpea-wrap.jpg",
  imageAlt: "Lettuce wraps filled with chickpea salad",
  tags: ["healthy", "vegan", "lunch"],
  content: `Ingredients:
- 1 can chickpeas, mashed
- 2 tbsp vegan mayo
- 1 tbsp mustard
- 1 celery stalk, chopped
- Salt and pepper
- Lettuce leaves

Instructions:
1. Mix mashed chickpeas with mayo, mustard, and celery.
2. Season to taste.
3. Spoon into lettuce leaves and roll up.
4. Enjoy chilled or at room temperature.`,
  author: "Negri de Cal Negri",
};

const recipe9: PostStructure = {
  _id: "68068eedaad91c08b13ed675",
  publishDate: new Date("2025-04-23T08:45:00.000Z"),
  title: "Mason Jar Greek Salad",
  imageUrl: "https://example.com/images/greek-salad.jpg",
  imageAlt: "Layered Greek salad in a mason jar",
  tags: ["meal prep", "salad", "vegetarian"],
  content: `Ingredients:
- 1/2 cup cherry tomatoes
- 1/2 cucumber, diced
- 1/4 cup kalamata olives
- 1/4 cup feta cheese
- 1 tbsp olive oil + vinegar
- 1 cup romaine lettuce

Instructions:
1. Layer ingredients in mason jar: dressing, tomatoes, cucumber, olives, feta, lettuce.
2. Seal and refrigerate.
3. Shake before eating.`,
  author: "Negri de Cal Negri",
};

const recipe10: PostStructure = {
  _id: "68068eedaad91c08b13ed676",
  publishDate: new Date("2025-04-24T07:00:00.000Z"),
  title: "Air Fryer Sweet Potato Fries",
  imageUrl: "https://example.com/images/sweet-potato-fries.jpg",
  imageAlt: "Crispy sweet potato fries in a bowl",
  tags: ["air fryer", "snack", "vegan"],
  content: `Ingredients:
- 2 sweet potatoes, cut into fries
- 1 tbsp olive oil
- 1/2 tsp paprika
- Salt to taste

Instructions:
1. Toss sweet potatoes with olive oil, paprika, and salt.
2. Air fry at 400°F for 15–20 minutes, shaking halfway.
3. Serve with your favorite dip.`,
  author: "Negri de Cal Negri",
};

export {
  recipe1,
  recipe2,
  recipe3,
  recipe4,
  recipe5,
  recipe6,
  recipe7,
  recipe8,
  recipe9,
  recipe10,
};

export const callos: PostData = {
  publishDate: new Date(),
  author: "Ana Lourdes",
  title: "Callos del Bar Amadeo",
  content:
    "Lavarlos bien y cocinar despacico; y ojo que si hay tormenta se cortan",
  imageUrl: "http://www.iglesuela.es/callos.webp",
  imageAlt: "Callos recién sacados haciendo chup-chup",
  tags: ["tapas"],
};

export const pajaritos: PostData = {
  publishDate: new Date(),
  author: "Felipe",
  title: "Pajaritos del Bar Amadeo",
  content: "Friticos antes de ponerlos en conserva de aceite",
  imageUrl: "http://www.iglesuela.es/pajaritos.webp",
  imageAlt: "Pajaritos con patacas fritas y pimientos rojo",
  tags: ["tapas"],
};

export const conejo: PostData = {
  publishDate: new Date(),
  author: "Ana Lourdes",
  title: "Conejo en escabeche del Bar Amadeo",
  content: "Friticos antes de ponerlos en conserva de aceite y vinagre",
  imageUrl: "http://www.iglesuela.es/conejo.webp",
  imageAlt: "Conejo en escabeche con patacas fritas y pimientos rojo",
  tags: ["tapas"],
};
