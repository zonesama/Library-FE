import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DataTransferService} from '../../data-transfer.service';
import {CategoryService} from '../category.service';
import {Router} from '@angular/router';
import {Category} from '../category';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.scss']
})
export class CategoryUpdateComponent implements OnInit {
  categoryForm: FormGroup;
  category: Category;

  constructor(private fb: FormBuilder,
              private dataTransferService: DataTransferService,
              private categoryService: CategoryService,
              private router: Router) {
  }

  ngOnInit() {
    this.category = this.dataTransferService.getData();
    this.categoryForm = this.fb.group({
      id: [this.category.id],
      name: [this.category.name],
      description: [this.category.description]
    });
  }

  onSubmit() {
    this.categoryService.updateCategory(this.categoryForm.value).subscribe(result => {
      alert('Updated Category with ID: ' + this.category.id);
      this.router.navigateByUrl('/category');
    });
  }
}
