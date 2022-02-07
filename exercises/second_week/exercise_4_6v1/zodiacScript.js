function calculaSigno() {
    let mes=parseInt(prompt("introduzca el mes de nacimiento\n Elija una opcion válida:\n 1-Enero\n 2-Febrero\n 3-Marzo\n 4-Abril\n 5-Mayo\n 6-Junio\n 7-Julio\n 8-Agosto\n 9-Septiembre\n 10-Octubre\n 11-Novimebre\n 12-Diciembre"))
    let dia=parseInt(prompt("introduzca el día de nacimiento del 1 al 31"))
    
    function correctDay() {
        return ( (dia>=1)  && (dia<=31) )
    }
    
    if (!correctDay()) document.getElementById("resultat").textContent="ingrese un dia válido del 1 al 31"

    if (correctDay()) {
      switch (mes) {
        case 1: 
            if (dia<=19) {
                document.getElementById("resultat").textContent=`Su signo es Capricorn-Capricornio (22.12 — 19.01) ` }
            if  (dia>19){
                document.getElementById("resultat").textContent=`Su signo es Aquari-Acuario (20.01 — 18.02)`} 
                break;
        case 2: 
            if (dia<=18){
                document.getElementById("resultat").textContent=`Su signo es Aquari-Acuario (20.01 — 18.02) ` 
                }
            if (dia>18){
                document.getElementById("resultat").textContent=`Su signo esPeixos-Piscis (19.02 — 20.03)` }
                break;
        case 3: 
            if (dia<=20){
                document.getElementById("resultat").textContent=`Su signo es Peixos-Piscis (19.02 — 20.03)` 
                }
            if (dia>20){
                document.getElementById("resultat").textContent=`Su signo es Àries-Aries (21.03 — 19.04)` }
                break;
        case 4: 
            if (dia<=19){
                 document.getElementById("resultat").textContent=`Su signo es Àries-Aries (21.03 — 19.04)` 
                    }
            if (dia>19){
                document.getElementById("resultat").textContent=`Su signo es Taure-Tauro (20.04 — 20.05)` }
                break;
        case 5: 
             if (dia<=20){
                document.getElementById("resultat").textContent=`Su signo es Taure-Tauro (20.04 — 20.05)`
                    }
            if (dia>20){
                document.getElementById("resultat").textContent=`Su signo es Bessons-Géminis (21.05 — 20.06)` }
                break;
        case 6: 
            if (dia<=20){
                document.getElementById("resultat").textContent=`Su signo es Bessons-Géminis (21.05 — 20.06)`
                       }
            if (dia>20) {
                document.getElementById("resultat").textContent=`Su signo es Cranc-Cáncer (21.06 — 22.07)` }
                break;
        case 7: 
            if (dia<=22){
                document.getElementById("resultat").textContent=`Su signo es Cranc-Cáncer (21.06 — 22.07)` 
                           }
            if (dia>22){
                document.getElementById("resultat").textContent=`Su signo es LLeó-Leo (23.07 — 22.08)` }
                break;
        case 8: 
            if (dia<=22){
                document.getElementById("resultat").textContent=`Su signo es LLeó-Leo (23.07 — 22.08)`
                               }
            if (dia>22) {
                document.getElementById("resultat").textContent=`Su signo es Verge-Virgo (23.08 — 22.09)` }
                break;
        case 9: 
            if (dia<=22){
                document.getElementById("resultat").textContent=`Su signo es Verge-Virgo (23.08 — 22.09)`
                                   }
            if (dia>22) {
                document.getElementById("resultat").textContent=`Su signo es Balança-Libra (23.09 — 22.10)` }
                break;
        case 10: 
            if (dia<=22){
                document.getElementById("resultat").textContent=`Su signo es Balança-Libra (23.09 — 22.10)`
                                       }
            if (dia>22){
                document.getElementById("resultat").textContent=`Su signo es Escorpi-Escorpio (23.10 — 21.11)` }
                break;
         case 11: 
            if (dia<=21){
                document.getElementById("resultat").textContent=`Su signo es Escorpi-Escorpio (23.10 — 21.11)` 
                                           }
            if (dia>21){
                document.getElementById("resultat").textContent=`Su signo es Sagitario-Sagitario (22.11 — 21.12` }
                break; 
         case 12: 
            if (dia<=21){
                  document.getElementById("resultat").textContent=`Su signo es Sagitario-Sagitario (22.11 — 21.12` 
                                               }
            if (dia>21) {
                document.getElementById("resultat").textContent=`Su signo es Capricorn-Capricornio (22.12 — 19.01)` }
                break; 
        default:
                document.getElementById("resultat").textContent=`Eliga sólo un mes valido del 1-12`
      }
    }
    document.getElementById("meses").textContent=`Mes ingresado ${mes}`
    document.getElementById("dias").textContent=`Día ingresado ${dia}`

}