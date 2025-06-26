import {NgModule} from '@angular/core';
import { GroupsComponent } from './groups.component';
import { GroupsRoutingModule } from './groups.routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
@NgModule({
    imports:[CommonModule,GroupsRoutingModule,FormsModule],
    declarations:[GroupsComponent]
})
export class GroupsModule{

}