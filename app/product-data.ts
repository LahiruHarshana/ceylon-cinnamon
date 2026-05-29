export type Product = {
  slug: string;
  title: string;
  category: string;
  image: string;
  summary: string;
  specs: { label: string; value: string }[];
  characteristics: string[];
  benefits: string[];
  uses: string[];
};

export const products: Product[] = [
  {
    slug: "ceylon-cinnamon-sticks",
    title: "Ceylon Cinnamon Sticks",
    category: "Whole cinnamon",
    image: "/products/ceylon-cinnamon-sticks.png",
    summary:
      "Ceylon cinnamon sticks from the Cinnamomum verum tree offer delicate flavor, subtle citrus notes, and a warm, sweet aroma for cooking and wellness.",
    specs: [
      { label: "Price", value: "Depends on quantity and grade" },
      { label: "Size", value: "Depends on cutout and bale" }
    ],
    characteristics: [
      "Distinctive sweet flavor with subtle citrus notes and a warm, spicy aroma.",
      "Thin, fragile quills that can be easily crumbled or ground into powder.",
      "Light to medium brown color with a hint of reddish hue.",
      "Lower coumarin content compared with cassia cinnamon."
    ],
    benefits: [
      "Anti-inflammatory support.",
      "Antioxidant properties.",
      "Antimicrobial properties.",
      "Blood sugar regulation support.",
      "Digestive support.",
      "Heart health support."
    ],
    uses: [
      "Cooking sweet and savory dishes.",
      "Infusing tea, warm drinks, and desserts.",
      "Grinding into fresh cinnamon powder when needed."
    ]
  },
  {
    slug: "ceylon-cinnamon-powder",
    title: "Ceylon Cinnamon Powder",
    category: "Ground cinnamon",
    image: "/products/ceylon-cinnamon-powder.png",
    summary:
      "Fine Ceylon cinnamon powder with a mild, sweet taste, lighter color, and a versatile profile for everyday food and beverage use.",
    specs: [
      { label: "Price", value: "Depends on quantity and grade" },
      { label: "Size", value: "Depends on bottle size" }
    ],
    characteristics: [
      "Mild, sweet taste with citrusy undertones.",
      "Lighter color than cassia cinnamon powder, from tan to light brown.",
      "Lower coumarin content for regular culinary use."
    ],
    benefits: [
      "Anti-inflammatory support.",
      "Antioxidant properties.",
      "Antimicrobial properties.",
      "Blood sugar regulation support.",
      "Digestive support.",
      "Heart health support."
    ],
    uses: [
      "Versatile spice for daily culinary applications.",
      "Enhances sweet and savory dishes, including desserts, baked goods, curries, and stews.",
      "Adds depth and warmth to chai tea, hot cocoa, and other beverages."
    ]
  },
  {
    slug: "ceylon-cinnamon-leaf-oil",
    title: "Ceylon Cinnamon Leaf Oil",
    category: "Essential oil",
    image: "/products/ceylon-cinnamon-leaf-oil.png",
    summary:
      "Ceylon cinnamon leaf oil from Cinnamomum verum is used for aromatherapy and topical applications, with a soothing aromatic profile.",
    specs: [
      { label: "Price", value: "Depends on quantity" },
      { label: "Size", value: "Depends on bottle size; customized sizing available" }
    ],
    characteristics: [
      "Extracted from Cinnamomum verum leaves.",
      "Aromatic profile suited for relaxation and topical blends.",
      "Used in aromatherapy, skincare, and scalp therapy applications."
    ],
    benefits: [
      "Anti-inflammatory support.",
      "Antioxidant properties.",
      "Antimicrobial properties.",
      "Blood sugar regulation support.",
      "Digestive support.",
      "Heart health support."
    ],
    uses: [
      "Aromatherapy for a soothing atmosphere.",
      "Insect repellent applications due to its scent.",
      "Topical use after proper dilution.",
      "Oral care formulations such as toothpaste or mouthwash.",
      "Flavor enhancement for foods, teas, and beverages."
    ]
  },
  {
    slug: "ceylon-cinnamon-pieces",
    title: "Ceylon Cinnamon Pieces",
    category: "Broken pieces",
    image: "/products/ceylon-cinnamon-pieces.png",
    summary:
      "Broken Ceylon cinnamon pieces retain the same sweet flavor as whole sticks in a convenient form for cooking, infusions, and spice blends.",
    specs: [
      { label: "Price", value: "Depends on quantity and grade" },
      { label: "Size", value: "Depends on packet size" }
    ],
    characteristics: [
      "Derived from the same Cinnamomum verum tree used for sticks and powder.",
      "Fragile texture from naturally broken cinnamon sticks.",
      "Retains the sweet, delicate flavor associated with Ceylon cinnamon."
    ],
    benefits: [
      "Blood sugar regulation support.",
      "Antioxidant properties.",
      "Anti-inflammatory support.",
      "Heart health support.",
      "Improved digestion support.",
      "Antimicrobial properties."
    ],
    uses: [
      "Cooking in place of whole sticks or powder.",
      "Steeping in hot liquids like tea or mulled wine.",
      "Crushing into homemade spice blends."
    ]
  },
  {
    slug: "ceylon-cinnamon-bark-oil",
    title: "Ceylon Cinnamon Bark Oil",
    category: "Essential oil",
    image: "/products/ceylon-cinnamon-bark-oil.png",
    summary:
      "Ceylon cinnamon bark oil has a rich, spicy aroma and concentrated character for aromatherapy, properly diluted topical use, and selected flavor applications.",
    specs: [
      { label: "Price", value: "Depends on quantity and grade" },
      { label: "Size", value: "Depends on bottle size" }
    ],
    characteristics: [
      "Rich, spicy scent suited to aromatic products.",
      "Contains active compounds such as cinnamaldehyde.",
      "Deep, warm flavor that can add complexity to culinary creations."
    ],
    benefits: [
      "Antioxidant properties.",
      "Anti-inflammatory support.",
      "Blood sugar regulation support.",
      "Antimicrobial activity.",
      "Heart health support.",
      "Digestive support."
    ],
    uses: [
      "Oral care products such as mouthwash or toothpaste.",
      "Insect repellent sprays and skin applications.",
      "Aromatherapy massage when mixed with a carrier oil."
    ]
  },
  {
    slug: "ceylon-cinnamon-tea",
    title: "Ceylon Cinnamon Tea",
    category: "Tea bags",
    image: "/products/ceylon-cinnamon-tea.png",
    summary:
      "Ceylon cinnamon tea delivers a mild, sweet flavor with subtle spice notes and can be enjoyed hot or cold.",
    specs: [
      { label: "Price", value: "Depends on quantity and grade" },
      { label: "Quantity", value: "25 tea bags" }
    ],
    characteristics: [
      "May support weight management by helping regulate blood sugar levels and reduce food cravings.",
      "May aid digestion by reducing gas, bloating, and stomach discomfort.",
      "Aromatic and relaxing flavor suited to a warm tea ritual.",
      "Aroma may contribute to an uplifting, mood-enhancing experience.",
      "Contains small amounts of nutrients including manganese, calcium, and iron."
    ],
    benefits: [
      "Potential health tonic.",
      "Digestive aid.",
      "Relaxation support.",
      "Customizable with other herbs or spices."
    ],
    uses: [
      "Enjoy hot or cold as a daily beverage.",
      "Sip after meals to support digestion.",
      "Drink before bedtime for a calming routine.",
      "Blend with herbs or spices for custom tea profiles."
    ]
  },
  {
    slug: "ceylon-cinnamon-toothpicks",
    title: "Ceylon Cinnamon Toothpicks",
    category: "Oral care",
    image: "/products/ceylon-cinnamon-toothpicks.png",
    summary:
      "Ceylon cinnamon toothpicks are infused with Ceylon cinnamon oil or extract, giving a portable oral-care product a true cinnamon aroma.",
    specs: [
      { label: "Price", value: "Depends on quantity and grade" },
      { label: "Size", value: "Depends on box size" }
    ],
    characteristics: [
      "Invigorating aroma with the scent of Ceylon cinnamon.",
      "Antibacterial properties associated with cinnamon.",
      "Portable format for convenient oral care.",
      "Made with original Ceylon cinnamon."
    ],
    benefits: [
      "Anti-inflammatory support.",
      "Antimicrobial activity.",
      "Digestive support."
    ],
    uses: [
      "Chewing for a soothing cinnamon aroma.",
      "Appetite suppression between meals.",
      "Focus aid while studying or working.",
      "Smoking cessation aid as an oral fixation substitute."
    ]
  }
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
