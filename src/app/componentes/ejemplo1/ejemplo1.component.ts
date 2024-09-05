import { Component, Input, input, OnChanges, Output, SimpleChanges } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MaterialModule } from '../../modulos/material/material.module';
import { FormsModule } from '@angular/forms';
import { EventEmitter } from '@angular/core';

//la interfaz siempre se crea antes del componente y empieza por mayuscula//
export interface Persona{
  nombre:string
  imagen:string
  edad: string
  pais:string
  cedula:string
}

@Component({
  selector: 'app-ejemplo1',
  standalone: true,
  imports: [MaterialModule,FormsModule],
  templateUrl: './ejemplo1.component.html',
  styleUrl: './ejemplo1.component.css'
})
export class Ejemplo1Component implements OnChanges{

  ngOnChanges(changes: SimpleChanges): void {
    //throw new Error ("Method not implemented");//
    window.alert('Imagen cambiada,alerta disparada desde el componente hijo');
  }
 @Input() imagenDelPadre:string='';
 @Output () emisor= new EventEmitter<string>();//objeto emisor de evento,a donde el output esta //
 imagen = 'https://material.angular.io/assets/img/examples/shiba2.jpg'

  nombre='';

  nombres:Persona[] =[
    {nombre:'Andres',edad:'20',pais:'Colombia',cedula:'111111',imagen:'https://th.bing.com/th/id/OIP.DMDfV6N9jhYjyQCLGLlH5QAAAA?rs=1&pid=ImgDetMain'},
    {nombre:'lorena',edad:'29',pais:'Peru',cedula:'222222',imagen:'https://th.bing.com/th/id/OIP.nGRG2sdkQObkSAmdts47HgHaE7?rs=1&pid=ImgDetMain'},
    {nombre:'Vero',edad:'25',pais:'España',cedula:'333333',imagen:'https://th.bing.com/th/id/OIP.72LD-dPtCuFtgcN0TCoysgHaE7?rs=1&pid=ImgDetMain'},
  ]
    
  setName(){
    this.nombre = 'Darth vader';
  }
  alerta(nombre:string){
    if (nombre == 'Darth Vander'){
      window.alert ("soy tu padre");
    }else{
      window.alert("Escribe un nombre");
    }

  }

}
