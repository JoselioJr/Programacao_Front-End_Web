import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaDetalheComponentComponent } from './noticia-detalhe-component.component';

describe('NoticiaDetalheComponentComponent', () => {
  let component: NoticiaDetalheComponentComponent;
  let fixture: ComponentFixture<NoticiaDetalheComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoticiaDetalheComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiaDetalheComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
