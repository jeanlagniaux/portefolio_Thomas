import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-ours-polaire',
  templateUrl: './ours-polaire.component.html',
  styleUrls: ['./ours-polaire.component.scss']
})

export class OursPolaireComponent implements OnInit {

  public href: string = "";
  public src: string = 'assets/\img/\CONTOURPHOTOalphav.png';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.href = this.router.url;
    console.log(this.router.url);
  }


}
