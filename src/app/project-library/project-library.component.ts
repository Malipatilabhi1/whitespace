import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
export interface Item {
  id: string;
  project_name: string;
  createdBy: string;
  createdOn:string;
  tags:string;
  status:string;
}

const data: Item[] = [
  { id: 'MR1472', project_name: 'HAIRCARE-Shampoo-KER', createdBy: 'Julia Suzuki',createdOn:'12-Aug-23',tags:'#Shampoo #FGH34 #Keratin',status:'Completed' },
  { id: 'MR1468', project_name: 'SKINCARE-Handcream-OilFree', createdBy: 'Vikas Smith',createdOn:'10-Aug-23',tags:'#Handcream #OilFree',status:'Validating' },
  { id: 'MR1345', project_name: 'SKINCARE-Eyecream-Serum', createdBy: 'Sara Mizrahi',createdOn:'11-Aug-23',tags:'#Eyecream #Serum',status:'Completed' },
  { id: 'MR1311', project_name: 'SKINCARE-Sunscreen-SPF50+', createdBy: 'Naom Tanaka',createdOn:'10-Aug-23',tags:'#Sunscreen #SPF50',status:'Validating' },
  { id: 'MR1472', project_name: 'HAIRCARE-Shampoo-KER', createdBy: 'Julia Suzuki',createdOn:'12-Aug-23',tags:'#Shampoo #FGH34 #Keratin',status:'Completed' },
  { id: 'MR1468', project_name: 'SKINCARE-Handcream-OilFree', createdBy: 'Vikas Smith',createdOn:'10-Aug-23',tags:'#Handcream #OilFree',status:'Validating' },
  { id: 'MR1345', project_name: 'SKINCARE-Eyecream-Serum', createdBy: 'Sara Mizrahi',createdOn:'11-Aug-23',tags:'#Eyecream #Serum',status:'Completed' },
  { id: 'MR1311', project_name: 'SKINCARE-Sunscreen-SPF50+', createdBy: 'Naom Tanaka',createdOn:'10-Aug-23',tags:'#Sunscreen #SPF50',status:'Validating' },
];


@Component({
  selector: 'app-project-library',
  templateUrl: './project-library.component.html',
  styleUrls: ['./project-library.component.css']
})
export class ProjectLibraryComponent implements OnInit {

  displayedColumns: string[] = ['id','project_name', 'createdBy', 'createdOn','tags','status','actions'];
  dataSource: MatTableDataSource<Item>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.dataSource = new MatTableDataSource<Item>(data);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  // Define your button click handlers here
  editItem(item: Item) {
    console.log('Edit button clicked for item:', item);
  }

  deleteItem(item: Item) {
    console.log('Delete button clicked for item:', item);
  }
}

/** Builds and returns a new User. */

