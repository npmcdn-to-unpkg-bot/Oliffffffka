import { Component, OnInit } from '@angular/core';
import { DomSanitizationService } from '@angular/platform-browser';
import { AboutMeService } from '../services/about-me.service';
import { IAboutMe } from '../interfaces/about-data.interface';

@Component({
  moduleId: module.id,
  selector: 'app-about-me',
  templateUrl: 'about-me.component.html',
  styleUrls: ['about-me.component.css'],
  providers: [AboutMeService]
})
export class AboutMeComponent implements OnInit {
  
  info: IAboutMe;
  error: string;

  constructor(
    private _aboutMeService: AboutMeService,
    private _sanitize: DomSanitizationService
  ) { }

  ngOnInit() {
    this._aboutMeService.getInfo().subscribe(
      response => {
        if(response["error"]){ this.error = response["error"]; }
        else { this.info = response["about"][0] }
      }
    );
  }

  sanitizeImage() {
    return this._sanitize.bypassSecurityTrustUrl(this.info.image); 
  }

}
