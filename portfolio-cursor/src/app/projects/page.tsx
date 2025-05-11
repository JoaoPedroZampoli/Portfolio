'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { getGitHubRepos } from '@/services/github';
import { GitHubRepo } from '@/types/github';
import { languages } from '@/config/languages';
import Image from 'next/image';
import { ProjectCard } from '@/components/Projects/ProjectCard';

export default function ProjectsPage() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getGitHubRepos();
        const sortedRepos = data.sort((a, b) => b.stargazers_count - a.stargazers_count);
        setRepos(sortedRepos);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load projects');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const getLanguageConfig = (language: string) => {
    return languages[language] || {
      name: language,
      color: 'bg-gray-500',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/code/code-original.svg'
    };
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-emerald-500 text-transparent bg-clip-text">
            Todos os Projetos
          </h1>

          {loading ? (
            <div className="flex justify-center items-center min-h-[400px]">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <div className="text-center text-red-500 min-h-[400px] flex items-center justify-center">
              <p>{error}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {repos.map((repo, index) => (
                <ProjectCard key={repo.id} repo={repo} index={index} />
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </main>
  );
} 