import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatListModule } from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatIconModule, MatBadgeModule, MatButtonModule, MatCheckboxModule, MatTabsModule, MatInputModule, MatToolbarModule,  MatSidenavModule, MatListModule, MatCardModule, ScrollDispatchModule, MatGridListModule, MatProgressSpinnerModule, MatSnackBarModule, MatDialogModule, MatDatepickerModule,  MatNativeDateModule, MatFormFieldModule, MatSlideToggleModule],
  exports: [MatIconModule, MatBadgeModule, MatButtonModule, MatCheckboxModule, MatTabsModule, MatInputModule, MatToolbarModule,  MatSidenavModule, MatListModule, MatCardModule, ScrollDispatchModule, MatGridListModule, MatProgressSpinnerModule, MatSnackBarModule, MatDialogModule, MatDatepickerModule,  MatNativeDateModule, MatFormFieldModule, MatSlideToggleModule],
})

export class MaterialModule{}
