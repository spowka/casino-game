import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { LoadingBarComponent } from './components/loading-bar/loading-bar.component';

@NgModule({
  declarations: [
    LoadingBarComponent,
  ],
  imports: [
    CommonModule,
    ToastrModule.forRoot()
  ],
  exports: [
    LoadingBarComponent,
  ]
})
export class SharedModule { }
