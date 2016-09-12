import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizationService } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AboutMeService } from '../services/about-me.service';
import {  
          FormGroup, 
          FormControl, 
          Validators, 
          FormBuilder,
          AbstractControl
                              } from '@angular/forms';
import { ImageCropperComponent, CropperSettings, Bounds } from '../ng2-img-cropper/index';
import { IAboutMe } from '../interfaces/about-data.interface';

@Component({
  moduleId: module.id,
  selector: 'app-admin-about',
  templateUrl: 'admin-about.component.html',
  styleUrls: ['admin-about.component.css'],
  providers: [AboutMeService],
  directives: [ImageCropperComponent]
})
export class AdminAboutComponent implements OnInit {

  info: IAboutMe;
  error: string;
  
  aboutForm: FormGroup;

  title: AbstractControl;
  content: AbstractControl;
  name: AbstractControl;
  number: AbstractControl;
  mail: AbstractControl;
  snapchat: AbstractControl;
  instagram: AbstractControl;

  data:any;
  cropperSettings: CropperSettings;
  @ViewChild('cropper', undefined) cropper:ImageCropperComponent;

  showCanvas: boolean;
  croppedState: boolean;

  triggerCanvas(crop = null) {
    this.showCanvas = !this.showCanvas;
    if(crop){ this.croppedState = crop; }
  }

  constructor(
    private _router: Router,
    private _aboutMeService: AboutMeService,
    private _formBuilder: FormBuilder,
    private _sanitize: DomSanitizationService
  ) { }

  ngOnInit() {
    if(!localStorage.getItem("user") || !localStorage.getItem("token")){
      this._router.navigateByUrl('login');
    } else {
      this.showCanvas = false;
      this.aboutForm = this._formBuilder.group({});
      this._aboutMeService.getInfo().subscribe(
        response => {
          if(response["error"]) { this.error = response["errpr"]; }
          else {
            this.info = response["about"][0];
            this.aboutForm = this._formBuilder.group({
              "title": [this.info.title],
              "content": [this.info.content],
              "name": [this.info.name],
              "number": [this.info.number],
              "mail": [this.info.mail],
              "snapchat": [this.info.snapchat],
              "instagram": [this.info.instagram]
            });

            this.title = this.aboutForm.controls['title'];
            this.content = this.aboutForm.controls['content'];
            this.name = this.aboutForm.controls['name'];
            this.number = this.aboutForm.controls['number'];
            this.mail = this.aboutForm.controls['mail'];
            this.snapchat = this.aboutForm.controls['snapchat'];
            this.instagram = this.aboutForm.controls['instagram'];
          }
        }
      );
    
      this.cropperSettings = new CropperSettings();
      this.cropperSettings.width = 230;
      this.cropperSettings.height = 230;
      this.cropperSettings.keepAspect = true;
      this.cropperSettings.croppedWidth = 230;
      this.cropperSettings.croppedHeight = 230;
      this.cropperSettings.canvasWidth = 700;
      this.cropperSettings.canvasHeight = 400;
      this.cropperSettings.minWidth = 230;
      this.cropperSettings.minHeight = 230;
      this.cropperSettings.rounded = true;
      this.cropperSettings.minWithRelativeToResolution = true;
      this.cropperSettings.cropperDrawSettings.strokeColor = 'rgba(245,245,245,1)';
      this.cropperSettings.cropperDrawSettings.strokeWidth = 2;
      this.cropperSettings.noFileInput = true;
      this.data = {};

    }

  }

  sanitizeImage() {
    return this._sanitize.bypassSecurityTrustUrl(this.info.image);
  }

  cropped(bounds:Bounds) {
  }

  fileChangeListener($event) {
      let image:any = new Image();
      let file:File = $event.target.files[0];
      let myReader:FileReader = new FileReader();
      let that = this;
      myReader.addEventListener('loadend', function(loadEvent:any){
          image.src = loadEvent.target.result;
          that.cropper.setImage(image);
      });

      myReader.readAsDataURL(file);
   }
   
  upload(data, image = null) {
    let requestData = {};
    if(!this.data.image){
      requestData = {
        "type": "about",
        "id": this.info.id,
        "title": data.title,
        "content": data.content,
        "name": data.name,
        "number": data.number,
        "mail": data.mail,
        "snapchat": data.snapchat,
        "instagram": data.instagram
      };
    } else {
      requestData = {
        "type": "about",
        "id": this.info.id,
        "title": data.title,
        "content": data.content,
        "name": data.name,
        "number": data.number,
        "mail": data.mail,
        "snapchat": data.snapchat,
        "instagram": data.instagram,
        "image": this.base64()
      };
    }
    this._aboutMeService.upload(requestData).subscribe(
      success => {
        if(success['success']){ this._router.navigateByUrl('admin'); }
      }
    );
  }

  base64(){
    if(this.data.image) { 
      let tmp = this.data.image.replace("data:image/png;base64,", "");
      tmp = tmp.replace("data:image/jpeg;base64,", "");
      return tmp; 
    }
    else { return ""; }
  }

}
