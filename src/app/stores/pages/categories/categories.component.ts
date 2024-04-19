import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { CategoryInterface } from '../../interfaces/category.interface';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styles: ''
})
export class CategoriesComponent implements OnInit{

  displayDialog: boolean = false;

  displayDialogToCreate: boolean=false;


  selectedCategory!: any;
  public categoryList: CategoryInterface[]=[];
  constructor(private categoryService: CategoryService){}


  public ngOnInit(): void {
    console.log("ADIOS MUNDO");
    this.getAllCategories();
    console.log(this.categoryList);
  }
  getAllCategories(){
    this.categoryService.getCategory().subscribe((response: any)=>{
      this.categoryList=response;
      console.log(response);
    })
  }

  deleteCategory(category: CategoryInterface): void {
    // Implementa la lógica para eliminar la categoría aquí
    // Por ejemplo, puedes eliminarla del array de categoryList
    console.log(category);

    this.categoryService.deleteCategory(category.id).subscribe((response)=>{
      console.log(response, 'aaaa');
      const index = this.categoryList.indexOf(category);
      if (index !== -1) {
        this.categoryList.splice(index, 1);
      }
    })
  }

  editCategory(category: CategoryInterface): void {
    // Implementa la lógica para editar la categoría aquí
    // Por ejemplo, puedes abrir un formulario de edición
    this.selectedCategory = category;
    this.showDialog();
    console.log("Editando categoría:", category);
}
showDialog() {
  this.displayDialog = true;
}

hideDialog() {
  this.displayDialog = false;
}

saveCategoryUpdated(){
  this.categoryService.updateCategory(this.selectedCategory).subscribe((response)=>{
    this.displayDialog = false;
  })

}

saveNewCategory(category: CategoryInterface){
  this.categoryService.createCategory(this.selectedCategory).subscribe((response)=>{
    this.displayDialog = false;
  })
}

creatingCategory(): void {
  // Implementa la lógica para editar la categoría aquí
  // Por ejemplo, puedes abrir un formulario de edición
  this.showDialogToCreate();
  //console.log("creando categoría:", category);
  //console.log("Creando categoría:", category);
}


showDialogToCreate() {
  this.displayDialogToCreate = true;
}

hideDialogToCreate() {
  this.displayDialogToCreate = false;
}

}
