const { Zona } = require('../config/Sequelize');
const { msgValue, msgError, msgSimple } = require('../utils/utils')

const agregarZona = (req, res) => {
    let zona = req.body;
    Zona.build(zona).save()
        .then(zonaCreada => {
            res.status(200)
                .json({
                    ok: true,
                    contenido: zonaCreada,
                    Mensaje: "Zona creada correctamente"
                })
        })
        .catch(error => {
            res.status(500).json({
                ok: false,
                contenido: error,
                mensaje: `Ha ocurrido un error. ${error}`
            })
        })
}
const listarZonas = (req, res) => {
    Zona.findAll({
        where: { estado: true },
        attributes: {
            exclude: ['estado', 'createdAt', 'updatedAt']
        }
    })
        .then(zonas => {
            res.status(200).json({
                ok: true,
                contenido: zonas
            })
        })
        .catch(error => {
            res.status(500).json({
                ok: false,
                contenido: error,
                mensaje: `Error al momento de listar`
            })
        })
}
const eliminarZona = (req, res) => {
    const zona = req.params;
    Zona.findOne({
        where: {
            id: zona.id,
            estado: true
        }
    })
        .then(zonaFounded => {
            console.log(zonaFounded);
            if (zonaFounded) {
                zonaFounded.estado = false;
                zonaFounded.save()
                    .then(zonaUpdated => msgSimple(res, 200, 'Registro eliminado correctamente'))
                    .catch(error => {
                        res.status(501).json({
                            ok: false,
                            contenido: error,
                            mensaje: `Error al eliminar registro`
                        })
                    })
            } else {
                res.status(401).json({
                    ok: false,
                    mensaje: `El registro con id ${zona.id} no existe`
                })
            }
        })
        .catch(error => {
            res.status(500).json({
                ok: false,
                contenido: error,
                mensaje: `Error al eliminar registro`
            })
        })
}
const buscarZona = (req, res) => {
    const zona = req.params;
    Zona.findOne({
        where: {
            id: zona.id,
            estado: true
        }
    })
        .then(zonaFounded =>
            (zonaFounded)
                ? msgValue(res, 200, zonaFounded)
                : msgSimple(res, 404, `El registro con id no ${zona.id} existe`, false)
        )
        .catch(error => msgError(res, error));
}
const editarZona = (req, res) => {
    const zona = req.body;
    console.log(zona);
    Zona.findOne({
        where: {
            id: zona.id,
            estado: true
        }
    })
        .then(zonaFounded => {
            if (zonaFounded) {
                zonaFounded.nombre = zona.nombre || zonaFounded.nombre;
                zonaFounded.descripcion = zona.descripcion || zonaFounded.descripcion;
                zonaFounded.save()
                    .then(zonaUpdated => msgValue(res, 200, zonaUpdated))
                    .catch(error => msgError(res, error))
            } else {
                msgSimple(res, 404, `El registro con id ${zona.id} no existe`)
            }
        })
        .catch(error => msgError(res, error))
}

module.exports = {
    agregarZona,
    listarZonas,
    eliminarZona,
    buscarZona,
    editarZona
}