const express = require('express');
const Tarea = require('./Modelos/Tarea');

const app = express();


app.use(express.json());

//ruta de acceso
//codigo de respuestas -- > 200,401,500, 404, etc 
//response y requet 
//manjo de errores 


//get 

app.get('/tareas', async (req, res) => {

    try {

        //select * from Tarea;
        const tareas = await Tarea.findAll();

        if (tareas.length === 0) {
            return res.status(402).json({
                message: 'No hay tareas',
            });
        }

        res.status(200).json(tareas);

    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener las tareas',
            error: error.message
        });
    }

})

app.post('/tareas', async (req, res) => {
    try {

        console.log(req.body);

        //insert into Tarea (titulo, descripcion, fecha, estado) values (?, ?, ?, ?);

        const tarea = await Tarea.create(req.body);
        res.status(200).json(tarea);

    } catch (error) {
        res.status(500).json({
            message: 'Error al guardar las tareas',
            error: error.message
        });
    }

})

app.put('/tareas/:id', async (req, res) => {
    try {

        //update Tarea set titulo = ?, descripcion = ?, fecha = ?, estado = ? where id = ?;

        const [updated] = await Tarea.update(req.body,
            { where: { id: req.params.id } }
        );

        if (updated) {
            return res.status(200).json({
                message: 'Tarea actualizada correctamente',
            });
        }
        else {
            return res.status(402).json({
                message: 'Tarea no encontrada',
            });
        }


    } catch (error) {
        res.status(500).json({
            message: 'Error al guardar las tareas',
            error: error.message
        });
    }

})

app.delete('/tareas/:id', async (req, res) => {
    try {

        //delete from Tarea where id = ?;

        const deleted = await Tarea.destroy({
            where: { id: req.params.id }
        });

        if (deleted) {
            return res.status(200).json({
                message: 'Tarea eliminada correctamente',
            });
        }
        else {
            return res.status(402).json({
                message: 'Tarea no encontrada',
            });
        }

    } catch (error) {

        res.status(500).json({
            message: 'Error al eliminar la tarea',
            error: error.message
        });
    }
})





app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});