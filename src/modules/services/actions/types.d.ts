export type Service = {
  metadata: ServiceMetadata;
  content: string;
};

export type ServiceMetadata = {
  id: number;
  title: string;
  description: string | string[];
  partners: string[];
  badge: string;
  slug: string;
  image: string;
  category: string;
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
};
