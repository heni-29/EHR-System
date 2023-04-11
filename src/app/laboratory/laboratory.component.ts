import { Component } from '@angular/core';

@Component({
  selector: 'app-laboratory',
  templateUrl: './laboratory.component.html',
  styleUrls: ['./laboratory.component.css']
})
export class LaboratoryComponent {
  sideNavStatus: boolean = true;
  dataList:Array<File>


}
