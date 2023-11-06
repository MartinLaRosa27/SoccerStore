const jwt = require("jwt-simple");
const moment = require("moment");

// ---------------------------------------------------------------------------
module.exports.createToken = (usuario) => {
  const payload = {
    _id: usuario._id,
    email: usuario.email,
    nombre: usuario.nombre,
    direccion: usuario.direccion,
    telefono: usuario.telefono,
    piso: usuario.piso,
    exp: moment().unix() + process.env.TOKEN_EXP_SEC,
  };
  const token = jwt.encode(payload, process.env.SECRET);
  return token;
};
