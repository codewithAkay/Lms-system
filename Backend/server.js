const  dotenv=require( 'dotenv')
dotenv.config()
const  express=require( 'express')
const  router=require( './routes/router.js')
const   cors=require( 'cors')

const app=express()

const port=process.env.PORT 

// const DATABASE_URL=process.env.DATABASE_URL

// connectDb(DATABASE_URL)

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.use('/',router)


app.listen(port,()=>{
    console.log(`The Server is Running at http://localhost:${port}`)
})