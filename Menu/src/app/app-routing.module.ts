import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CompaComponent } from './compa/compa.component';
import { HalaMadridComponent } from './hala-madrid/hala-madrid.component';
import { ProgramacionComponent } from './programacion/programacion.component';

const routes: Routes = [
  { path: 'pages/Calculadora', component: CalculadoraComponent},
  { path: 'pages/Compa', component: CompaComponent},
  { path: 'pages/Hala-Madrid', component: HalaMadridComponent},
  { path: 'pages/Programacion', component: ProgramacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }