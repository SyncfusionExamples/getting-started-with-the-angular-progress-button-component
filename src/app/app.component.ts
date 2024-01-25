import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProgressButtonModule, SpinSettingsModel, AnimationSettingsModel,
ProgressButton, ProgressEventArgs } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProgressButtonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'example';
  public spinSettings : SpinSettingsModel = { position: "Right", width: 20,
 template: '<div class="template"></div>' };
 public animationSettings : AnimationSettingsModel = { effect: 'SlideUp', 
 duration: 400, easing: 'linear '};
 @ViewChild('progressBtn') progressButton!: ProgressButton;
 public Begin(args: ProgressEventArgs): void {
  this.progressButton.content = "Downloading";
 }
 public End(args: ProgressEventArgs): void {
  this.progressButton.content = "Download";
 }
}
