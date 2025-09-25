
export async function getSummaryProjects(){
    const url = "https://api.github.com/users/srsadra/repos?per_page=5"; 

  try {
    const response = await fetch(url, {
      headers: {
        "Accept": "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        // only needed if you want private repos:
        // Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    //   cache: "no-store", // disable caching in Next.js
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos = await response.json();
    const res = repos.map((rep) => ({
      id: rep.id,
      name: rep.name,
      private: rep.private,
      desc: rep.description,
      repUrl: rep.svn_url,
      lang: rep.language
    }));
      console.log("repo" , res);
      
    return res; // this is an array of repos
    } catch (error) {
        console.error("Failed to fetch repos:", error);
    return [];
  }
}