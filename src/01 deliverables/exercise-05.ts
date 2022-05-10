console.log("************** DELIVERABLE 05 *********************");

/*
    5. Slot Machine
    
    El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda. Cada máquina tragaperras (instancia) tendrá un **contador de monedas** que automáticamente se irá incrementando conforme vayamos jugando.
    
    Cuando se llame al **método play** el número de monedas se debe incrementar de forma automática y debe generar **tres booleanos aleatorios** que representarán el estado de las 3 ruletas. El usuario habrá ganado en caso de que los tres booleanos sean `true`, y por tanto deberá mostrarse por consola el mensaje:
    
    Congratulations!!!. You won <número de monedas> coins!!";
        
    y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la máquina.
    En caso contrario deberá mostrar otro mensaje:
    
    "Good luck next time!!".
*/

class SlotMachine {
    private num_monedas = 0;
    private ruleta1;
    private ruleta2;
    private ruleta3;
    
    play () {
        this.num_monedas += 1;
        this.ruleta1 = Math.random() < 0.5;
        this.ruleta2 = Math.random() < 0.5;
        this.ruleta3 = Math.random() < 0.5;

        if(this.ruleta1 && this.ruleta2 && this.ruleta3) 
        {            
            console.log(`Congratulations!!!. You won ${this.num_monedas} coins!!`);
            this.num_monedas = 0;
        }
        else 
        {
            console.log('Good luck next time!!');   
        }
    }
}

const machine1 = new SlotMachine();
machine1.play(); 
machine1.play(); 
machine1.play(); 
machine1.play(); 
machine1.play(); 