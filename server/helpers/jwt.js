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
  };
  const token = jwt.encode(payload, process.env.SECRET);
  return token;
};

// --------------------------------------------------------------------------
module.exports.decodeToken = (token) => {
  const tokenAux = token.replace(/['"]+/g, "");
  const payload = jwt.decode(tokenAux, process.env.SECRET);
  if (payload.exp <= moment().unix()) {
    throw new Error("Expired token");
  }
  return payload;
};
