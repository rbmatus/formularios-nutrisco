/* =========================================================
   DATOS DE LA PÁGINA — este es el único archivo que debes
   actualizar cada vez que cambie la lista de faltantes.
   ========================================================= */

// Correo al que llegan las justificaciones de los supervisores
const CORREO_DESTINO = "tu.correo@empresa.cl";

// Período que se muestra en el encabezado
const PERIODO = "Octubre 2026";

// Opciones que el supervisor puede elegir en la columna PERMISO
const OPCIONES_PERMISO = [
  "Formulario Realizado",
  "Problemas App",
  "Licencia médica",
  "Vacaciones / Permiso administrativo",
  "Local cerrado o sin acceso",
  "Sin reposición en ruta",
  "Otro (detallar en comentario)"
];

// Lista de formularios faltantes.
// Columnas: fecha, formulario, mercaderista, local, supervisor, permiso
// Deja permiso: "" cuando aún no hay justificación.
// (Datos de ejemplo: reemplázalos por los tuyos)
const REGISTROS = [
  { fecha: "02-10-2026", formulario: "Gestión Góndola",       mercaderista: "Camila Fernanda Soto Pérez",     local: "0655 Hiper Lider - Caparrosa 355, Antofagasta", supervisor: "Carolina Méndez",   permiso: "" },
  { fecha: "03-10-2026", formulario: "Quiebre de Stock",      mercaderista: "Camila Fernanda Soto Pérez",     local: "0655 Hiper Lider - Caparrosa 355, Antofagasta", supervisor: "Carolina Méndez",   permiso: "" },
  { fecha: "05-10-2026", formulario: "Gestión Góndola",       mercaderista: "Luis Alberto Carrasco Díaz",     local: "Jumbo Antofagasta - Av. Angamos 745",          supervisor: "Carolina Méndez",   permiso: "Problemas App" },
  { fecha: "06-10-2026", formulario: "Gestión Góndola",       mercaderista: "Jorge Andrés Molina Reyes",      local: "204 Tottus - Serrano 395, Melipilla",           supervisor: "Rodrigo Fuentes",   permiso: "Formulario Realizado" },
  { fecha: "06-10-2026", formulario: "Precio y Promoción",    mercaderista: "Jorge Andrés Molina Reyes",      local: "204 Tottus - Serrano 395, Melipilla",           supervisor: "Rodrigo Fuentes",   permiso: "" },
  { fecha: "08-10-2026", formulario: "Exhibición Adicional",  mercaderista: "Marcela Ivonne Tapia Guzmán",    local: "Santa Isabel Talagante - Balmaceda 1020",       supervisor: "Rodrigo Fuentes",   permiso: "" },
  { fecha: "07-10-2026", formulario: "Gestión Góndola",       mercaderista: "Fernanda Paz Orellana Vera",     local: "347 Unimarc Silva Carvallo",                   supervisor: "Paula Saavedra",    permiso: "Problemas App" },
  { fecha: "09-10-2026", formulario: "Fotografía de Sala",    mercaderista: "Fernanda Paz Orellana Vera",     local: "347 Unimarc Silva Carvallo",                   supervisor: "Paula Saavedra",    permiso: "" },
  { fecha: "01-10-2026", formulario: "Gestión Góndola",       mercaderista: "Héctor Manuel Bustos Lagos",     local: "Lider Express - Gran Avenida 6150",            supervisor: "Matías Contreras",  permiso: "" },
  { fecha: "02-10-2026", formulario: "Gestión Góndola",       mercaderista: "Héctor Manuel Bustos Lagos",     local: "Lider Express - Gran Avenida 6150",            supervisor: "Matías Contreras",  permiso: "" },
  { fecha: "03-10-2026", formulario: "Quiebre de Stock",      mercaderista: "Héctor Manuel Bustos Lagos",     local: "Lider Express - Gran Avenida 6150",            supervisor: "Matías Contreras",  permiso: "" },
  { fecha: "10-10-2026", formulario: "Precio y Promoción",    mercaderista: "Rosa Elena Cárcamo Pinto",       local: "Tottus La Florida - Av. Vicuña Mackenna 7110", supervisor: "Matías Contreras",  permiso: "" },
  { fecha: "04-10-2026", formulario: "Gestión Góndola",       mercaderista: "Diego Ignacio Parra Toledo",     local: "Unimarc Rancagua - Av. Brasil 950",            supervisor: "Javiera Riquelme",  permiso: "Licencia médica" },
  { fecha: "05-10-2026", formulario: "Gestión Góndola",       mercaderista: "Diego Ignacio Parra Toledo",     local: "Unimarc Rancagua - Av. Brasil 950",            supervisor: "Javiera Riquelme",  permiso: "Licencia médica" },
  { fecha: "08-10-2026", formulario: "Exhibición Adicional",  mercaderista: "Andrea Belén Salinas Cortés",    local: "Jumbo Viña del Mar - 15 Norte 961",            supervisor: "Ignacio Bravo",     permiso: "" },
  { fecha: "11-10-2026", formulario: "Gestión Góndola",       mercaderista: "Andrea Belén Salinas Cortés",    local: "Jumbo Viña del Mar - 15 Norte 961",            supervisor: "Ignacio Bravo",     permiso: "" },
  { fecha: "07-10-2026", formulario: "Fotografía de Sala",    mercaderista: "Pablo Esteban Navarro Lillo",    local: "Lider Concepción - Av. Paicaví 3001",          supervisor: "Daniela Muñoz",     permiso: "" },
  { fecha: "09-10-2026", formulario: "Quiebre de Stock",      mercaderista: "Pablo Esteban Navarro Lillo",    local: "Lider Concepción - Av. Paicaví 3001",          supervisor: "Daniela Muñoz",     permiso: "Formulario Realizado" },
  { fecha: "06-10-2026", formulario: "Gestión Góndola",       mercaderista: "Claudia Andrea Figueroa Sanhueza", local: "Santa Isabel Temuco - Caupolicán 0450",     supervisor: "Felipe Araya",      permiso: "" },
  { fecha: "12-10-2026", formulario: "Precio y Promoción",    mercaderista: "Tomás Alejandro Gallardo Ruiz",  local: "Tottus Puerto Montt - Av. Presidente Ibáñez 600", supervisor: "Constanza Vidal", permiso: "" },
  { fecha: "13-10-2026", formulario: "Gestión Góndola",       mercaderista: "Tomás Alejandro Gallardo Ruiz",  local: "Tottus Puerto Montt - Av. Presidente Ibáñez 600", supervisor: "Constanza Vidal", permiso: "" },
  { fecha: "03-10-2026", formulario: "Exhibición Adicional",  mercaderista: "Verónica Isabel Aguilera Mora",  local: "Unimarc La Serena - Av. Francisco de Aguirre 0210", supervisor: "Sebastián Pino", permiso: "Local cerrado o sin acceso" },
  { fecha: "10-10-2026", formulario: "Gestión Góndola",       mercaderista: "Ricardo Antonio Espinoza Rivas", local: "Lider Maipú - Av. Pajaritos 3195",             supervisor: "Valentina Rojas",   permiso: "" },
  { fecha: "14-10-2026", formulario: "Fotografía de Sala",    mercaderista: "Ricardo Antonio Espinoza Rivas", local: "Lider Maipú - Av. Pajaritos 3195",             supervisor: "Valentina Rojas",   permiso: "" }
];

// Supervisores que deben aparecer aunque no tengan faltantes
const SUPERVISORES = [
  "Carolina Méndez", "Rodrigo Fuentes", "Paula Saavedra", "Matías Contreras",
  "Javiera Riquelme", "Ignacio Bravo", "Daniela Muñoz", "Felipe Araya",
  "Constanza Vidal", "Sebastián Pino", "Valentina Rojas", "Cristóbal Leiva"
];
