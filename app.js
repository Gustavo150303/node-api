import express from "express";

const app = express();
app.use(express.json());

app.get("/",(req,res) => {
    res.status(200).send("OK");
});

app.post("/carros", (req,res) => {
    carros.push(req.body);
    res.status(201).send("Cadastro com sucesso!");
});

const carros = [
    {
        id: 1,
        marca: "Fiat",
        modelo: "Uno"
    },
    {
        id: 2,
        marca: "Honda ",
        modelo: "Fit"
    },
    {
        id: 3,
        marca: "BMW",
        modelo: "Z4"
    }
]

function buscaCarro(id){
    return carros.findIndex(carros => {
        return carros.id === Number(id);
    })
}

/*app.get("/carros",(req,res) => {
    res.status(200).json(carros);
});*/

app.route("/carros/:id")
    .get((req,res) => {
        const id = buscaCarro(req.params.id);
        res.status(200).json(carros[id]);
})
.put((req,res) => {
    const id = buscaCarro(req.params.id);
    carros[id].marca = req.body.marca;
    carros[id].modelo = req.body.modelo;
    res.status(200).json(carros[id]);
})
.delete((req,res) => {
    const id = buscaCarro(req.params.id);    
    if(carros[id]){
        carros.splice(id,1);
        res.status(200).send("Removido com sucesso");
    }else{
        res.status(404).send("Carro não encontrado!")
    }    
});

export default app; 