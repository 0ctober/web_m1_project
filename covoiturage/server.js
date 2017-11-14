// [i] Express
let express = require('express')
let app = express()
app.set("view engine", 'ejs') 					// Moteur de template
app.use('/assets', express.static('public'))	// Réglage des dossiers
let cors = require('cors')
app.use(cors())
// [i] Mangodb
let MongoClient = require('mongodb').MongoClient
let url = "mongodb://localhost:27017/model"
// [i] Les Routes
let routes = require('./View/routes')
// [i] Les Modèles



MongoClient.connect(url, (err, db)=>{
	// let Routes
	// app.get('/', routes.index)
	app.get('/', (req,res)=>{
		routes.find(req, res, db)
	})
	console.log("--------------------------------------------")
	// app.get('/login', routes.index)
	// app.get('/register', routes.index)
	// app.get('/member', routes.index)
	// app.get('/profil', routes.index)
	// app.get('/profil/:id', routes.index)
	// app.get('/annonce/all', routes.find)
	// app.get('/annonce/:id', routes.index)
	// app.get('/annonce/:query', routes.find)
	// app.get('/annonce/:query:page', routes.find)
	// app.get('/annonce/join', routes.index)
	// app.get('/annonce/publi', routes.index)
	// app.get('/annonce/comment', routes.index)
	// app.get('/member', routes.index)
})
app.listen(8080)