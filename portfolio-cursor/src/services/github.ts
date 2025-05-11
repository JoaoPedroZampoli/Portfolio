import { GitHubRepo } from '@/types/github';

const GITHUB_API_URL = 'https://api.github.com';
const USERNAME = 'JoaoPedroZampoli'; // Substitua pelo seu nome de usuário do GitHub

// Adicione seu token do GitHub aqui
const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

export const getGitHubRepos = async (): Promise<GitHubRepo[]> => {
  try {
    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json',
    };

    if (GITHUB_TOKEN) {
      headers['Authorization'] = `token ${GITHUB_TOKEN}`;
    }

    const response = await fetch(
      `${GITHUB_API_URL}/users/${USERNAME}/repos?sort=updated&per_page=100`,
      { headers }
    );
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(
        errorData?.message || 
        `Failed to fetch GitHub repositories: ${response.status} ${response.statusText}`
      );
    }

    const repos: GitHubRepo[] = await response.json();
    return repos;
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    throw error;
  }
}; 