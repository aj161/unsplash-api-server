'use strict';

const superagent = require('superagent');

class Photo {
  constructor(data) {
      this.name=data.user.name;
      this.imageUrl=data.urls.full;
      this.description=data.alt_description;
  }
}

//localhost:3000/searchimage?title=office
async function searchhandler(req,res) {
    //https://api.unsplash.com/photos/?client_id=VaA9dYtebX-3q44ExI5wCAfRysEBv6D8y7jSj1_8KG4&search/searchImage?title=book
    const key=process.env.UNSPLASH_API_KEY;
    const searchWord= req.query.title;
      const url = `https://api.unsplash.com/search/photos?page=1&query=${searchWord}&client_id=${key}`
    let searchInfo = await superagent.get(url);
    let searchData=searchInfo.body.results;
    let imageSummary = searchData.map((item) => {
      // return new Photo(item);
      return new Photo(item);
      // return item.urls.full
    })

    
    res.status(200).send(imageSummary);
}

//localhost:3000/searchimage?title=office
async function randomhandler(req,res) {
  //https://api.unsplash.com/photos/random?client_id=VaA9dYtebX-3q44ExI5wCAfRysEBv6D8y7jSj1_8KG4
  const key2=process.env.UNSPLASH_API_KEY;
  const url = `https://api.unsplash.com/photos/random?client_id=${key2}`
  let searchInfo = await superagent.get(url);
  let searchData=searchInfo.body;
  let imageSummary = new Photo(searchData);
  res.send(imageSummary);
}



module.exports = {searchhandler,randomhandler};