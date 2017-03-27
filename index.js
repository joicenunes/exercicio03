const express = require("express");
const app = express();

const config = require("./knexfile");
const knex = require("knex")(
  config.staging 
);

var listarpessoas = function(){
    return knex("pessoa").select();
}

app.get("/listar", (req,res) => {
    listarpessoas().then((ret) => res.send(ret))
});

var inserirpessoa = function(q){
    return knex("pessoa").insert(q, "idpessoa");
}

app.get("/salvar", (req,res) => {
    inserirpessoa(req.query).then((ret) => res.send(ret))  
});

app.get("/hello", function(req, res) {
	res.send("Hello World!");
})

app.listen(1997);
