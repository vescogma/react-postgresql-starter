import createTypes from 'utils/createTypes';

export const DATA = createTypes('DATA', [
  'GET_PENDING',
  'GET_SUCCESS',
  'GET_ERROR',
]);

export const API = createTypes('API', [
  'GET',
]);