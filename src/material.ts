import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatIconModule, MatBadgeModule, MatButtonModule, MatCheckboxModule, MatTabsModule, MatInputModule],
  exports: [MatIconModule, MatBadgeModule, MatButtonModule, MatCheckboxModule, MatTabsModule, MatInputModule],
})

export class MaterialModule{}
