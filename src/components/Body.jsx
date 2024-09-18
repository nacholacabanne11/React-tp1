import React from "react";
function Body() {
    return (
    <>
    <body>
    <form id="formulario">
      <label >Nombre</label>
      <input name="Nombre" class="form" /><br />
      <label >Apellido</label>
      <input name="Apellido"class="form" /><br />
      <label >Email</label>
      <input type="email" name="email" class="form"/><br />
      <label >Telefono</label>
      <input name="Telefono" class="form"/><br />
      <label >Contraseña</label>
      <input name="contraseña" class="form" /><br />
      <label >Confirmar contraseña</label>
      <input name="contraseña" class="form"/><br /><br />
      <input type="submit" value="confirmar" class="boton" />
    </form>
    
    </body>
    </>
    )
}
export default Body