import { CommonModule } from '@angular/common';
import { Component,OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import type { ColDef, ICellRendererParams } from 'ag-grid-community';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'; 

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);
@Component({
  selector: 'app-data',
  standalone: true,
  imports: [AgGridAngular, CommonModule],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})

export class DataComponent  implements OnInit  {

   colDefs: ColDef[] = [
        {
  field: "country",
  headerName: "Destination",
  flex: 1,
   headerStyle: {
      backgroundColor: '#f5f7f7',
      color: '#35c4a8',
      fontWeight: 'bold',
      fontSize: '15px',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      borderRight: '1px solid #1565c0',
    },
  cellStyle: { fontWeight: 'bold', color: '#045c4b' }
},
        {
  field: "danger",
  headerName: "Niveau de sécurité",
  flex: 1,
 headerStyle: {
      backgroundColor: '#f5f7f7',
      color: '#35c4a8',
      fontWeight: 'bold',
      fontSize: '15px',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      borderRight: '1px solid #1565c0',
    },
  cellRenderer: (params:any) => {
    const value = params.value;
    let color = '';
    let icon = '';

    switch (value) {
      case 'dangerous':
        color = 'red';
        icon = 'report_problem';
        break;
      case 'medium':
        color = 'orange';
        icon = 'warning';
        break;
      case 'safe':
        color = 'green';
        icon = 'check_circle';
        break;
      default:
        color = 'gray';
        icon = 'help_outline';
    }

    return `
      <span style="display: flex; align-items: center; color: ${color}; font-weight: 500;">
        <span class="material-icons" style="margin-right: 4px;">${icon}</span>
        ${value.charAt(0).toUpperCase() + value.slice(1)}
      </span>
    `;
  }
},
        {
  field: "money",
  headerName: "Monnaie locale",
  flex: 1,
  tooltipField: "money",
    headerStyle: {
      backgroundColor: '#f5f7f7',
      color: '#35c4a8',
      fontWeight: 'bold',
      fontSize: '15px',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      borderRight: '1px solid #1565c0',
    },
  cellStyle: { fontStyle: 'italic', color: '#4e342e' }
},
{
  field: "distanceFromParis",
  headerName: "Distance/Paris (km)",
  flex: 1,
  headerStyle: {
    backgroundColor: '#f5f7f7',
    color: '#35c4a8',
    fontWeight: 'bold',
    fontSize: '15px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    borderRight: '1px solid #1565c0',
  },
  cellStyle: { color: '#2e7d32', fontWeight: '600' },
  valueFormatter: (params: any) => `${params.value.toLocaleString()} km`
},

{
  field: "gayFriendly",
  headerName: "Gay Friendly ?",
  flex: 1,
  headerStyle: {
    backgroundColor: '#f5f7f7',
    color: '#35c4a8',
    fontWeight: 'bold',
    fontSize: '15px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  cellRenderer: (params: any) => {
    return params.value
      ? `<span style="color: #d81b60; display: flex; align-items: center;">
           <span class="material-icons" style="margin-right: 4px;">favorite</span>Oui
         </span>`
      : `<span style="color: gray; display: flex; align-items: center;">
           <span class="material-icons" style="margin-right: 4px;">block</span>Non
         </span>`;
  }
},
       {
  field: "done",
  headerName: "Déjà visité ?",
  flex: 1,
   headerStyle: {
      backgroundColor: '#f5f7f7',
      color: '#35c4a8',
      fontWeight: 'bold',
      fontSize: '15px',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      borderRight: '1px solid #1565c0',
    },
  cellRenderer: (params:any) => {
    return params.value
      ? `<span style="color: green; display: flex; align-items: center;">
           <span class="material-icons" style="margin-right: 4px;">check_circle</span>Oui
         </span>`
      : `<span style="color: gray; display: flex; align-items: center;">
           <span class="material-icons" style="margin-right: 4px;">cancel</span>Non
         </span>`;
  }
}
    ];
 rowData = [
  { country: "Bali", danger: "medium", money: "Roupie indonésienne (IDR)", done: true, distanceFromParis: 11800, gayFriendly: true },
  { country: "Costa rica", danger: "safe", money: "Colón costaricien (CRC)", done: false, distanceFromParis: 8900, gayFriendly: true },
  { country: "Florence", danger: "safe", money: "Euro (EUR)", done: true, distanceFromParis: 1100, gayFriendly: true },
  { country: "Cambodge", danger: "medium", money: "Riel cambodgien (KHR), mais USD largement utilisé", done: false, distanceFromParis: 10300, gayFriendly: false },
  { country: "Népal", danger: "medium", money: "Roupie népalaise (NPR)", done: false, distanceFromParis: 7400, gayFriendly: false },
  { country: "Japon", danger: "safe", money: "Yen japonais (JPY)", done: false, distanceFromParis: 9700, gayFriendly: true },
  { country: "Egypte", danger: "medium", money: "Livre égyptienne (EGP)", done: true, distanceFromParis: 3200, gayFriendly: false },
  { country: "Perou", danger: "medium", money: "Sol péruvien (PEN)", done: false, distanceFromParis: 10300, gayFriendly: true },
  { country: "Islande", danger: "safe", money: "Couronne islandaise (ISK)", done: false, distanceFromParis: 2800, gayFriendly: true },
  { country: "Pays Basque", danger: "safe", money: "Euro (EUR)", done: true, distanceFromParis: 1000, gayFriendly: true },
  { country: "Brésil", danger: "dangerous", money: "Réalis brésilien (BRL)", done: false, distanceFromParis: 8900, gayFriendly: true },
];

   defaultColDef: ColDef = {
  sortable: true,
  filter: true,
  resizable: true,
  // tooltipShowDelay: 500
};

    constructor( 
    private router: Router,
    // private dialog: MatDialog
    
  ) {}
 ngOnInit(){
  
console.log('data!', this.rowData)
// this.rowData 
  }
 returnHome(){
      this.router.navigate(['/'])
    }
     
}
