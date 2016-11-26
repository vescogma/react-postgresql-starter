import { get } from 'utils/fetcher';

export function getShows(id) {
  let url = '/shows';
  if (id) {
    url = url + '/' + id;
  }
  return get(url);
}