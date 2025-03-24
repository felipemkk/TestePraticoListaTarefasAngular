import { Component } from '@angular/core';
import { ItemComponent } from "../item/item.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NovaTarefaModalComponent } from "../modal-nova-tarefa/modal-nova-tarefa.component";


@Component({
  selector: 'app-tasks',
  imports: [ItemComponent, CommonModule, FormsModule, NovaTarefaModalComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  exibirModal = false;
  
  tarefas: tarefa [] = [
    {id: 1, tarefa: "Comprar pão", categoria: "Mercado", concluido: true},
    {id: 2, tarefa: "Estudar Angular", categoria: "Estudos", concluido: false},
  ]

  abreModalNovaTarefa(): void {
    this.exibirModal = true;
  }

  novaTarefa(novaTarefa: tarefa): void {
    const novoId = this.tarefas.length > 0 ? Math.max(...this.tarefas.map(t => t.id)) +1:1;
    const tarefaComId = {...novaTarefa, id: novoId};
    this.tarefas.push(tarefaComId)
    this.exibirModal = false; // Fecha o modal após adicionar a tarefa
  }

  fecharModal(): void {
  this.exibirModal = false;
}

deletarTarefa(tarefa: tarefa): void {
  this.tarefas = this.tarefas.filter(t => t.id !== tarefa.id);
}

  cancelaTarefa(): void{
    this.exibirModal = false;
  }

  atualizarStatusTarefa(tarefa: tarefa): void {
      tarefa.concluido = !tarefa.concluido;
}

TarefaEditada(tarefa: tarefa): void {
  this.tarefas = this.tarefas.map(t => t.id === tarefa.id ? tarefa : t);  

}

}
export interface tarefa {
  id: number,
  tarefa: string,
  categoria: string,
  concluido: boolean,
}
























