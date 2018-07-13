import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
  // styles: [ //Caso sejam poucas linhas, ai não preciso da linha de cima.
  //   `
  //     .highlight { /*classe CSS */
  //       background-color: yellow;
  //       font-weight: bold;
  //     }
  //   `
  // ]
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true; // Pode tipar ou não
  urlImagem = 'http://lorempixel.com/400/200/animals';

  valorAtual: string = '';
  valorSalvo = '';

  isMouseOver: boolean = false;

  nome: String = "abc";

  pessoa: any = {
    nome: 'def',
    idade: 20
  }

  nomeDoCurso: string = 'Angular';

  valorInicial = 15;

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botão clicado');
  }
  onKeyUp(evento: KeyboardEvent) {
    //console.log(evento);
    //console.log((<HTMLInputElement>evento.target).value);
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento){
    //console.log(evento);
    console.log(evento.novoValor);
  }

  constructor() { }

  ngOnInit() {
  }

}
