import { request } from "@octokit/request";

async function getRepositories(opts = {}) {
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
}

export default getRepositories;