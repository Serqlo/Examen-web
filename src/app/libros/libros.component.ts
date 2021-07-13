import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro.model';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.scss']
})
export class LibrosComponent implements OnInit {

  libros:Libro[] = new Array<Libro>();
  breakpoint
  constructor() { }

  ngOnInit(): void {
    this.libros = [
      {Nombre:"TEST", Imagen:"https://edit.org/images/cat/portadas-libros-big-2019101610", Autor:"Pablo neruda", Paginas:100},
      {Nombre:"TEST2", Imagen:"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/sci-fi-book-cover-template-a1ec26573b7a71617c38ffc6e356eef9_screen", Autor:"Pablo neruda", Paginas:100},
      {Nombre:"TEST3", Imagen:"https://template.canva.com/EADzX_WUjiY/1/0/251w-xpZlfo7EIAI", Autor:"Elsa Pato", Paginas:230},
      {Nombre:"TEST4", Imagen:"https://template.canva.com/EADwi4xAG6I/1/0/256w-JBWCAd5q564", Autor:"Elba Surero", Paginas:1240},
      {Nombre:"TEST5", Imagen:"http://media-cache-ak0.pinimg.com/736x/13/84/12/1384124c8eeafca3f8a34ab05a37d1b3", Autor:"Helen Chufe", Paginas:540},
      {Nombre:"TEST6", Imagen:"https://i.pinimg.com/originals/ab/13/19/ab1319dc85d07cbdaa03cc2f354d63d5", Autor:"Lola Mento", Paginas:1050},
      {Nombre:"TEST7", Imagen:"https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/7849/9781784967857", Autor:"Elsa Pato", Paginas:230},
      {Nombre:"TEST8", Imagen:"https://upload.wikimedia.org/wikipedia/en/thumb/a/ad/Gotrex_and_Felix_hardcover.jpg/220px-Gotrex_and_Felix_hardcover", Autor:"Elba Surero", Paginas:1240},
      {Nombre:"TEST9", Imagen:"https://m.media-amazon.com/images/I/51Sz7+xcaqL", Autor:"Helen Chufe", Paginas:540},
      {Nombre:"TEST10", Imagen:"https://m.media-amazon.com/images/I/51MHkjLCtXL", Autor:"Lola Mento", Paginas:1050}
    ];
  }

  

}
