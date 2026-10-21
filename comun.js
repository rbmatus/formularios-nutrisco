/* =========================================================
   Funciones compartidas por todas las páginas del sitio
   ========================================================= */

window.Comun = (function () {
  const SIN_SUPERVISOR = "Sin supervisor";
  const DIAS_ALERTA = 7;   // aviso si los datos tienen más de estos días

  const limpiar = (t) => String(t == null ? "" : t).replace(/ /g, " ").replace(/\s+/g, " ").trim();
  const sinTildes = (t) => String(t).normalize("NFD").replace(/[̀-ͯ]/g, "");
  const clave = (t) => sinTildes(limpiar(t)).toLowerCase();                       // para comparar nombres
  const slug = (t) => clave(t).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); // para los links
  const normTitulo = (t) => sinTildes(t).toUpperCase().replace(/[^A-Z0-9]/g, "");
  const esc = (t) => String(t).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const miles = (n) => Number(n).toLocaleString("es-CL");
  const plural = (n, uno, varios) => `${miles(n)} ${n === 1 ? uno : varios}`;
  const fechaLarga = (iso) => `${iso.slice(8, 10)}-${iso.slice(5, 7)}-${iso.slice(0, 4)}`;

  function traer(archivo) {
    return fetch(archivo, { cache: "no-cache" }).then((r) => {
      if (!r.ok) throw new Error(`No se encontró ${archivo}`);
      return r.arrayBuffer();
    });
  }

  // supervisores.xlsx: MERCADERISTA → SUPERVISOR. Es opcional: si no está, devuelve una lista vacía.
  function leerSupervisores() {
    return traer("supervisores.xlsx").then((buf) => {
      const libro = XLSX.read(buf, { type: "array" });
      const filas = XLSX.utils.sheet_to_json(libro.Sheets[libro.SheetNames[0]], { header: 1, defval: "" });
      const h = (filas[0] || []).map(normTitulo);
      const iM = h.indexOf("MERCADERISTA"), iS = h.indexOf("SUPERVISOR");
      const mapa = new Map();
      if (iM < 0 || iS < 0) return mapa;
      filas.slice(1).forEach((f) => {
        const sup = limpiar(f[iS]);
        if (limpiar(f[iM]) && sup && clave(sup) !== clave(SIN_SUPERVISOR)) mapa.set(clave(f[iM]), sup);
      });
      return mapa;
    }).catch(() => new Map());
  }

  // Muestra "Datos hasta el …" bajo el título y avisa si son antiguos
  function marcarFecha(iso, prefijo = "Datos hasta el") {
    const el = document.getElementById("fechaDatos");
    if (!el || !iso) return;
    const [a, m, d] = iso.split("-").map(Number);
    const hoy = new Date(); hoy.setHours(0, 0, 0, 0);
    const dias = Math.round((hoy - new Date(a, m - 1, d)) / 86400000);
    el.innerHTML = `${prefijo} <strong>${fechaLarga(iso)}</strong>` +
      (dias > DIAS_ALERTA ? `<span class="alerta-datos">Tienen ${dias} días de antigüedad</span>` : "");
  }

  function listo() {
    const c = document.getElementById("cargando");
    if (c) c.hidden = true;
  }

  // En el celular el menú se desliza de lado: lo deja mostrando la sección actual
  function centrarMenu() {
    const menu = document.querySelector(".menu"), activo = menu && menu.querySelector("[aria-current]");
    if (menu && activo && menu.scrollWidth > menu.clientWidth) menu.scrollLeft = activo.offsetLeft - menu.offsetLeft - 16;
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", centrarMenu); else centrarMenu();

  return { SIN_SUPERVISOR, limpiar, sinTildes, clave, slug, normTitulo, esc, miles, plural, fechaLarga, traer, leerSupervisores, marcarFecha, listo };
})();
