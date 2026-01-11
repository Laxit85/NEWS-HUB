import { useParams } from 'react-router-dom';
import { newsArticles, categories } from '../../data/newsData';
import { ArticleCard } from '../ArticleCard';

export function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  
  const categoryInfo = categories.find(cat => cat.slug === category);
  const categoryArticles = newsArticles.filter(article => article.category === category);

  if (!categoryInfo) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl mb-4">Category Not Found</h1>
        <p className="text-gray-600">The category you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Header */}
        <div className="mb-8">
          <h1 className="text-4xl mb-2 text-gray-900">{categoryInfo.name}</h1>
          <p className="text-gray-600">
            Latest {categoryInfo.name.toLowerCase()} news and updates
          </p>
        </div>

        {/* Articles Grid */}
        {categoryArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No articles found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
