import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { Config } from 'datatables.net';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import '@github/relative-time-element'


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, DataTablesModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TableComponent implements OnInit {


  dtOptions: Config = {};
  selectedLanguage: string = 'en';
  date: string = '2024-08-01T03:43:38.252Z';
  dataSet = [
    { id: 1, title: 'Title 1', body: 'Body 1' },
    { id: 2, title: 'Title 2', body: 'Body 2' },
    { id: 3, title: 'Title 3', body: 'Body 3' },
    // ... otros datos
  ];
  selectedFormat: string = 'auto';

  ngOnInit(): void {
    this.dtOptions = {
      // info: false,
      pageLength: 2,

      // ajax: 'https://jsonplaceholder.typicode.com/posts',
      data: this.dataSet,
      columns: [
        { title: 'ID', data: 'id' },
        { title: 'Title', data: 'title' },
        { title: 'Body', data: 'body' }
      ],
      pagingType: 'full_numbers',
      // lengthMenu: [[10, 25, 50, -1], [10, 25, 50, 'Todos']],
      language: { url: 'https://cdn.datatables.net/plug-ins/1.10.20/i18n/Spanish.json' },
      initComplete: (settings, json) => {
        console.log('Table initialized');
      },
      drawCallback: (settings) => {
        console.log('Table redrawn');
      },
      // dom: 'p<"top"l>rt<"bottom"ip><"clear">',
      // dom: 'l',
      // dom: 'lrtip',
      layout: {
        topEnd: null
      },
    };
  }

  onLanguageChange(event: Event) {//+
    const selectElement = event.target as HTMLSelectElement;//+
    this.selectedLanguage = selectElement.value;//+
  }

  onFormatChange(event: Event) {//+
    const selectElement = event.target as HTMLSelectElement;//+
    this.selectedFormat = selectElement.value;//+
  }

}
