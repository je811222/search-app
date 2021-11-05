import { request } from "@octokit/request";

async function getSearchedRepositories(opts = {}) {
  const {
    word,
    language = '',
    sort
  } = opts;

  // eslint-disable-next-line no-throw-literal
  if (!opts.word) throw 'Input is required for the search.';

  const queryString = `${word}+language:${language}`;

  const response = await request({
    method: "GET",
    url: "/search/repositories",
    q: queryString,
    sort: sort,
  });

  return response;
}

export default getSearchedRepositories;