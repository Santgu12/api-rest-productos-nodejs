const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./config/db.js");

app.use(cors());
app.use(express.json());

const productosRoutes = require("./routes/productosRoutes");
app.use("/productos", productosRoutes);


app.get("/", (req, res)=> {
    res.json({
        mensaje: "aPI de productos funcionando correctamente"
    })
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en puerto ${PORT}`);
});