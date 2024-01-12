import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryAddComponent } from './category-add/category-add.component';
import { Category } from '../../../models/category';


@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule,CategoryAddComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  category:Category[]=[];
  @ViewChild(CategoryAddComponent,{static:true}) addCategoryComponent !: CategoryAddComponent; 
}
