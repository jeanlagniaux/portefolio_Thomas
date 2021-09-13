import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-ours-polaire',
  templateUrl: './ours-polaire.component.html',
  styleUrls: ['./ours-polaire.component.scss']
})

export class OursPolaireComponent implements OnInit {

  public href: string = "";
  public video_url;
  public description: string = "";
  public list_img: Array<string> = [];

  constructor(private router: Router, private domSanitizer : DomSanitizer) { }

  ngOnInit(): void {
    this.href = this.router.url;
    this.createArticle(this.href);
    console.log(this.href);
  }

  createArticle(href: string) {
    switch (href) {
      case "/oursPolaire": {
        this.video_url = 'https://player.vimeo.com/video/529756374?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;h=f16db7eefd';
        this.description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi illo sapiente ipsum magni libero odit dolor, quidem, iure necessitatibus asperiores optio ipsa accusamus unde officia consequatur voluptatum, maiores in beatae!";
        this.list_img = [
          '/\assets/\img/\PIGNA V1  (3).jpg',
          '/\assets/\img/\PIGNA V1  (4).jpg'
        ]
        break;
      }
      default: {
        this.href = "goodbye";
        break;
      }
    }

  }


}
