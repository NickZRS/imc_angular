import { Component } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent {
          peso : number = 0;
          alt : number = 0;
          resp: number = 0;
          imc : string = "" ;

          calculoimc(){
            this.resp = this.peso / (this.alt*this.alt)

            if(this.resp < 18.5){
              document.getElementById("resp").value = this.resp.toFixed(2);
              document.getElementById("imc").value = "Magreza";
          }else if(imc >= 18.5 &&  imc <= 24.9){
              document.getElementById("imc").value = imc.toFixed(2);
              document.getElementById("resp").value = "Normal";
          }else if(imc >= 25 &&  imc <= 29.9){
              document.getElementById("imc").value = imc.toFixed(2);
              document.getElementById("resp").value = "Sobrepeso";
          }else if(imc >= 30 &&  imc <= 34.9){
              document.getElementById("imc").value = imc.toFixed(2);
              document.getElementById("resp").value = "Obesidade Grau I";
          }else if(imc >= 35 &&  imc <= 39.9){
              document.getElementById("imc").value = imc.toFixed(2);
              document.getElementById("resp").value = "Obesidade Grau II";
          }else{
              document.getElementById("imc").value = imc.toFixed(2);
              document.getElementById("resp").value = "Obesidade Grau III";
          }
          }

}
