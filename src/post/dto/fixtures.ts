import { PostDataDto } from "./types.js";

export const macAndCheeseDto: PostDataDto = {
  publishDate: "2025-04-13T09:00:00.000Z",
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

export const pulledPorkDto: PostDataDto = {
  publishDate: "2025-04-14T11:30:00.000Z",
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
