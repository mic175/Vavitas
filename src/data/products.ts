import productFishOil from "@/assets/product-fish-oil.png";
import productVitaminD3K2 from "@/assets/product-vitamin-d3-k2.png";
import productNmn from "@/assets/product-nmn.png";
import productUbiquinol from "@/assets/product-ubiquinol.png";
import productCollagenPeptides from "@/assets/product-collagen-peptides.png";

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  longDescription: string;
  benefits: string[];
  ingredients: string;
  servingSize: string;
  servingsPerContainer: string;
  directions: string;
  image: string;
  badge?: string;
  price: string;
  rating: number;
  reviewCount: number;
  tagline: string;
  link: string;
  buyNowLink?: string;
}

export const products: Product[] = [
  {
    id: "fish-oil",
    name: "Fish Oil",
    subtitle: "1000mg · 700mg Omega-3",
    description: "Deep sea, high-purity fish oil with superior omega-3 concentration.",
    longDescription:
      "Our premium Fish Oil delivers 700mg of bioavailable Omega-3 fatty acids per softgel, sourced from deep-sea cold-water fish. Each batch undergoes molecular distillation to remove heavy metals and impurities, ensuring pharmaceutical-grade purity. The concentrated EPA and DHA support cardiovascular health, cognitive function, and a healthy inflammatory response. Our enteric-coated softgels are designed for easy digestion with no fishy aftertaste.",
    benefits: [
      "Heart & cardiovascular support",
      "Brain & cognitive function",
      "Immune system health",
      "Joint comfort & mobility",
      "Healthy inflammatory response",
    ],
    ingredients:
      "Calories 5.17, Total Fat 0.5g (1% DV), Fish Oil 1000mg, Total Omega-3 700mg, EPA (Eicosapentaenoic Acid) 400mg, DHA (Docosahexaenoic Acid) 300mg. Other Ingredients: Fish Oil, Gelatin, Glycerol, Purified Water. Contains: Fish (Anchovy).",
    servingSize: "1 Softgel",
    servingsPerContainer: "120",
    directions: "Take one (1) softgel daily with food, or as directed by your healthcare professional.",
    image: productFishOil,
    price: "$67.60",
    badge: "Best Seller",
    rating: 4.8,
    reviewCount: 128,
    tagline: "Supports Heart, Brain & Immune Health*",
    link: "https://www.vavitas-health.com/product/fish-oil",
    buyNowLink:
      "https://shop.vavitas-health.com/products/fish-oil?utm_source=copyToPasteBoard&utm_medium=product-links&utm_content=web",
  },
  {
    id: "vitamin-d3-k2",
    name: "Vitamin D3 + K2",
    subtitle: "5000IU + 100mcg",
    description: "Synergistic formula for stronger bones, teeth, and cardiovascular health.",
    longDescription:
      "Our Vitamin D3 + K2 combines two essential nutrients in their most bioavailable forms. Vitamin D3 (cholecalciferol) at 5000IU supports calcium absorption and immune function, while Vitamin K2 (MK-7) at 100mcg ensures calcium is directed to bones and teeth rather than soft tissues. This synergistic pairing is especially beneficial for those with limited sun exposure, supporting bone density, cardiovascular health, and overall immune resilience.",
    benefits: [
      "Bone & teeth strength",
      "Calcium absorption & utilization",
      "Cardiovascular support",
      "Immune system function",
      "Muscle health",
    ],
    ingredients:
      "Vitamin D3 (as Cholecalciferol) 5000IU (625% DV), Vitamin K2 (as Menaquinone-7) 100mcg (83% DV). Other Ingredients: Organic Extra-virgin Olive Oil, Gelatin, Glycerin.",
    servingSize: "1 Softgel",
    servingsPerContainer: "120",
    directions: "Take one (1) softgel daily with a meal, or as directed by your healthcare professional.",
    image: productVitaminD3K2,
    price: "$47.80",
    rating: 4.9,
    reviewCount: 95,
    tagline: "Supports Bone Strength & Calcium Absorption*",
    link: "https://www.vavitas-health.com/product/vitamin-d3-k2",
    buyNowLink:
      "https://shop.vavitas-health.com/products/vitamin-d3-k2?utm_source=copyToPasteBoard&utm_medium=product-links&utm_content=web",
  },
  {
    id: "nmn",
    name: "NMN",
    subtitle: "300mg · Delayed Release",
    description: "NAD+ rejuvenation for healthy longevity and cellular vitality.",
    longDescription:
      "Vavitas NMN is formulated with AbinoNutra® — the award-winning, clinically validated NMN ingredient produced in a US FDA-registered, cGMP-certified facility with chemical and optical purity exceeding 99.0%. As the most efficient direct precursor to NAD⁺, NMN restores the cellular coenzyme that declines sharply with age. Validated in a landmark human clinical trial conducted with Professor Andrea Maier at the National University of Singapore (published in GeroScience, 2023; awarded by the American Aging Association in 2024), AbinoNutra® NMN demonstrated up to a 4.7× elevation in blood NAD⁺ and a biological age reduction of 6.7 years in the 600 mg group. Built on the pioneering NMN research of Prof. Shin-ichiro Imai and Prof. David Sinclair.",
    benefits: [
      "Clinically proven NAD⁺ elevation (up to 4.7×)",
      "Biological age reduction support",
      "Cellular energy & mitochondrial function",
      "DNA repair & sirtuin activation",
      "Healthy longevity & physical performance",
    ],
    ingredients:
      "β-Nicotinamide Mononucleotide (AbinoNutra® NMN) 300mg. Other Ingredients: Delayed Release Veggie Capsule (Cellulose), Microcrystalline Cellulose, Magnesium Stearate, Silicon Dioxide.",
    servingSize: "1 Capsule",
    servingsPerContainer: "60",
    directions: "Take one (1) capsule daily before breakfast with water at ambient temperature.",
    image: productNmn,
    price: "$228.30",
    badge: "Premium",
    rating: 4.7,
    reviewCount: 63,
    tagline: "Supports Cellular Energy & Healthy Aging*",
    link: "https://www.vavitas-health.com/product/nmn",
    buyNowLink:
      "https://shop.vavitas-health.com/products/nmn?utm_source=copyToPasteBoard&utm_medium=product-links&utm_content=web",
  },
  {
    id: "ubiquinol",
    name: "Ubiquinol",
    subtitle: "CoQ10 · 100mg · Superior Absorption",
    description: "Active form of CoQ10 for optimal heart health and cellular energy.",
    longDescription:
      "Ubiquinol is the active, body-ready form of Coenzyme Q10, offering up to 8x better absorption than standard CoQ10 (ubiquinone). At 100mg per softgel, our formula delivers powerful antioxidant protection and supports mitochondrial energy production in every cell. Particularly beneficial for heart health, Ubiquinol is essential for anyone over 40 when the body's natural ability to convert CoQ10 decreases. Our Kaneka Ubiquinol® is the world's most recognized and researched form.",
    benefits: [
      "Heart health support",
      "Cellular energy production",
      "Antioxidant protection",
      "Mitochondrial function",
      "Exercise recovery",
    ],
    ingredients:
      "Ubiquinol (Kaneka Ubiquinol®) 100mg. Calories 5. Total Fat 0.5g (<1%). Other Ingredients: Medium Chain Triglycerides, Gelatin, Glycerin, Ascorbyl Palmitate, Purified Water, Beeswax White, Sunflower Lecithin, Sunflower Oil, Annatto Extract.",
    servingSize: "1 Softgel",
    servingsPerContainer: "30",
    directions: "Adults take 1 softgel daily or as directed by a health professional.",
    image: productUbiquinol,
    price: "$61.60",
    rating: 4.8,
    reviewCount: 82,
    tagline: "Supports Heart Health & Cellular Energy*",
    link: "https://www.vavitas-health.com/product/ubiquinol",
    buyNowLink:
      "https://shop.vavitas-health.com/products/ubiquinol?utm_source=copyToPasteBoard&utm_medium=product-links&utm_content=web",
  },
  {
    id: "collagen-peptides",
    name: "Collagen Peptides",
    subtitle: "VERISOL® Bioactive Peptide",
    description: "Premium bioactive collagen for radiant skin, strong hair, and joint support.",
    longDescription:
      "Our Collagen Peptides feature VERISOL® — a clinically studied bioactive collagen peptide technology from GELITA AG (Germany). Unlike generic collagen supplements, VERISOL® is specifically optimized to stimulate skin cell metabolism and counteract the loss of collagen from within. Clinical studies show visible improvements in skin elasticity, wrinkle reduction, and nail growth within 4-8 weeks. Delivered in convenient single-serve stick packs — just mix one stick into 8–12 oz of water or your favorite beverage. No added sugar or artificial flavors.",
    benefits: [
      "Skin elasticity & hydration",
      "Hair & nail strength",
      "Joint flexibility",
      "Wrinkle reduction",
      "Connective tissue support",
    ],
    ingredients:
      "Collagen Peptide (VERISOL®) 2.5g per stick pack. Calories 10, Protein 2g, Sodium 5mg. No added sugar or artificial flavors. Does not contain artificial color, sugar, starch, corn, milk, eggs, fish, shellfish, tree nuts, wheat, peanuts, soybeans, gluten, GMO, or preservatives.",
    servingSize: "1 Stick Pack (2.5g)",
    servingsPerContainer: "15",
    directions: "For adults, take 1 stick pack in 8–12 oz water or beverage of your choice daily, or as directed by your physician.",
    image: productCollagenPeptides,
    price: "$47.30",
    rating: 4.9,
    reviewCount: 107,
    tagline: "Supports Skin Elasticity & Joint Health*",
    link: "https://www.vavitas-health.com/product/collagen-peptides",
    buyNowLink:
      "https://shop.vavitas-health.com/products/collagen-peptides?utm_source=copyToPasteBoard&utm_medium=product-links&utm_content=web",
  },
];
