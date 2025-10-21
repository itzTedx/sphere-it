export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Ahmed Al-Farouq",
    designation: "IT Director, Mashreq Bank",
    avatar: "/",
    content:
      "Sphere IT’s precision and pragmatic approach made our cloud migration seamless. Their team integrated flawlessly with ours, delivering on time.",
    industry: "Banking / Financial Services",
  },
  {
    id: 2,
    name: "Sara Al-Mansoori",
    designation: "Head of Digital Transformation, FinServ Group",
    avatar: "/",
    content:
      "We scaled our digital transformation team within weeks thanks to Sphere IT’s augmentation services. The talent they provided was highly skilled and aligned perfectly with our objectives.",
    industry: "Talent & Resource Augmentation",
  },
];

export type Testimonial = {
  id: number;
  name: string;
  avatar: string;
  designation: string;
  content: string;
  industry: string;
};
