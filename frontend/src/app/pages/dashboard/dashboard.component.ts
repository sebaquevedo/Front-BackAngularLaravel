import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableService } from '../../@core/data/smart-table.service';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

  nodes = [{
    name: '4G',
    children: [{
      name: 'EutranCellFDD',
      children: [{
        name: 'Qrxlevmin',
      }, {
        name: 'CellRange',
      }],
    }, {
      name: 'EutranCellRelation',
      children: [{
        name: 'Qoffset',
      }, {
        name: 'Individualoffset',
      }],
    }],
  }];

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
      deleteButtonContent: '',
      confirmDelete: true,
    },
    actions:{
      columnTitle:'Editar',
      add: false,
      delete: false,
      position: 'right',
    },
    columns: {
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
      valor: {
        title: 'Valor',
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
