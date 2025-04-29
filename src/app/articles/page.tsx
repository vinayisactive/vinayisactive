import { ListArticles } from "@/components/article-listing";

function Articles() {
  return (
    <main className="w-full pt-8 space-y-16">
      <h1 className=" text-2xl flex items-end">Articles</h1>
      <ListArticles />
    </main>
  );
}

export default Articles;
