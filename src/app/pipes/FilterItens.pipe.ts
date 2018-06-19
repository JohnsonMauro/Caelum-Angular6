import { Pipe, PipeTransform } from "@angular/core";
import { FotoComponent } from "../components/foto/foto.component";

@Pipe({
  name: 'filterItens'
})
export class FilterItens implements PipeTransform {
  transform(fotos: Array<FotoComponent>, inputSearchValue: string) {
    const listaFotos = fotos.filter((foto) => foto.titulo.toLowerCase().includes(inputSearchValue.toLowerCase()));

    return listaFotos;
  }
}