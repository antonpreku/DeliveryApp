const { green, red } = require('chalk');
const { db, User, Business, Order, Products, Cart, Session} = require('./server/db/index')

const seed = async () => {
  try {
    await db.sync({ force: true });  
    
    await User.create({
        userName: 'anton',
        firstName:'Anron',
        lastName: 'Preku'
    })

  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;

if (require.main === module) {
  seed()
    .then(() => {
      console.log(green('Seeding success!'));
      db.close();
    })
    .catch((err) => {
      console.error(red('Oh noes! Something went wrong!'));
      console.error(err);
      db.close();
    });
}
