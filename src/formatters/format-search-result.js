export const formatSearchResult = (result) => {
  return {
    id: result.id,
    name: result.name,
    description: result.description,
    stars: result.stargazers_count,
    language: result.language,
    ownerId: result.owner.id,
    ownerName: result.owner.login,
    url: result.html_url
  };
};

export const formatSearchResults = (results) => {
  return results.map(result => formatSearchResult(result));
};