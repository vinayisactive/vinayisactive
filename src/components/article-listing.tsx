import Link from "next/link";
import { ArticleData } from "@/interface/interfaces";

const ARTICLES: ArticleData[] = [
  {
    date: "2025 . 04 . 26",
    title: "The Hidden Transaction",
    desc: "why even a simple SELECT runs inside a transaction in PostgreSQL?",
    slug: "the-hidden-transaction",
  },
];

export function ArticleLink({ date, title, desc, slug }: ArticleData) {
  return (
    <div className="flex justify-start items-start gap-4">
      <div className="text-sm text-gray-600 whitespace-nowrap pt-1">{date}</div>
      <div className="flex flex-col gap-0.5 items-start">
        <Link
          href={`/articles/${slug}`}
          className="text-lg hover:underline underline-offset-2 hover:text-gray-600"
        >
          {title}
        </Link>
        <p className="text-xs text-gray-500">- {desc}</p>
      </div>
    </div>
  );
}

export function ListArticles() {
  return (
    <div className="flex flex-col justify-start gap-2">
      {ARTICLES.map((article) => (
        <ArticleLink
          key={article.date}
          date={article.date}
          title={article.title}
          desc={article.desc}
          slug={article.slug}
        />
      ))}
    </div>
  );
}
