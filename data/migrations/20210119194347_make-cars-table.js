
exports.up = function(knex) {
    return knex.schema.createTable('cars', table => {
        // add primary key 'id' unique not null (int)
        // increments is automatically not nullable and unique
        table.increments();

        // add not null, unique 'name' (varchar 128)
        table.integer('VIN').notNullable().unique();

        table.string('make', 128).notNullable();

        table.string('model', 128).notNullable();

        table.float('mileage').notNullable();

        table.string('transmission', 128);

        table.string('title', 128);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars')
};


// The critical information for each car is the VIN, make, model, and mileage.
// They also track transmission type and status of the title (clean, salvage, etc.),