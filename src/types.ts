export type Restaurant = {
  name: string;
  origins: (MainOrigin | SubOrigin)[];
  meals: Meal[];
  diets: Diet[];
  tags: Tag[];
  speed: Speed;
  price: Price;
  hasTerrace: boolean;
  hasToilets: boolean;
  acceptsTakeAway: boolean;
  acceptsEatIn: boolean;
  acceptsCustomerBowl: boolean;
  mapsLink: string;
};

export const enum MainOrigin {
  AFRICAN,
  AMERICA,
  ASIA,
  EUROPE,
  OTHER,
}

export const enum SubOrigin {
  ARGENTINA,
  BRAZIL,
  CHINA,
  COLOMBIA,
  FRANCE,
  GREECE,
  HAWAII,
  INDIA,
  ITALIA,
  JAPAN,
  KOREA,
  LEBANON,
  MEXICO,
  MOROCCO,
  PERU,
  PORTUGAL,
  SPAIN,
  SWEDEN,
  TAIWAN,
  THAILAND,
  TURKEY,
  USA,
  VIETNAM,
  WEST_INDIES,
}

export const OriginMap = {
  [MainOrigin.AFRICAN]: [SubOrigin.MOROCCO],
  [MainOrigin.AMERICA]: [
    SubOrigin.ARGENTINA,
    SubOrigin.BRAZIL,
    SubOrigin.COLOMBIA,
    SubOrigin.MEXICO,
    SubOrigin.PERU,
    SubOrigin.USA,
    SubOrigin.WEST_INDIES,
  ],
  [MainOrigin.ASIA]: [
    SubOrigin.CHINA,
    SubOrigin.INDIA,
    SubOrigin.KOREA,
    SubOrigin.LEBANON,
    SubOrigin.TAIWAN,
    SubOrigin.THAILAND,
    SubOrigin.TURKEY,
    SubOrigin.VIETNAM,
  ],
  [MainOrigin.EUROPE]: [
    SubOrigin.FRANCE,
    SubOrigin.GREECE,
    SubOrigin.ITALIA,
    SubOrigin.PORTUGAL,
    SubOrigin.SPAIN,
    SubOrigin.SWEDEN,
  ],
  [MainOrigin.OTHER]: [SubOrigin.HAWAII],
};

export const enum Tag {
  BAKERY,
  BBQ,
  BRASSERIE,
  GROCERY,
  PASTRY,
  RESTAURANT,
}

export const enum Meal {
  ALCOHOL,
  BENTO,
  BUBBLE_TEA,
  BURGER,
  BURRITO,
  CREPE,
  FALAFEL,
  HOT_DOG,
  ICE_CREAM,
  JUICE,
  KEBAB,
  MEAT,
  PASTA,
  PIZZA,
  PLATE,
  POKEBOWL,
  RAMEN,
  SALAD,
  SANDWICH,
  SEAFOOD,
  SMOOTHIE,
  SOUP,
  SUSHI,
  TEA,
}

export const enum Diet {
  GLUTEN_FREE,
  HALAL,
  HEALTHY,
  JUNK,
  KOSHER,
  VEGAN,
  VEGETARIAN,
}

export const enum Speed {
  FAST,
  MEDIUM,
  SLOW,
}

export const enum Price {
  $,
  $$,
  $$$,
  $$$$,
  $$$$$,
}
