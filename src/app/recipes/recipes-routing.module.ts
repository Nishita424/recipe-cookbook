import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { RecipeResolverService } from './recipe-resolver.service';
import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from '../recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';

const routes: Routes = [
  {
    path: '',
    component: RecipesComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: RecipeStartComponent },
      // Since this path is hardcoded, this should come before :id path
      { path: 'new', component: RecipeEditComponent },
      {
        path: ':id/edit',
        component: RecipeEditComponent,
        resolve: [RecipeResolverService],
      },
      {
        path: ':id',
        component: RecipeDetailsComponent,
        resolve: [RecipeResolverService],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesRoutingModule {}
