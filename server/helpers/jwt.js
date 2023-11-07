const jwt = require("jwt-simple");

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
