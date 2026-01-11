import { Link } from 'react-router-dom';
import { Calendar, Clock, User } from 'lucide-react';
import { Article } from '../data/newsData';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export function ArticleCard({ article, featured = false }: ArticleCardProps) {
  if (featured) {
    return (
      <Link to={`/article/${article.id}`} className="group block">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs rounded-full mb-3 uppercase">
              {article.category}
            </span>
            <h2 className="text-white text-2xl mb-2 group-hover:text-blue-400 transition-colors">
              {article.title}
            </h2>
            <p className="text-gray-200 text-sm mb-3">{article.excerpt}</p>
            <div className="flex items-center gap-4 text-gray-300 text-xs">
              <div className="flex items-center gap-1">
                <User className="w-3 h-3" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{new Date(article.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/article/${article.id}`} className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      <div className="relative overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-3 left-3 px-3 py-1 bg-blue-600 text-white text-xs rounded-full uppercase">
          {article.category}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-lg mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{article.excerpt}</p>
        <div className="flex items-center gap-3 text-gray-500 text-xs">
          <div className="flex items-center gap-1">
            <User className="w-3 h-3" />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{new Date(article.date).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
