const  dotenv=require( 'dotenv')
dotenv.config()
const  express=require( 'express')
const  router=require( './routes/router.js')
const   cors=require( 'cors')

const bodyParser = require('body-parser');

const mongoose = require ('mongoose')

const app=express()

app.use(bodyParser.json());
dotenv.config({ path: '.env' });


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
		


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.use('/',router)


app.listen(port,()=>{
    console.log(`The Server is Running at http://localhost:${port}`)
})