import { Link } from 'react-router-dom';
import { TrendingUp } from 'lucide-react';
import { newsArticles, categories } from '../../data/newsData';
import { ArticleCard } from '../ArticleCard';

export function HomePage() {
  const featuredArticles = newsArticles.filter(article => article.featured);
  const latestArticles = newsArticles.slice(0, 6);

  return (
    <div className="bg-gray-50">
      {/* Hero Section - Featured Article */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-red-600" />
            <span className="text-red-600 uppercase tracking-wider text-sm">Breaking News</span>
          </div>
          {featuredArticles.length > 0 && (
            <ArticleCard article={featuredArticles[0]} featured={true} />
          )}
        </div>
      </section>

      {/* Latest News */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl mb-6 text-gray-900">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {latestArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* Category Sections */}
      {categories.map((category) => {
        const categoryArticles = newsArticles
          .filter(article => article.category === category.slug)
          .slice(0, 3);

        if (categoryArticles.length === 0) return null;

        return (
          <section key={category.slug} className="bg-white mb-1">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl text-gray-900">{category.name}</h2>
                <Link
                  to={`/category/${category.slug}`}
                  className="text-blue-600 hover:text-blue-800 transition-colors text-sm"
                >
                  View All →
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
