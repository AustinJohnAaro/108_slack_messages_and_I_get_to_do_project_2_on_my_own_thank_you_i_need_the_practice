const seedUsers = require('./user-seeds');
const seedTodos = require('./todo-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  console.log('\n----- USER SEEDED -----\n');

  await seedTodos();
  console.log('\n----- TODO SEEDED -----\n');

  process.exit(0);
};

seedAll(); 

