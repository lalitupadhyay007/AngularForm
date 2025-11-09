import { Component } from '@angular/core';
import { EpaperService } from './Servcies/epaperS.service';
import { Epaper } from '../Model/EpaperModel.model';
import { errorContext } from 'rxjs/internal/util/errorContext';
import { ApiResponse } from '../Model/api-response.model';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-epaper',
  standalone: true,
  imports:[FormsModule,CommonModule],
  templateUrl: './epaper.component.html',
  styleUrl: './epaper.component.css',
  
})
export class EpaperComponent {
    epaper: Epaper = {
    id: 0,
    title: '',
    editionDate: '',
    filePath: ''
  };
  message = '';
  isSuccess = false;

  constructor (private epaperService: EpaperService ){}

  
   onSubmit() {
    debugger
    this.epaperService.createEpaper(this.epaper).subscribe({
      next: (res: ApiResponse<number>) => {
        this.isSuccess = res.success;
        this.message = res.message;
        if (res.success) {
          console.log('New Epaper ID:', res.data);
        }
      },
      error: (err) => {
        this.isSuccess = false;
        this.message = 'Error connecting to server';
        console.error(err);
        
      }
    });
  }
}