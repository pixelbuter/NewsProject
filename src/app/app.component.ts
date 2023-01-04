import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'NewsProject';
  @ViewChild(MatSidenav) sideNav!: MatSidenav

  constructor(private observer: BreakpointObserver, private cdr: ChangeDetectorRef) {

  }
  ngAfterViewInit(): void {
    this.sideNav.opened = true;
    this.observer.observe(['(max-width:800px)'])
      .subscribe((res) => {
        if (res?.matches) {
          this.sideNav.mode = "over";
          this.sideNav.close();
        } else {
          this.sideNav.mode = 'side';
          this.sideNav.open();
        }
      })
    this.cdr.detectChanges();
  }
}
