import { API_BASE_URL } from 'constants';

const defaultOptions = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  credentials: 'include',
};

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  return response.json().then(err => {
    const error = new Error(response.statusText);
    error.response = err || {};
    throw error;
  });
}

function fetcher(endpoint, config = {}, json = true) {
  const options = defaultOptions;
  Object.keys(config).forEach(key => {
    options[key] = config[key];
  });
  return fetch(`${ API_BASE_URL }${ endpoint }`, options)
    .then(checkStatus)
    .then(res => json ? res.json() : res.text());
}

export function get(endpoint) {
  const config = { method: 'GET' };
  return fetcher(endpoint, config);
}

export function post(endpoint, body = {}) {
  const config = { method: 'POST', body: JSON.stringify(body) };
  return fetcher(endpoint, config);
}

export function put(endpoint, body = {}) {
  const config = { method: 'PUT', body: JSON.stringify(body) };
  return fetcher(endpoint, config);
}

export function destroy(endpoint) {
  const config = { method: 'DELETE' };
  return fetcher(endpoint, config);
}
