/* datos.js · Datos del periodo: menú del calendario, tabla de raciones y equivalencias de nombres.
 *
 * Es lo único que hay que cambiar al empezar un periodo nuevo; no hace falta tocar index.html.
 * Se carga con una etiqueta <script>, así que también funciona abriendo index.html con doble clic.
 * Si algún plato del menú no está en la tabla, la página lo avisa arriba al abrirse.
 */
window.DATOS = {
  periodo: '3er periodo · curso 2026-27',

  // Calendario: un objeto por día.
  //   f = primer plato, s = segundo plato, g = guarnición (null si ese día no hay), festivo: true si es festivo.
  menu: [
  // MENÚ ORIGINAL (Octubre/Noviembre 2026)
  {date:'2026-10-05', label:'Lun 5 Oct', f:'Potaje de Lentejas con Calabaza ECO', s:'Jureles al Horno', g:'Ensalada de Lechuga y Maíz'},
  {date:'2026-10-06', label:'Mar 6 Oct', f:'Coditos con Tomate y Orégano ECO', s:'Alubias Pintas Guisadas con Arroz ECO', g:null},
  {date:'2026-10-07', label:'Mié 7 Oct', f:'Ensalada de Tomate y Queso Fresco', s:'Filete de Lomo de Cerdo al Horno', g:'Patatas a la Provenzal ECO'},
  {date:'2026-10-08', label:'Jue 8 Oct', f:'Puchero ECO', s:'Jamoncito de Pollo al Horno en Salsa', g:'Ensalada Campestre'},
  {date:'2026-10-09', label:'Vie 9 Oct', f:'Crema de Verduras', s:'Huevo Cocido con Arroz Integral y Tomate', g:'Ensalada Mézclum'},
  {date:'2026-10-12', label:'Lun 12 Oct', festivo:true, f:'Crema de Zanahoria ECO', s:'Contramuslo de Pollo Asado', g:'Ensalada de Lechuga, Tomate y Huevo cocido'},
  {date:'2026-10-13', label:'Mar 13 Oct', f:'Potaje de Alubias Blancas con Calabacín', s:'Tortilla de Patatas con Cebolla', g:'Tomate Natural'},
  {date:'2026-10-14', label:'Mié 14 Oct', f:'Ensalada de Lechuga, Tomate y Huevo cocido', s:'Albóndigas de Pollo al Horno a la Jardinera', g:'Patatas Panaderas al Vapor ECO'},
  {date:'2026-10-15', label:'Jue 15 Oct', f:'Arroz con Pisto ECO', s:'Guisadillo de Garbanzos ECO', g:'Patatas Panaderas al Vapor ECO'},
  {date:'2026-10-16', label:'Vie 16 Oct', f:'Macarrones Integrales con Tomate ECO', s:'Merluza a la Plancha en Salsa Verde', g:'Ensalada de Lechuga'},
  {date:'2026-10-19', label:'Lun 19 Oct', f:'Crema Hortelana ECO', s:'Tortilla de Patatas con Calabacín', g:'Ensalada 4 Estaciones (guarnición)'},
  {date:'2026-10-20', label:'Mar 20 Oct', f:'Coditos con Tomate y Orégano ECO', s:'Caballa al Vapor en Salsa', g:'Ensalada de Lechuga y Maíz (guarnición)'},
  {date:'2026-10-21', label:'Mié 21 Oct', f:'Ensalada de Tomate y Queso Fresco', s:'Filete de Lomo de Cerdo al Horno', g:'Patatas Panaderas al Horno a la Provenzal ECO'},
  {date:'2026-10-22', label:'Jue 22 Oct', f:'Crema de Calabaza ECO', s:'Lentejas guisadas con Arroz ECO', g:null},
  {date:'2026-10-23', label:'Vie 23 Oct', f:'Puchero ECO', s:'Tiras de Pollo al Horno Adobadas', g:'Ensalada Clásica'},
  {date:'2026-10-26', label:'Lun 26 Oct', f:'Macarrones Integrales con Tomate ECO', s:'Muslito de Pollo al Horno al Ajillo', g:'Ensalada Clásica'},
  {date:'2026-10-27', label:'Mar 27 Oct', f:'Potaje de Lentejas con Calabaza ECO', s:'Tortilla de Patatas con Cebolla', g:'Ensalada Mézclum'},
  {date:'2026-10-28', label:'Mié 28 Oct', f:'Ensalada de Lechuga, Tomate y Huevo cocido', s:'Albóndigas de Cerdo al Horno con Salsa de Tomate', g:'Patatas Panaderas al Horno a la Provenzal ECO'},
  {date:'2026-10-29', label:'Jue 29 Oct', f:'Crema de Zanahoria ECO', s:'Alubias Pintas Guisadas con Arroz ECO', g:null},
  {date:'2026-10-30', label:'Vie 30 Oct', f:'Arroz Integral a la Campesina ECO', s:'Abadejo al Horno a Las Finas Hierbas', g:'Ensalada Campestre'},
  {date:'2026-11-02', label:'Lun 2 Nov', festivo:true, f:'Crema Hortelana ECO', s:'Estofado de Cerdo en Salsa con Verduras', g:'Tomate Natural'},
  {date:'2026-11-03', label:'Mar 3 Nov', f:'Espirales Integrales con Tomate ECO', s:'Lentejas con Verduras Cocidas ECO', g:null},
  {date:'2026-11-04', label:'Mié 4 Nov', f:'Ensalada de Tomate y Queso Fresco', s:'Jamoncito de Pollo al Horno en Salsa', g:'Patatas Panaderas al Horno a la Provenzal ECO'},
  {date:'2026-11-05', label:'Jue 5 Nov', f:'Puchero ECO', s:'Merluza a la Plancha al Ajo y Perejil', g:'Ensalada 4 Estaciones (guarnición)'},
  {date:'2026-11-06', label:'Vie 6 Nov', f:'Arroz Hervido con Tomate Frito', s:'Tortilla de Patatas con Calabacín', g:'Ensalada de Lechuga y Maíz (guarnición)'},

  // NUEVO MENÚ (Imagen 3er Periodo)
  {date:'2026-11-09', label:'Lun 9 Nov', f:'Potaje de Alubias Blancas ECO', s:'Salmón al Vapor en Salsa de Cebolla y Eneldo', g:'Ensalada Clásica'},
  {date:'2026-11-10', label:'Mar 10 Nov', f:'Crema de Calabacín ECO', s:'Hamburguesa de Pavo a la Plancha con Salsa Rondeña', g:'Ensalada Campestre'},
  {date:'2026-11-11', label:'Mié 11 Nov', f:'Ensalada de Lechuga, Tomate y Maíz', s:'Solomillo de Pollo Rustido', g:'Arroz Pilaf Salteado ECO'},
  {date:'2026-11-12', label:'Jue 12 Nov', f:'Arroz Integral a la Campesina ECO', s:'Garbanzos Encebollados ECO', g:null},
  {date:'2026-11-13', label:'Vie 13 Nov', f:'Lacitos con Tomate ECO', s:'Tortilla de Patatas con Cebolla', g:'Ensalada de Lechuga'},
  {date:'2026-11-16', label:'Lun 16 Nov', f:'Potaje de Lentejas con Calabaza ECO', s:'Merluza a la Plancha en Salsa Verde', g:'Ensalada de Lechuga y Maíz (guarnición)'},
  {date:'2026-11-17', label:'Mar 17 Nov', f:'Espirales Integrales con Tomate ECO', s:'Filete de Lomo de Cerdo al Horno', g:'Patatas Panaderas al Horno a la Provenzal ECO'},
  {date:'2026-11-18', label:'Mié 18 Nov', f:'Ensalada de Tomate, Maíz y Queso Fresco', s:'Alubias Pintas Guisadas con Arroz ECO', g:null},
  {date:'2026-11-19', label:'Jue 19 Nov', f:'Crema de Verduras ECO', s:'Jamoncito de Pollo al Horno en Salsa', g:'Ensalada Campestre'},
  {date:'2026-11-20', label:'Vie 20 Nov', f:'Arroz Hervido con Tomate Frito', s:'Tortilla de Patatas con Calabacín', g:'Ensalada Mézclum'},
  {date:'2026-11-23', label:'Lun 23 Nov', f:'Potaje de Alubias Blancas con Calabacín ECO', s:'Tortilla de Patatas con Cebolla', g:'Tomate Natural'},
  {date:'2026-11-24', label:'Mar 24 Nov', f:'Crema de Zanahoria ECO', s:'Contramuslo de Pollo Asado', g:'Ensalada de Lechuga y Maíz (guarnición)'},
  {date:'2026-11-25', label:'Mié 25 Nov', f:'Ensalada de Lechuga, Tomate y Huevo cocido', s:'Albóndigas de Pollo al Horno a la Jardinera', g:'Patatas Panaderas al Vapor ECO'},
  {date:'2026-11-26', label:'Jue 26 Nov', f:'Arroz con Pisto ECO', s:'Guisadillo de Garbanzos ECO', g:null},
  {date:'2026-11-27', label:'Vie 27 Nov', f:'Macarrones Integrales con Tomate ECO', s:'Jureles al Horno Encebollados', g:'Ensalada de Lechuga'},
  {date:'2026-11-30', label:'Lun 30 Nov', f:'Puchero ECO', s:'Tortilla de Patatas con Calabacín', g:'Ensalada 4 Estaciones (guarnición)'},
  {date:'2026-12-01', label:'Mar 1 Dic', f:'Espirales Integrales con Tomate ECO', s:'Merluza a la Plancha al Ajo y Perejil', g:'Ensalada Mézclum'},
  {date:'2026-12-02', label:'Mié 2 Dic', f:'Ensalada de Tomate, Maíz y Queso Fresco', s:'Lentejas Guisadas con Arroz ECO', g:null},
  {date:'2026-12-03', label:'Jue 3 Dic', f:'Crema de Calabaza ECO', s:'Filete de Lomo de Cerdo al Horno', g:'Patatas Panaderas al Horno a la Provenzal ECO'},
  {date:'2026-12-04', label:'Vie 4 Dic', f:'Arroz Hervido con Tomate Frito', s:'Tiras de Pollo al Horno Adobadas', g:'Ensalada Clásica'}
],

  // Tabla de raciones. Cada fila: [nombre, g Infantil, g Primaria, raciones/barqueta Infantil, raciones/barqueta Primaria]
  // El segundo plato lleva solo el gramaje del plato principal; patatas, arroz y ensaladas van en "guarniciones".
  raciones: {
    primeros: [
      ["Arroz con Pisto ECO", 173, 207, 13, 11],
      ["Arroz Hervido con Tomate Frito", 165, 198, 14, 12],
      ["Arroz Integral a la Campesina ECO", 179, 214, 13, 11],
      ["Coditos con Tomate y Orégano", 150, 180, 15, 13],
      ["Crema de Calabacín ECO", 210, 210, 10, 10],
      ["Crema de Calabaza ECO", 210, 210, 10, 10],
      ["Crema de Verduras ECO", 208, 208, 11, 11],
      ["Crema de Zanahorias ECO", 210, 210, 10, 10],
      ["Crema Hortelana ECO", 210, 210, 10, 10],
      ["Ensalada de Lechuga, Tomate y Huevo cocido", 140, 140, 15, 15],
      ["Ensalada de Lechuga, Tomate y Maíz", 125, 125, 15, 15],
      ["Ensalada de Tomate y Queso Fresco", 130, 130, 15, 15],
      ["Ensalada de Tomate, Maíz y Queso Fresco", 130, 130, 15, 15],
      ["Espirales Integrales con Tomate ECO", 155, 186, 15, 12],
      ["Garbanzos Encebollados ECO", 118, 235, 21, 10],
      ["Lacitos con Tomate ECO", 133, 160, 17, 14],
      ["Lentejas con Verduras Cocidas ECO", 125, 231, 20, 10],
      ["Macarrones Integrales con Tomate ECO", 155, 186, 15, 12],
      ["Potaje de Alubias Blancas ECO", 150, 274, 15, 8],
      ["Potaje de Alubias Blancas con Calabacín ECO", 163, 299, 13, 7],
      ["Potaje de Lentejas con Calabaza ECO", 158, 289, 14, 8],
      ["Puchero ECO", 154, 283, 14, 8]
    ],
    segundos: [
      ["Abadejo al Horno a las Finas Hierbas", 72, 103, 20, 14],
      ["Albóndigas de Cerdo con Tomate", 85, 125, 19, 14],
      ["Albóndigas de Pollo a la Jardinera", 65, 104, 22, 15],
      ["Alubias Pintas Guisadas con Arroz ECO", 177, 354, 14, 10],
      ["Caballa al Vapor en Salsa", 87, 123, 17, 12],
      ["Chuleta de Pavo Adobada", 62, 119, 29, 15],
      ["Contramuslo de Pollo Asado", 54, 86, 24, 15],
      ["Estofado de Cerdo en Salsa con Verduras", 125, 162, 19, 15],
      ["Filete de Lomo de Cerdo", 48, 77, 23, 15],
      ["Garbanzos Encebollados ECO", 118, 235, 21, 10],
      ["Guisadillo de Garbanzos ECO", 128, 256, 20, 10],
      ["Hamburguesa de Pavo con Salsa Rondeña", 78, 96, 19, 15],
      ["Huevo Cocido con Arroz Integral y Tomate", 151, 151, 15, 15],
      ["Huevo Cocido con Patatas a lo Pobre", 123, 141, 17, 15],
      ["Huevo Cocido con Pisto de Verduras", 141, 141, 15, 15],
      ["Jamoncito de Pollo al Horno en Salsa", 81, 130, 23, 15],
      ["Jureles al Horno Encebollados", 88, 126, 21, 15],
      ["Lentejas Guisadas con Arroz ECO", 158, 289, 16, 10],
      ["Lentejas con Verduras Cocidas ECO", 125, 231, 20, 10],
      ["Merluza a la Plancha al Ajo y Perejil", 67, 96, 22, 15],
      ["Merluza a la Plancha en Salsa Verde", 72, 103, 21, 15],
      ["Muslito de Pollo al Horno al Ajillo", 52, 83, 37, 23],
      ["Potaje de Alubias Blancas ECO", 150, 274, 15, 8],
      ["Potaje de Alubias Blancas con Calabacín ECO", 163, 299, 13, 7],
      ["Potaje de Lentejas con Calabaza ECO", 158, 289, 14, 8],
      ["Puchero ECO", 154, 283, 14, 8],
      ["Salmón al Vapor en Salsa de Cebolla y Eneldo", 67, 96, 22, 15],
      ["Solomillo de Pollo Rustido", 76, 93, 18, 15],
      ["Tiras de Pollo al Horno Adobadas", 62, 119, 23, 12],
      ["Tortilla de Patatas con Calabacín", 123, 123, 16, 16],
      ["Tortilla de Patatas con Cebolla", 113, 113, 12, 12]
    ],
    guarniciones: [
      ["Patatas Panaderas al Vapor ECO", 63, 84, 19, 14],
      ["Patatas a la Provenzal ECO", 63, 98, 23, 15],
      ["Arroz Pilaf ECO", 68, 81, 18, 15],
      ["Ensalada 4 Estaciones", 57, 57, 15, 15],
      ["Ensalada Campestre", 61, 61, 15, 15],
      ["Ensalada de Lechuga y Maíz", 65, 65, 15, 15],
      ["Ensalada Mézclum", 61, 61, 15, 15],
      ["Ensalada de Lechuga", 61, 61, 15, 15],
      ["Ensalada Clásica", 61, 61, 15, 15],
      ["Tomate Natural", 61, 61, 15, 15],
      ["Ensalada de Lechuga, Tomate y Huevo cocido", 140, 140, 15, 15]
    ]
  },

  // Nombres del calendario que se escriben distinto en la tabla:  'nombre en el calendario': 'nombre en la tabla'
  // (no distingue mayúsculas, tildes ni "ECO" ni "(guarnición)")
  alias: {
    "Albóndigas de Pollo al Horno a la Jardinera": "Albóndigas de Pollo a la Jardinera",
    "Albóndigas de Cerdo al Horno con Salsa de Tomate": "Albóndigas de Cerdo con Tomate",
    "Filete de Lomo de Cerdo al Horno": "Filete de Lomo de Cerdo",
    "Hamburguesa de Pavo a la Plancha con Salsa Rondeña": "Hamburguesa de Pavo con Salsa Rondeña",
    "Patatas Panaderas al Horno a la Provenzal": "Patatas a la Provenzal ECO",
    "Arroz Pilaf Salteado ECO": "Arroz Pilaf ECO",
    "Crema de Zanahoria ECO": "Crema de Zanahorias ECO",
    "Jureles al Horno": "Jureles al Horno Encebollados",
  }
};
