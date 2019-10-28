let mongo = require("mongoose");
//mongod --dbpath=D:/sjk
mongo.connect("mongodb://127.0.0.1/xiaoniu02",{useUnifiedTopology:true,useNewUrlParser: true})
mongo.connection.on("connected",err=>{
	console.log("欢迎回家")
})


let adminHead = mongo.Schema({
	time:{
		type:Date,
		default:new Date()
	},
	userName:String,
	pwd:String,
	address:{
		type:String,
		default:"信阳"
	}
})

let admin = mongo.model("admin",adminHead)

let userHead = mongo.Schema({
	userName:String,
	pwd:String,
	tel:Number,
	regTime:{
		type:Date,
		default:new Date()
	}
})
let user = mongo.model("user",userHead)


let goodsHead = mongo.Schema({
	goodsName:String,
	price:Number,
	color:String,
	detail:String,
	store:Number,
	pic:String,
	time:{
		type:Date,
		default:new Date()
	}
})
let goods = mongo.model("goods",goodsHead)

let carHead = mongo.Schema({
	goodsName:String,
	price:Number,
	pic:String,
	user:String,
	count:Number,
	time:{
		type:Date,
		default:new Date()
	}
})
let shopcar = mongo.model("shopcar",carHead)


module.exports={admin,user,goods,shopcar}

