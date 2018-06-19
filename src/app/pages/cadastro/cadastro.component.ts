import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../../components/foto/foto.component';
import { Router } from '@angular/router';
import { FotoService } from '../../service/foto.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  foto: FotoComponent;


  constructor(private router: Router, private fotoService: FotoService) {
    this.foto = new FotoComponent
  }

  ngOnInit() { }

  salvar(event) {
    event.preventDefault()

    this.fotoService.adicionarFotos(this.foto).subscribe(() => {
      event.target.reset()
      this.router.navigate(['/'])
    })
  }

}
