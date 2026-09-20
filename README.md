# Calculador de aceptación de menús

Aplicación web sin conexión para registrar y calcular la aceptación de un menú escolar por componentes: primer plato, segundo plato y guarnición.

## Funciones

- Selección de **Infantil ciclo 2** o **Primaria**.
- Desplegables para primer plato, segundo plato y guarnición.
- Gramaje visible de cada ración según el grupo seleccionado.
- Cálculo independiente de kilos elaborados, kilos no servidos, sobrantes, porcentaje de residuo y clasificación para los tres componentes.
- Clasificación automática: MB, B, M, A y MA.
- Acepta coma o punto en los decimales.
- Funciona sin conexión y no recopila datos.

## Uso local

1. Descarga o clona este repositorio.
2. Abre el archivo `index.html` con Chrome, Edge, Firefox o cualquier navegador moderno.
3. No hace falta instalar programas ni disponer de conexión a internet.

## Subir a GitHub desde la web

1. Inicia sesión en [GitHub](https://github.com/).
2. Pulsa el símbolo **+** y selecciona **New repository**.
3. Escribe como nombre: `calculador-aceptacion-menus`.
4. Elige **Public** para compartirlo o **Private** para mantenerlo privado.
5. No marques la opción de crear README, porque este proyecto ya lo incluye.
6. Pulsa **Create repository**.
7. En la pantalla del repositorio nuevo, pulsa **uploading an existing file**.
8. Arrastra los tres elementos de esta carpeta: `index.html`, `README.md` y `.gitignore`.
9. Escribe como mensaje: `Versión inicial del calculador`.
10. Pulsa **Commit changes**.

## Publicarlo como página web

1. En el repositorio, abre **Settings > Pages**.
2. En **Build and deployment**, selecciona **Deploy from a branch**.
3. Elige la rama `main` y la carpeta `/(root)`.
4. Pulsa **Save**.
5. GitHub generará una dirección web pública para abrir el calculador desde móvil u ordenador.

## Cálculos

Para cada componente:

- Kg elaborados = `(asistentes + no asistentes) × gramaje ÷ 1.000`.
- Kg no servidos = `no asistentes × gramaje ÷ 1.000`.
- Porcentaje de residuo = `((kg no servidos + kg sobrantes) ÷ (kg elaborados − kg no servidos)) × 100`.

Los kilos consumidos se utilizan internamente para el cálculo del porcentaje, pero no se muestran como resultado.

## Estructura

```text
calculador-aceptacion-menus/
├── index.html
├── README.md
└── .gitignore
```
