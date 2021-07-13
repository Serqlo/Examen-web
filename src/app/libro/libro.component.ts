import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.scss']
})
export class LibroComponent implements OnInit {
  @Input() nombre:string | undefined; 
  @Input() imagen:string | undefined; 
  @Input() autor:string | undefined;
  @Input() paginas :number | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
