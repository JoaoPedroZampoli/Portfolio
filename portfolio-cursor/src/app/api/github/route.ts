import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const token = process.env.GITHUB_TOKEN;
    if (!token) {
      throw new Error('GitHub token not found');
    }

    const username = 'JoaoPedroZampoli';
    const response = await fetch(`https://api.github.com/users/${username}/repos`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/vnd.github.v3+json'
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos = await response.json();

    // Get pinned repos
    const pinnedResponse = await fetch(`https://api.github.com/users/${username}/pinned`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    });

    let pinnedRepos: string[] = [];
    if (pinnedResponse.ok) {
      const pinnedData = await pinnedResponse.json();
      pinnedRepos = pinnedData.map((repo: any) => repo.name);
    }

    // Filter and sort repos
    const filteredRepos = repos
      .filter((repo: any) => !repo.fork)
      .map((repo: any) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        language: repo.language,
        stargazers_count: repo.stargazers_count,
        topics: repo.topics || [],
        pinned: pinnedRepos.includes(repo.name)
      }))
      .sort((a: any, b: any) => {
        if (a.pinned && !b.pinned) return -1;
        if (!a.pinned && b.pinned) return 1;
        return b.stargazers_count - a.stargazers_count;
      });

    return NextResponse.json(filteredRepos);
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return NextResponse.json(
      { error: 'Failed to fetch GitHub repos' },
      { status: 500 }
    );
  }
} 