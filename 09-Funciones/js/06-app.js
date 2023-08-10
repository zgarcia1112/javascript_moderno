function saludar(nombre = "no definido", apellido = "no definido") {
  // en los parametros se puede definir valores por defaul,
  //si no los agregaramos no nos enavia un error sin embargo nos enviara un undefined
  console.log(`Hola  ${nombre} ${apellido}`);
}

saludar("jenny", "flores");
saludar();
