const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')


module.exports = {
   async indexe(request, response) {
      console.log(request.query)
      // Busca todos os devs num raio de 10km
      // Filtrar por tecnologias
      const techsArray = parseStringAsArray(techs)

      // console.log(techsArray)

      const devs = await Dev.find({
         techs: {
            $in: techsArray,
         },
         location: {
            $near: {
               $geometry: {
                  type: 'Point',
                  coordinates: [longitude, latitude],
               },
               $maxDistance: 1000,
            },
         },
      })

      return response.json({ devs: [] })


      

   }
}