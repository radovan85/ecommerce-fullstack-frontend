import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ProductCategory } from '../../../classes/product-category';
import { AuthService } from '../../../services/auth.service';
import { ProductCategoryService } from '../../../services/product-category.service';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
  standalone: true,
  imports: [NavbarComponent, CommonModule]
})
export class CategoryListComponent implements OnInit {

  private allCategories: ProductCategory[] = [];
  private paginatedCategories: ProductCategory[] = [];
  private categoryService = inject(ProductCategoryService);
  private pageSize = 5;
  private currentPage = 1;
  private totalPages = 1;
  private hasAuthorityAdmin: boolean = false;
  private authService = inject(AuthService);

  ngOnInit(): void {
    Promise.all([
      this.listAllCategories(),
      //this.setPage(1),
      this.hasAuthorityAdmin = this.authService.isAdmin()
    ])
  }

  redirectAddCategory() {
    this.categoryService.redirectAddCategory();
  }

  listAllCategories() {
    this.categoryService.collectAllCategories()
      .then((response) => {
        setTimeout(() => {
          this.allCategories = response.data;
          this.totalPages = Math.ceil(this.allCategories.length / this.pageSize);
          this.setPage(1);
        })
      })
  }

  setPage(page: number) {
    if (page < 1 || page > this.totalPages) {
      return;
    }
    this.currentPage = page;
    this.paginatedCategories = this.allCategories.slice((page - 1) * this.pageSize, page * this.pageSize);
  }

  nextPage() {
    this.setPage(this.currentPage + 1);
  }

  prevPage() {
    this.setPage(this.currentPage - 1);
  }

  deleteCategory(categoryId: any) {
    if (confirm(`Remove this category?\nIt will affect all related data!`)) {
      this.categoryService.deleteCategory(categoryId)
        .then(() => {
          // Remove the category from allCategories array
          this.allCategories = this.allCategories.filter(cat => cat.productCategoryId !== categoryId);

          // Remove the category from paginatedCategories array if it exists
          this.paginatedCategories = this.paginatedCategories.filter(cat => cat.productCategoryId !== categoryId);

          // Update the total pages
          this.totalPages = Math.ceil(this.allCategories.length / this.pageSize);

          // If currentPage is greater than totalPages after deletion, set currentPage to the last page
          if (this.currentPage > this.totalPages) {
            this.currentPage = this.totalPages;
          }
        })

        .catch(() => {
          alert(`Failed!`);
        })
    }
  }


  redirectUpdateCategory(categoryId: any) {
    this.categoryService.redirectUpdateCategory(categoryId);
  }

  public getHasAuthorityAdmin(): boolean {
    return this.hasAuthorityAdmin;
  }

  public getPaginatedCategories(): ProductCategory[] {
    return this.paginatedCategories;
  }

  public getCurrentPage(): number {
    return this.currentPage;
  }

  public getTotalPages(): number {
    return this.totalPages;
  }

  public getAllCategories(): ProductCategory[] {
    return this.allCategories;
  }

}


