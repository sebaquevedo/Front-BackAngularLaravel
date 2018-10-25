import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableService } from '../../../@core/data/smart-table.service';

@Component({
  selector: 'ngx-mychanges',
  templateUrl: './mychanges.component.html',
})
export class MyChangesComponent {
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    actions:{
      columnTitle:'Editar',
      add: false,
      delete: false,
      position: 'right',
    },
    columns: {
      nombre: {
        title: 'Nombre',
        type: 'string',
        editable: false,
        filter:false,
        sort: false,
      },
      descripcion: {
        title: 'Descripción',
        type: 'string',
        editable: false,
        filter:false,
        sort: false,
      },
      fecha: {
        title: 'Fecha',
        type: 'string',
        editable: false,
        filter:false,
        sort: false,
      },
      tecnologia: {
        title: 'Tecnología',
        type: 'string',
        editable: false,
        filter:false,
        sort: false,
      },
      mo: {
        title: 'MO',
        type: 'string',
        editable: false,
        filter:false,
        sort: false,
      },
      celda: {
        title: 'Celda',
        type: 'string',
        editable: false,
        filter:false,
        sort: false,
      },
      parametro: {
        title: 'Parámetro',
        type: 'string',
        editable: false,
        filter:false,
        sort: false,
      },
      valorActual: {
        title: 'Valor Actual',
        type: 'string',
        editable: false,
        filter:false,
        sort: false,
      },
      valorNuevo: {
        title: 'Valor Nuevo',
        type: 'string',
        filter:false,
        sort: false,
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableService) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('¿Confirma que desea eliminar esta fila?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
