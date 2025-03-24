import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNovaTarefaComponent } from './modal-nova-tarefa.component';

describe('ModalNovaTarefaComponent', () => {
  let component: ModalNovaTarefaComponent;
  let fixture: ComponentFixture<ModalNovaTarefaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalNovaTarefaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalNovaTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
