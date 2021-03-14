# Prueba test para Psiou

## Demo

Puedes acceder a una demo desplegada en https://psious-test-project.vercel.app/

## Para iniciar el proyecto:

- descargar
- lanzar yarn o npm install en la carpeta del proyecto ( al nivel de package.json )
- lanzar yarn start o npm run start en la carpeta del proyecto ( al nivel de package.json )

## Características del proyecto:

- Proyecto inciado con CRA
- Eslint y prettier configurado para mantener coherencia en el estilo de código y evitar errores
- Husky configurado para detonar eslint, prettier y test ( jest ) con cada commit para evitar añadir errores al repositorio.
- Se ha dado un estilo básico a los componentes a través de styled-components
- La salida de la estructura de datos, se realiza en la propia pantalla, en un viso arriba a la derecha.
- Existen dos salidas posibles de datos, por elemento o por fila. Esta última agrupa los elementos por cada fila, al igual que en el html.
- Internamente se tratan los datos de manera abstracta, es decir, una unidad ( de ancho o de distanciamiento ) no tiene correspondencia directa con px, % , em u otra unidad virtual de medida. Esto permite modificar la base de medida sin afectar a la posición guardada de los elementos.
- No se permite arrastras elementos fuera de los límites de la zona de "soltado"
