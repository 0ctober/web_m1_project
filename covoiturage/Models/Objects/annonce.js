class Annonce {

	static create (content){
		db.MongoClient.connect(db.url, (err, db)=>{
			console.log("appel")
			res.end(db.find())
		})
	}

	// static find(db,param, callback){
	// 	console.log("- test -------------------------------------")
	// 	let cursor = db.collection("annonce")
	// 		.find(param["filterObject"])
	// 		.toArray((err, documents)=>{
	// 			if(err) callback(err, [])
	// 				else if(documents !== undefined)
	// 					callback(param["message"], documents)
	// 				else callback(param["message"], [])
	// 		})
	// }
	
	static find(db,param, callback){
		console.log("- test -------------------------------------")
		let cursor = db.collection("annonce")
			.find(param["filterObject"])
			.toArray((err, documents)=>{
				if(err) callback(err, [])
					else if(documents !== undefined)
						callback(param["message"], documents)
					else callback(param["message"], [])
			})
	}

}
module.exports = Annonce