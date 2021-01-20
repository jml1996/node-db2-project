
exports.seed = function(knex) {
  return knex('cars').truncate()
    .then(function () {
      return knex('cars').insert([
        {VIN: 12, make: 'Subaru', model: 'Forester', mileage: 22622.6, transmission: 'manual', title: 'Josh'},
        {VIN: 8, make: 'Subaru', model: 'Outback', mileage: 222.6, transmission: 'auto', title: 'Mike'},
        {VIN: 3, make: 'Subaru', model: 'Crosstrek', mileage: 88.6, transmission: 'auto', title: 'Bob'}
      ]);
    });
};