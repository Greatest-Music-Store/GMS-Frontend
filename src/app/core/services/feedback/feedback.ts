import { Injectable } from '@angular/core';
import { API_CONFIG } from '../../api.config';
import { HttpClient } from '@angular/common/http';
import { FeedbackModel } from '../../../models/feedback.model';
@Injectable({
  providedIn: 'root',
})
export class FeedbackService {

  private apiUrl = `${API_CONFIG.baseUrl}/api/feedback`


  constructor(private http: HttpClient) {
  }


  postFeedback(description: string, rating: number, productId: string) {
    return this.http.post<FeedbackModel>(
      `${API_CONFIG.baseUrl}/api/feedback`,
      {
        description,
        rating,
        productId
      }
    );
  }
  getFeedback(){
    return this.http.get(
      `${API_CONFIG.baseUrl}/api/feedback`
    )
  }
  getFeedbackId(id: string){
    return this.http.get<FeedbackModel>(
      `${API_CONFIG.baseUrl}/api/feedback`
    )
  }
}
