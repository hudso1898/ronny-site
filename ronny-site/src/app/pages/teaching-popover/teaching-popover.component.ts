import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-teaching-popover',
  templateUrl: './teaching-popover.component.html',
  styleUrls: ['./teaching-popover.component.scss'],
})
export class TeachingPopoverComponent implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {}

  dismiss() {
    this.popoverCtrl.dismiss();
  }
}
