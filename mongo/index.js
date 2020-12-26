const mongoose = require('mongoose');
const { MONGO_URI } = require('./config');
const axios = require('axios').default;
const cheerio = require('cheerio');
const cron = require('node-cron');
const uriString = 'mongodb+srv://juan:3012343209@cluster0.8w5gz.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(uriString, {useNewUrlParser: true});

const { BreakingNew } = require('./models');

//0 */4 * * *
cron.schedule("* * * * * *", async () => {
  console.log("Cron Job Executed!");
  const html = await axios.get("https://cnnespanol.cnn.com/");
  const $ = cheerio.load(html.data);
  const titles = $('.news__title');
  titles.each((index, element)=>{
    const breakingNew = {
      title: $(element).text().toString(),
      link: $(element).children().attr('href')
    }
  
    BreakingNew.create([breakingNew]);
  });
})
