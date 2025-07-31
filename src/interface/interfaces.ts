export interface ArticleData {
    date: string;
    title: string;
    desc: string;
    slug: string;
  }
  
  export interface NavbarProps {
    text: string;
    type: "route" | "link";
    href: string;
    icon?: boolean;
    onClick?: () => void
  }
