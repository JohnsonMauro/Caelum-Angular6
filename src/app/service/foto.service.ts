import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FotoService {

  constructor(private httpClient: HttpClient) { }

  listarFotos() {
    return this.httpClient.get('http://localhost:3000/v1/fotos')
  }

  adicionarFotos(foto) {
    const cabecalho = new HttpHeaders({
      'Content-type': 'application/json'
    })

    return this.httpClient.post(
      'http://localhost:3000/v1/fotos',
      JSON.stringify(foto),
      { headers: cabecalho }
    )
  }
}