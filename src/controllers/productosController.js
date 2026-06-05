const db = require("../config/db");

const getProductos = (req, res) =>{
    const sql = "SELECT * FROM productos";

    db.query(sql, (err, resultados) =>{
        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        res.status(200).json(resultados);
    })
}

const getProductoById = (req, res) => {

    const { id } = req.params;

    const sql = "SELECT * FROM productos WHERE id = ?";

    db.query(sql, [id], (err, resultados) => {

        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        if (resultados.length === 0) {
            return res.status(404).json({
                mensaje: "Producto no encontrado"
            });
        }

        res.status(200).json(resultados);

    });

};

const deleteProductById = (req, res) => {
    const { id } = req.params;
    const sql = "DELETE FROM productos WHERE id = ?";

    db.query(sql, [id], (err, resultados)=>{
        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }
                  if (resultados.affectedRows === 0) {
        return res.status(404).json({
            mensaje: "No existía ningún producto con ese id"
        });
    }

     res.status(200).json(resultados);


    });
};

const postProduct =(req, res) => {

    const { nombre, descripcion, precio, stock, categoria} = req.body;

    const sql =  ` INSERT INTO productos
    (nombre, descripcion, precio, stock, categoria)
        VALUES (?, ?, ?, ?, ?) `;
 db.query(
    sql,
    [nombre, descripcion, precio, stock, categoria],
    (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message});
        }

        res.status(201).json({
            mensaje: "Producto creado correctamente"
        });
    }
 );
};

const putProductById = (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, precio, stock, categoria } = req.body;

    const sql = `
    UPDATE productos
    SET nombre = ?,
        descripcion = ?,
        precio = ?,
        stock = ?,
        categoria = ?
    WHERE id = ?
`;

    db.query(sql
        , [nombre, descripcion, precio, stock, categoria, id],
        (err, result) => {
        if (err) {
            return res.status(500).json({
                 error: err.message
                });
        }
         if (result.affectedRows === 0) {
          return res.status(404).json({
            mensaje: "Producto no encontrado"
            });
         }
         res.status(200).json({
            mensaje: "Producto actualizado correctamente",
            id:id
         });
    });

};
module.exports = {
    getProductos,
    getProductoById,
    deleteProductById,
    postProduct,
    putProductById
};