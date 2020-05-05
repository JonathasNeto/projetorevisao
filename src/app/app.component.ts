import { Component, OnInit } from '@angular/core';
import { TurmasService } from './turmas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ProjetoRevisao';
  turmas = [];
  turma: any = null;

  constructor(private service: TurmasService){

  }

  ngOnInit(): void {
    this.service.listar()
    .subscribe((dados: any) => this.turmas = dados); 
  }
  listarAluno(){
    let lista =[];
    for(var i in this.turmas){
      for(var e in this.turmas[i].alunos){
        lista.push(this.turmas[i].alunos[e]);
      }
    }
    return lista;

  }
    

 
}
