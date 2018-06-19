import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../../components/foto/foto.component';
import { FotoService } from '../../service/foto.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {
  fotos: Array<FotoComponent> = [];

  constructor(private fotoService: FotoService) {
  }

  ngOnInit() {
    this.fotoService.listarFotos().subscribe((response: Array<FotoComponent>) => this.fotos = response)
  }

}
