import { Component, OnInit } from '@angular/core';
import { TurmasService } from './turmas.service';
import { Aluno } from './models/models.aluno';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ProjetoRevisao';
  turmas = [];
  turma: any = null;
  codigo: any = null;
  aluno: Aluno;
  frequencia: number;
  nota1: number;
  nota2: number;
  registros = [];

  constructor(private service: TurmasService){  }

  ngOnInit(): void {
    this.service.listar()
    .subscribe((dados: any) => this.turmas = dados); 
  }
  listarAluno(){
      if(this.turma != null)return this.encontrarTurma(this.turma).alunos;
    ;
  }
    encontrarTurma(parametro){
    var turm;
    for(var i in this.turmas){
      if(this.turmas[i].numero === parametro){
        turm = this.turmas[i];
      }
    }return turm;
  }
  salvar() {
    this.registros.push(
      { 
        "nome": this.encontrarAluno(this.aluno,this.turma), 
        "codigo": this.aluno, 
        "nota1": this.nota1, 
        "nota2": this.nota2, 
        "frequencia": this.frequencia, 
        "turma": this.turma,
        "media": this.calcularMedia(this.nota1, this.nota2)
      });
  }
 
  calcularMedia(n1:number, n2:number){
    return (n1+(n2*2))/3;
  }

  encontrarAluno(codAluno, codTurma) {
    var turm = this.encontrarTurma(codTurma).alunos;
    for (var i in turm) {
      if (turm[i].codigo == codAluno) {
        return turm[i].nome;
      }
    } 
    return null;
  }

}
