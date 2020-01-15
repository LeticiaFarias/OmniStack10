const { Router } = require('express');
const axios = require('axios');
const Dev = require('./models/Dev');

const routes = Router();

//async digo que a api pode demorar para responder
routes.post('/devs', async (request, response) => {
   const { github_username, techs, latitude, longitude } = request.body;
   // await digo que deve esperar a resposta para seguir com o codigo
   const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

   const { name = login, avatar_url, bio } = apiResponse.data;

   const techsArray = techs.split(',').map(tech => tech.trim());

   const location = {
      type: 'Point',
      coordinates: [longitude, latitude]
   }

   const dev = await Dev.create({
      github_username,
      name,
      avatar_url,
      bio,
      techs: techsArray,
      location
   });

   return response.json(dev);
});

module.exports = routes;