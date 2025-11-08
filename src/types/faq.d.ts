export type FaqList = {
  category: string;
  faqs: Faq[];
};

export type Faq = {
  question: string;
  content: string;
};
