const  dotenv=require( 'dotenv')
dotenv.config()
const  express=require( 'express')
const router=require("./routes/router")
const   cors=require( 'cors')

const bodyParser = require('body-parser');

const mongoose = require ('mongoose')

const app=express()


const port=process.env.PORT 

mongoose.connect(
	// mongo db uri to connect our database
	process.env.MongoDB_URI,
	{
		useNewUrlParser: true,
		//useCreateIndex: true,
		////useFindAndModify: false,
		//seUnifiedTopology: true,
	}
	)
	.then(db => console.log('Database is connected successfully'))
	.catch(err => console.log(err))
	
	
	app.use(function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		next();
	  });
	app.use(express.json({ limit: '100mb' }));
	app.use(express.urlencoded({ limit: '100mb', extended: true }));
	app.use(cors())
	app.use('/',router)



app.listen(port,()=>{
    console.log(`The Server is Running at http://localhost:${port}`)
})