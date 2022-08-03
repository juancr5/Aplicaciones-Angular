import { Injectable } from '@angular/core';
import { Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

 
  //Category le pasara el parametro de la busqueda al query de la url
  private apikey: string = "E819tRW8kVAi2v89wjsr2bGw1WiS2nBp&q";

  //Historial de busqueda
  private _historial : string[] = [];

  //Valor a retornar
  public resultados: Gif[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor() {

    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  async buscarGifs( query: string = '' ) {

    query = query.trim().toLocaleLowerCase();

    if( !this._historial.includes( query ) ) {
      this._historial.unshift( query );
      //Limita la cantidad de inserciones en el historial
      this._historial = this._historial.splice(0,10);

      //Guadar la busqueda 
      localStorage.setItem('historial', JSON.stringify( this._historial )  );
    }

    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${ this.apikey }=${ query }&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img: Gif) => {

        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    //Le asigna los gifs al vector de resultados
    this.resultados = gifs;


    //Guadar los gifs en el Local Storage con la llave resultados
    localStorage.setItem('resultados', JSON.stringify( this.resultados )  );
  }

}
