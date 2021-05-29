const path = require('path');
const express = require('express'); 
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controller');

require('dotenv').config()


const app = express();
const port = process.env.PORT || 3000;;


// its deploying on  heroku
// you dum pice of shit // 

const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'There will be NO more Group projects',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));




app.use(routes);


sequelize.sync({force: false}).then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}.`)
  }) 
})

