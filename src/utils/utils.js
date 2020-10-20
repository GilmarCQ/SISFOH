// const jwt = require('jsonwebtoken');
// var tokenString = 'utils';
// verificarToken = (token) => {
//     try {
//         let data = jwt.verify(token, tokenString, { algorithms: 'RS256' });
//         return data;
//     } catch (error) {
//         return null;
//     }
// }

// wachiman = (req, res, next) => {
//     if (req.headers.authorization) {
//         let token = req.headers.authorization.split(' ')[1];
//         let resultado = verificarToken(token);
//         if (resultado) {
//             next();
//         } else {
//             res.status(401).json({
//                 ok: false,
//                 mensaje: 'No esta autorizado para realizar la soliciitud'
//             })
//         }
//     } else {
//         res.status(401).json({
//             ok: false,
//             mensaje: 'Necesitar estar autenticado para realiazr esta operación'
//         })
//     }
// }
const msgError = (res, error, msgNumber = 500) => {
    res.status(msgNumber).json({
        ok: false,
        contenido: error,
        mensaje: "Ocurrio un error en el servidor" + error
    })
}
const msgSimple = (res, msgNumber, msgDescription, msgEstado) => {
    res.status(msgNumber).json({
        ok: msgEstado,
        mensaje: msgDescription
    })
}
const msgValue = (res, msgNumber, msgContenido, msgDescription, msgEstado = true) => {
    res.status(msgNumber).json({
        ok: msgEstado,
        contenido: msgContenido
    })
}


module.exports = {
    // verificarToken,
    // wachiman,
    msgError,
    msgSimple,
    msgValue
}

