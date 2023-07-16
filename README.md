# Realización de una página web utilizando JavaScript
## UNIR Practica - Actividad 2
### Computación Cliente y Servidor (MEXINGWEB)

```
/**
 *  Notas del Funcionamiento:
 *  Cuando el usuario manda el formulario, hacemos los siguientes pasos:
 *  1) Verificamos que no vengan campos vacios con HTML5
 *  2) Despues procedemos a verificar campos con JavaScript siguiendo reglas diferentes en cada campo
 *   2.1) Si es correo electronico, que sea un dominio valido
 *   2.2) Si es correo electronico, que incluya ".com"
 *   2.3) Si es campo numero que no contenga caracteres invalidos como letras
 *   2.4) El Nombre y el Usuario no pueden ser el mismo
 *   2.5) La Contraseña no puede contener el usuario.
 * 
 *  Todos los errores los vamos almacenando en un arreglo que nos servira para reportar el resultado,
 *  al mismo tiempo mangtenemos el resultado de la validacion en una variable de tipo boleana para
 *  poder controlar colores y elementos en la interfaz de usuario para mostrar el reporte final.
 */
```


![Lista de Validacion.png](src%2Frecursos%2Fimagenes%2FLista%20de%20Validacion.png)

![Error Parcial.png](src%2Frecursos%2Fimagenes%2FError%20Parcial.png)

![Lista de Errores.png](src%2Frecursos%2Fimagenes%2FLista%20de%20Errores.png)