import { request } from "@octokit/request";

async function getSearchedRepositories(opts = {}) {
  const {
    word,
    language = '',
    sort = 'best-match'
  } = opts;

  const assembledString = opts.word ? `${word}+language:${language}&sort=${sort}` : 'q';

  const response = await request({
    method: "GET",
    url: "/search/repositories",
    q: assembledString
  });

  console.log('response', response);
  // response.data.items = [{id, name, description, language, stargazers_count, html_url, owner: {id, login} }]
  // response.status
}

export default getSearchedRepositories;