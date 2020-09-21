# test-vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Consideraciones previas al desarrollo

# USER PERSONA

Cuando empecé a desarrollar la aplicación tuve que tomar algunas decisiones sobre la usabilidad y uso de código (especialmente relativo al CSS) más o menos compatibles con ciertos navegadores. Para ello creé un User Persona

  - Aficionado a videojuegos y ordenadores
  - Conocimiento medio/alto de uso de ordenadores
  - Ordenadores de rendimiento medio / alto y actualizado con componentes potentes para gaming
  - Sistema operativo actualizado a la última versión
  - Uso de la última versión de navegadores
  
Con ésto, decidí que utilizar propiedades modernas de CSS3 no sería un riesgo muy alto a la hora de perder usabilidad o comptabilidad con navegadores antigüos. La posibilidad de que un usuario de la aplicación use navegadores antigüos es muy remota.

# TECNOLOGIAS

Al hacer uso de ciertas tecnologías y según el feedback aportado por los FEDs de Voicemod, he intendo hacerme una idea del environment real que podéis tener en Voicemod y he intentando hacerlo lo más parecido posible. Por ello opté por:

  - No usar ningún framework de CSS ya que en un email se comenta que la aplicación no usa ninguno (a pesar de que en los requisitos del briefing se especificaba que el uso de Bootstrap era un requisito). 
  - No he utilizado ningún plugin de Vue ya que desconozco si usáis alguno, tales como Vue Select, Transition Group, etc..
  - He optado por utilizar SCSS en el css para los componentes, a fín de ahorrar líneas de código y hacer más legible los estilos, y CSS sin preprocesar para estilos globales.
  - Usar Vue CLI en vez del CDN, ya que supongo que una aplicación de cierto tamaño como VoiceMod hará uso extensivo de Single File Components, Webpack, etc
  - VueX, por el mismo motivo anterior. Supongo que una app de tal magnitud tendrá un sistema centralizado de estados por lo que decidí usar VueX en vez de usar un Event Bus 
  para la comunicación entre componentes
  

## Desarrollo

# LAYOUT

 Las decisiones tomadas fueron:
  
   - Respecto a la navegación. He respestado el Layout del diseño para tablet y sobremesa. En móviles, sin embargo, he dividido la nevegación en 2 filas, la superior para la búsqueda, y la inferior para los selects, de tal manera que los elementos de la interfaz se acomoden mejor al espacio disponible
   - Respecto al resto de las voces, probé varios layouts y al final opté por 2 en móviles, 4 en tablet y 6 en sobremesa (como el diseño del briefing). La idea principal era mantener siempre un número par para tener una coherencia dentro del layout. Para crear el layout usé CSS grid (ver User Persona)
  
# INTERACTIVIDAD

   - Para la búsqueda manual, probé algunas variaciones:
        * Filtrar cuando el usuario pulsara Tab o Enter -> En términos de UX no me convenció ya que parecía que la búsqueda no funcionaba
        * Filtrar cuando el usuario había insertado un mínimo de caracteres y no sobrecargar el refresco de los elementos -> Igualmente el resultado no me convenció por 
        motivos parecidos a los del intento anterior
        * Filtrar por cada entrada del teclado (OPCION ELEGIDA)
        
   - En el briefing no se aclaraba un caso específico sobre el color de fondo si un elemento tenía a la vez el estado hover y estaba seleccionado. Al final opté por mantener
   el color blanco del hover.
   - En el briefing no se aclarba si un elemento marcado como favorito podía desmarcarse pulsando en el corazón desde la parte de Voces disponible. En términos de UX, un 
   usuario espera que pueda desmarcase de cualquier parte y no sólo desde favoritos, por lo que he agregado ésta opción también.

# ELEMENTOS AÑADIDOS

  Decidí hacer pruebas con varias mejoras de la interfaz, pero al final opté por añadir un contador de elementos tanto en la parte de Favoritos como la de Voces. De esta manera el usuario puede ver cuantas voces tiene disponible o seleccionadas como favoritos
  


