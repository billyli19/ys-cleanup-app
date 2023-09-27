import { Injectable } from '@angular/core';
import { ImageDetails, initialImageDetails } from '../shared/interfaces/ImageDetails';

@Injectable()
export class ImageDetailsService {
  imageDetails: ImageDetails = initialImageDetails;  // Image details object for current, after and beg Count
  constructor() { }
  
}
