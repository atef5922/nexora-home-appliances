export type Testimonial = {
  id: string;
  name: string;
  location: string;
  review: string;
  rating: number;
  verified: boolean;
};

export const testimonials: Testimonial[] = [
  {
    id: "review-001",
    name: "Ariful Islam",
    location: "Dhaka",
    rating: 5,
    verified: true,
    review:
      "Excellent service, authentic product, and fast delivery. Installation support was professional and the refrigerator exceeded expectations."
  },
  {
    id: "review-002",
    name: "Nusrat Jahan",
    location: "Chattogram",
    rating: 5,
    verified: true,
    review:
      "The washing machine arrived on time, packaging was secure, and the support team guided us through setup with impressive patience."
  },
  {
    id: "review-003",
    name: "Mahmud Hasan",
    location: "Sylhet",
    rating: 5,
    verified: true,
    review:
      "Product quality felt genuine from day one. Nexora handled delivery, follow-up, and warranty assurance far better than local marketplace sellers."
  },
  {
    id: "review-004",
    name: "Sadia Rahman",
    location: "Rajshahi",
    rating: 5,
    verified: true,
    review:
      "We ordered an air conditioner during the seasonal campaign and the whole process felt premium. Delivery and installation were both smooth."
  },
  {
    id: "review-005",
    name: "Tanvir Ahmed",
    location: "Khulna",
    rating: 5,
    verified: true,
    review:
      "Checkout was simple, EMI details were clearly explained, and the TV arrived exactly as shown. Great trust factor for a high-value purchase."
  },
  {
    id: "review-006",
    name: "Farzana Akter",
    location: "Barishal",
    rating: 5,
    verified: true,
    review:
      "Authentic appliance, polished customer care, and quick communication. This felt closer to a premium electronics store than a typical ecommerce site."
  }
];

export const reviewStats = [
  { label: "Happy Customers", value: 50000, suffix: "+" },
  { label: "Products Delivered", value: 10000, suffix: "+" },
  { label: "Average Rating", value: 4.9, suffix: "/5" },
  { label: "Customer Satisfaction", value: 98, suffix: "%" }
] as const;

export const reviewSources = [
  { label: "Google Reviews", color: "text-[#4285F4]" },
  { label: "Facebook Reviews", color: "text-[#1877F2]" },
  { label: "Website Reviews", color: "text-[#9a6d21]" }
] as const;
