let Annonce = require('../Models/Objects/annonce')
// let Annonce = require('../Models/Objects/annonce')

exports.index = function(req, res, ttt){
	/* response.render('pages/home/index',{test:"salut"})*/
	res.end("<h1>coucou</h1>")

}

exports.find = function(req, res, db){
	/* response.render('pages/home/index',{test:"salut"})*/
	// let a = Annonce.create()

	Annonce.find(db, {"message":"/Annonce/all", "filterObject":{"dispo":true}},
		(etape, result)=>{
			console.log("etape :" + etape + ", " + result.length +" annonces selectionnés")
			let annonce =[]
			for(let e of result)
				annonce.push(e)
			let json=JSON.stringify(annonce)
			res.setHeader('Access-Control-Allow-Origin','*')
			res.send(json)
		})

}
