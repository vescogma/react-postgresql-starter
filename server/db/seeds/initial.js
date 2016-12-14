exports.seed = (knex, Promise) => {
  return knex('shows').del().then(() => Promise.all([
    knex('shows').insert({
      name: 'Broad City',
      channel: 'Comedy Central',
      genre: 'Comedy',
      rating: 3,
    }),
    knex('shows').insert({
      name: 'Game of Thrones',
      channel: 'HBO',
      genre: 'Fantasy',
      rating: 4,
    }),
    knex('shows').insert({
      name: 'Westworld',
      channel: 'HBO',
      genre: 'Science Fiction',
      rating: 5,
    }),
    knex('shows').insert({
      name: 'Walking Dead',
      channel: 'AMC',
      genre: 'Drama',
      rating: 4,
    }),
  ]));
};
