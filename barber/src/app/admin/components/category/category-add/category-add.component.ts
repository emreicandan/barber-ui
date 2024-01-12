import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../../../../services/category.service';
import { Category } from '../../../../models/category';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-add',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './category-add.component.html',
  styleUrl: './category-add.component.scss'
})
export class CategoryAddComponent {
  categoryForm!:FormGroup

  @Output() onLoad:EventEmitter<unknown>=new EventEmitter();
  constructor(
    private formBuilder:FormBuilder,
    private toastrService:ToastrService,
    private categoryService:CategoryService){}

  createCreateForm(){
    this.categoryForm=this.formBuilder.group({
      id:['',Validators.required],
      name:['',Validators.required],
    })
  }
  onSubmit(){
    if(!this.categoryForm.valid){
      this.toastrService.warning("Please check the form.","Warning");
      return;
    }
    let category:Category=Object.assign({},this.categoryForm.value);
    this.categoryService.create(category).subscribe(result=>{
      if(typeof document ==undefined) return;
      document.querySelector(".create-category-modal")?.classList.toggle("show");
      document.querySelector(".modal-backdrop")?.classList.toggle("show");
      this.onLoad.emit();
    })
  }


}
