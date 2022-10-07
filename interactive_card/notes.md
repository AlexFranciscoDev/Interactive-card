# Interactive card

## Requerimientos y notas

Responsive Desktop y movil  -- Estructurar en 2 columnas. Primera tendrá 2 divs con fondos y la segunda columna contendrá el formulario.

## Estilos

- Movil (375px)
- Desktop: (1440px)

Colores:

- White: hsl(0, 0%, 100%)
- Light grayish violet: hsl(270, 3%, 87%)
- Dark grayish violet: hsl(279, 6%, 55%)
- Very dark violet: hsl(278, 68%, 11%)

Font-size: 18px;

Font-family:[Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)
Weight: 500

## Funciones

Primero de todo, crear la estructura HTML y los estilos generales.

Las funciones principales son:

- Rellenar el formulario y ver los detalles de la tarjeta en tiempo real -- USE STATE y USE REF
- Recibir errores de mensaje si USE FORM:
    - Input esta vacio
    - Formato de Número de tarjeta es correcto (TODO SON NUMEROS Y LONGITUD DE 12 Y SIN ESPACIOS) https://www.w3schools.blog/credit-card-validation-javascript-js
    - Fecha de caducidad (MES Y AÑO) es correcto (2 cifras y son numeros) https://code.tutsplus.com/es/tutorials/8-regular-expressions-you-should-know--net-6149
    - CVC (3 CIFRAS Y NUMEROS) https://code.tutsplus.com/es/tutorials/8-regular-expressions-you-should-know--net-6149

USEFORM:
- Añadir y validacion por cada uno de los campos. https://github.com/AlexFranciscoDev/Master_react/blob/main/Master_React/teoria/10_masHooks.md

- Mostrar vista thank you (componente) (Condicion mostrar un componente u otro)