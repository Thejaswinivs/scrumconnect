# scrumconnect Node Assessment test

# dependencies
1. Nodejs
2. Mongodb
3. Angular

# NodeJS

  1. Express
  2. Mongoose -> Object Oriened Schemas
  3. Cors
  4. body-parser
  
  mongoose.connect
  mongoose.connection.on('connected')
  mongoose.connection.on('error')
  
  app.listen(port, function () {
    console.log("Connected to the port::: " + port);
})
  

# MongoDB
  
  1. Install and confugure the --dbpah settings
  2. Observe wether the port is connected to 27017
  
  router.post('/adduser', (req, res,next)=> {
    let user = new User({
        name: req.body.name,
        sex: req.body.sex,
        age: req.body.age,
        country: req.body.country,
        dateCreated: new Date().valueOf()
    });

    user.save((err, user)=> {
        if(err) {
            res.json({msg: "Failed to save User details"});
        } else {
            res.json({msg: user.name + " Thankyou for applying to this useful government service"});
        }
    });
});




 # Execution steps:
 
 1. install Nodejs and Mongodb - set the dbpath
 2. run npm install to the current directory
 3. goto client directory
      # npm start
      if we get any errors, Run npm install @angular/cli 
  
  # tested on Postman
  download the postman chrome extension
  
  1. localhost:3000/api/adduser
  
  


  
  
 # Angular
 1. used for presentation layer
 2. Create a service to make an api call to mongodb
 3. handle the responses.
 
 

