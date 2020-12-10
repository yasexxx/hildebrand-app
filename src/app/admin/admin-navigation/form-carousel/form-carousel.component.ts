import { Subscription } from 'rxjs';
import { CarouselService } from './../../../_services/carousel.service';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-form-carousel',
  templateUrl: './form-carousel.component.html',
  styleUrls: ['./form-carousel.component.scss']
})
export class FormCarouselComponent implements OnInit, OnDestroy{

  isSubmitted = false;
  imageUpload;
  file: any;
  chooseFile = 'Choose file (required)';
  product = {
    name: '',
    description:''
  }
  private _subscription$: Subscription;
  constructor(private router: Router,
              private carouselService: CarouselService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if(this._subscription$) { this._subscription$.unsubscribe()}
  }

  onFileChanged (event) :void {
    const file = event.target.files[0];
    const img = /image/gi;
    if (file?.name !== undefined && (file.type).search(img) !== -1){
      this.imageUpload = file;
      this.chooseFile = file.name;
    }
  }

  onSubmit() :void {
    const formData = new FormData();
    formData.append('file', this.imageUpload);
    formData.append('name', this.product.name);
    formData.append('miniDescription', this.product.description);

    if(formData){
      this._subscription$ = this.carouselService.createCarousel(formData).subscribe(
        (res) => { this.isSubmitted = true;
            this.chooseFile = 'Choose file';
        },
        (err) => console.log(err)
      );
      }
    }

  addNewCarousel() : void {
    this.isSubmitted = false;
    this.router.navigateByUrl('/', { skipLocationChange: true}).then( () => {
      this.router.navigate(['admin/create-carousel']);
    });
  }

  navigateEdit(): void {
    this.router.navigate(['/admin/edit']);
  }

}
