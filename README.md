# Mision_3_Alvaro_Herrero_Bayon

Misión M3 · Reactor Core — Web Development I.

## Cómo probarlo
Abre en el buscador http://localhost:5173/. Es una web donde puedes 
ver los monstruos grandes de Monster hunter world la cual puedes 
organizar segun lo que busques y cuando clickas en un monstruo se 
te abre una trajeta mas grande mas detallada sobre el monstruo clickado,
tambien puedes navegarla con tabulador y enter.

## Uso de IA
Usé Claude como ayuda a la hora de programar y para la parte visual del 
proyecto el cual usa casi el mismo css queel proyecto anterior.
Ejemplo 1: "como podria hacer la que salga una tarjeta grando cuando
clicko en una pequeña?".
Ejemplo 2: "Que jsx crees que deberia hacer en base al este proyecto 
ahora que quiero usar react?"

Todos los jsx exceptuando App y monster detais han sido hechos por mi 
en gran medida y App.jsx, MonsterDetai.jsx y useMonster.js has sido hechos 
con mayor ayuda de la IA

## Autopsia
1. Una cosa que hizo la IA que cambie fue en useMonsters.js donde tenia 
originalmente 3 estado los cuales unifique en un solo estado para no 
tener que estar cambiando 3 estados cada vez que cambiara algo y solo 
tener que cambiar 1 lo cual ayudaba a que no hubiera estados contradictorios.
2. En MonsterCard tenia originalmente un li al que se le añadia la funcionalidad 
de boton para abrir las tarjetas lo cual cambie añadiendole un boton ya que 
con el li no se podia usar el teclado para pulsar las cartas.