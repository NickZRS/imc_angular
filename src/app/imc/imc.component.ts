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
              (<HTMLInputElement>document.getElementById("resp")).value = this.resp.toFixed(2);
              (<HTMLInputElement>document.getElementById("imc")).value = "Magreza";
          }else if(this.resp >= 18.5 &&  this.resp <= 24.9){
              (<HTMLInputElement>document.getElementById("resp")).value = this.resp.toFixed(2);
              (<HTMLInputElement>document.getElementById("imc")).value = "Normal";
          }else if(this.resp >= 25 &&  this.resp <= 29.9){
              (<HTMLInputElement>document.getElementById("resp")).value = this.resp.toFixed(2);
              (<HTMLInputElement>document.getElementById("imc")).value = "Sobrepeso";
          }else if(this.resp >= 30 &&  this.resp <= 34.9){
              (<HTMLInputElement>document.getElementById("resp")).value = this.resp.toFixed(2);
              (<HTMLInputElement>document.getElementById("imc")).value = "Obesidade Grau I";
          }else if(this.resp >= 35 && this.resp <= 39.9){
              (<HTMLInputElement>document.getElementById("resp")).value = this.resp.toFixed(2);
              (<HTMLInputElement>document.getElementById("imc")).value = "Obesidade Grau II";
          }else{
              (<HTMLInputElement>document.getElementById("resp")).value = this.resp.toFixed(2);
              (<HTMLInputElement>document.getElementById("imc")).value = "Obesidade Grau III";
          }
          }

}
