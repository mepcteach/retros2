import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuarioRecibido: string='';
  passwordRecibido: string='';
  nombre: string='';
  apellido: string='';
  selectedOption: string='';
  selectedDate: string='';

  constructor(private router:Router, private activateroute:ActivatedRoute, private alertController:AlertController) {
    this.activateroute.queryParams.subscribe( params =>{
      if(this.router.getCurrentNavigation()?.extras?.state){

        this.usuarioRecibido = this.router.getCurrentNavigation()?.extras?.state?.['usuarioEnviado'];
        this.passwordRecibido = this.router.getCurrentNavigation()?.extras?.state?.['passwordEnviado'];

        console.log();
      }
    })
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  mostrar() {
    if (this.nombre.trim() === '' || this.apellido.trim() === '') {
      this.presentAlert('Error: nombre y apellido vacios');
    } else {
      // Logica para manejar el envio del formulario cuando es valido
      this.presentAlert('Su nombre es:' +this.nombre+' '+this.apellido);
    }
  }

  limpiar() {
    this.nombre = '';
    this.apellido = '';
    this.selectedOption = '';
    this.selectedDate = '';
  }

}
