import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PhotosService } from '../photo/photos.service';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css'],
})
export class PhotoFormComponent implements OnInit {
  photoForm!: FormGroup;
  _file!: File;
  constructor(
    private fb: FormBuilder,
    private service: PhotosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.photoForm = this.fb.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true],
    });
  }

  set file(event: any) {
    const file = event.target.files[0];
    this._file = file;
  }

  upload() {
    const description = this.photoForm.get('description')?.value;
    const allowComments = this.photoForm.get('allowComments')?.value;
    const file = this._file;

    this.service.upload(description, allowComments, file).subscribe({
      next: (res) => this.router.navigate(['']),
      error: (err) => console.log(err),
    });
  }
}
