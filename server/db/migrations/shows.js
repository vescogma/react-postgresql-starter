exports.up = (knex, Promise) => {
  return knex.schema.createTable('shows', table => {
    table.increments();
    table.string('name').notNullable().unique();
    table.string('channel').notNullable();
    table.string('genre').notNullable();
    table.integer('rating').notNullable();
  });
};

exports.down = (knex, Promise) => knex.schema.dropTable('shows');
