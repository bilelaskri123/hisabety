import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from "jquery";
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.page.html',
  styleUrls: ['./category-detail.page.scss'],
})
export class CategoryDetailPage implements OnInit {

  private categoryId: string;
  public category;
  public factures = [];
  constructor( private activatedRoute: ActivatedRoute, private router: Router, private categoriesService: CategoriesService) { 
   
  }

  ngOnInit() {
   this.activatedRoute.paramMap.subscribe(params => {
     this.categoryId = params.get('categoryId');
     this.category = this.categoriesService.getCategoryById(this.categoryId);
     this.factures = this.category.factures;
     console.log(this.category);
   })
  }


  





}
