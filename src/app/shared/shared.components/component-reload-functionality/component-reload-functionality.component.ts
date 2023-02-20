import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component-reload-functionality',
  templateUrl: './component-reload-functionality.component.html',
  styleUrls: ['./component-reload-functionality.component.scss']
})
export class ComponentReloadFunctionalityComponent implements OnInit {

  constructor(public _router:Router) { }

  ngOnInit(): void {
  }

  reloadComponent(self: boolean, urlToNavigateTo?: string) {
    //skipLocationChange:true means dont update the url to / when navigating
    console.log("Current route I am on:", this._router.url);
    const url = self ? this._router.url : urlToNavigateTo;
    this._router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this._router.navigate([`/${url}`]).then(() => {
        console.log(`After navigation I am on:${this._router.url}`)
      })
    })
  }

  reloadPage() {
    window.location.reload()
  }

}
