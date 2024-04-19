import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';


@NgModule({
  declarations: [],
  exports: [
    TabMenuModule,
    TableModule,
    DialogModule

  ],
  providers:[

  ]
})
export class PrimeComponentsModule { }
