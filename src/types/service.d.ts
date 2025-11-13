export type Service = {
  id: string;
  Icon: (props: SVGProps) => JSX.Element;
  serviceTitle: string;
  title: string;
  description: string;
  overview: string;
  image: string;
  tags: string[];
  lists: ServiceListItem[];
  partners?: string[];
};

export type ServiceListItem = {
  id: number;
  Icon: (props: SVGProps) => JSX.Element;
  feature: string;
};
