import { Routes } from '@angular/router';
import { GaleryComponent } from './components/galery/galery.component';
import { NoticiaDetalheComponent } from './components/noticia-detalhe-component/noticia-detalhe-component.component';

export const routes: Routes = [
  { path: '', component: GaleryComponent },
  { path: 'noticia/:id', component: NoticiaDetalheComponent }
];