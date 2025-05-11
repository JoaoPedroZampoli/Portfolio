import Image from 'next/image';
import { GitHubRepo } from '@/types/github';
import { getLanguageConfig } from '@/utils/languageUtils';

interface ProjectCardProps {
  repo: GitHubRepo;
  index: number;
}

export const ProjectCard = ({ repo, index }: ProjectCardProps) => {
  return (
    <div className="h-[270px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border-2 border-blue-500/60 hover:border-emerald-400 transition-all duration-300 p-4 sm:p-6 flex flex-col relative group shadow-lg hover:shadow-2xl">
      <div className="absolute inset-0 border border-blue-400/0 group-hover:border-blue-400/30 transition-colors duration-300 rounded-lg pointer-events-none" />
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-between mb-2 sm:mb-3">
          <h3 className="text-base sm:text-lg font-semibold text-gray-100 group-hover:text-blue-400 transition-colors duration-300 truncate max-w-[70%]">{repo.name}</h3>
          {repo.language && (
            <div className="flex items-center space-x-1 sm:space-x-2">
              <div className="relative w-4 h-4 sm:w-5 sm:h-5">
                <Image
                  src={getLanguageConfig(repo.language).icon}
                  alt={repo.language}
                  fill
                  className="object-contain"
                  priority={index < 3}
                  sizes="(max-width: 640px) 16px, 20px"
                />
              </div>
              <span className="text-xs sm:text-sm text-gray-300">{repo.language}</span>
            </div>
          )}
        </div>
        
        <p className="text-gray-300 mb-3 sm:mb-4 line-clamp-2 flex-grow text-xs sm:text-sm">
          {repo.description || 'Sem descrição disponível'}
        </p>

        <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4 min-h-[2rem]">
          {repo.topics?.slice(0, 2).map((topic) => (
            <span
              key={topic}
              className="px-2 py-0.5 sm:py-1 text-xs bg-gray-800 rounded-full text-gray-200 group-hover:bg-gray-700 transition-colors duration-300 truncate max-w-[100%] flex items-center justify-center"
              style={{ minHeight: '1.75rem' }}
            >
              {topic}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center mt-auto">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group-hover:scale-105 transform duration-300 text-xs sm:text-sm"
          >
            Ver no GitHub
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
          {repo.stargazers_count > 0 && (
            <div className="flex items-center space-x-1 text-gray-400 group-hover:text-yellow-400 transition-colors duration-300 text-xs sm:text-sm">
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
              </svg>
              <span>{repo.stargazers_count}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}; 