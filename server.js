const path = require('path');
const express = require('express'); 
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controller');
const calendar = document.querySelector(".time-block")
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












const isWeekend = day => {
    return day % 7 === 6 || day % 7 ===0;

}

const getDayName = day => {
    const date = new Date(Date.UTC(2021, 0, day));

       return new Intl.DateTimeFormat("en-US", { weekday: "short" })
    .format(date);
}


//console.log 
for (let day = 1; day <= 31; day ++) {

    let weekend = isWeekend(day)

   let name = "";
    if (day < 7){ 
        const dayName = getDayName(day);
        name = `<div class="name">${dayName}</div>`
    }
    
}


document.querySelectorAll("#time-block .day").forEach(day => { day.addEventListener("click", event => { event.currentTarget.classList.toggle("selected");});
const isWeekend = day => {
    return day % 7 === 6 || day % 7 ===0;

}

const getDayName = day => {
    const date = new Date(Date.UTC(2021, 0, day));

       return new Intl.DateTimeFormat("en-US", { weekday: "short" })
    .format(date);
}






});