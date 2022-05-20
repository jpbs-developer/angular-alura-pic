import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoFormComponent } from './photo-form.component';
import { VMessageModule } from 'src/app/shared/components/v-message/v-message.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ImmediateClickModule } from 'src/app/shared/directives/immediate-click/immediate-click.module';

@NgModule({
  declarations: [PhotoFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VMessageModule,
    ImmediateClickModule,
  ],
})
export class PhotoFormModule {}
