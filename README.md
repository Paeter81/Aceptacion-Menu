# Calculador de aceptación de menús

Aplicación web sin conexión para registrar y calcular la aceptación de un menú escolar por componentes: primer plato, segundo plato y guarnición.

## Funciones

* Selección de **Infantil ciclo 2** o **Primaria**.
* Desplegables para primer plato, segundo plato y guarnición.
* Gramaje visible de cada ración según el grupo seleccionado.
* Cálculo independiente de kilos elaborados, kilos no servidos, sobrantes, porcentaje de residuo y clasificación para los tres componentes.
* Clasificación automática: MB, B, M, A y MA.
* Acepta coma o punto en los decimales.
* Funciona sin conexión y no recopila datos.

Para cada componente:

* Kg elaborados = `(asistentes + no asistentes) × gramaje ÷ 1.000`.
* Kg no servidos = `no asistentes × gramaje ÷ 1.000`.
* Porcentaje de residuo = `((kg no servidos + kg sobrantes) ÷ (kg elaborados − kg no servidos)) × 100`.

Los kilos consumidos se utilizan internamente para el cálculo del porcentaje, pero no se muestran como resultado.

