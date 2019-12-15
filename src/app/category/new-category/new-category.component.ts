import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CategoryService} from '../category.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.scss']
})
export class NewCategoryComponent implements OnInit {
  categoryForm: FormGroup;

  constructor(private fb: FormBuilder,
              private categoryService: CategoryService,
              private router: Router) {
  }

  ngOnInit() {
    this.categoryForm = this.fb.group({
      name: [''],
      description: ['']
    });
  }

  onSubmit() {
    const category = this.categoryForm.value;
    this.categoryService.addCategory(category).subscribe(result => {
      alert('Added ' + category.name);
      this.router.navigateByUrl('/category');
    });
  }

}
