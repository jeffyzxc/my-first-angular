import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedContent = 'recipe';

  onNavigate(selectedItems: string){
    this.loadedContent = selectedItems;
  }

  selectedRecipeData(data){
    console.log(data);
  }



}
