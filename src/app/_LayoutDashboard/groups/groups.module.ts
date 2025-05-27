import {NgModule} from '@angular/core';
import { GroupsComponent } from './groups.component';
import { GroupsRoutingModule } from './groups.routing.module';
import { CommonModule } from '@angular/common';
@NgModule({
    imports:[CommonModule,GroupsRoutingModule],
    declarations:[GroupsComponent]
})
export class GroupsModule{

}