import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Session } from '../models/session.model';
import { CreateSession } from '../models/create-session.model';
import { Speaker } from '../models/speaker.model';

@Injectable({
  providedIn: 'root',
})
export class ConferenceApiService {
 
  private readonly http = inject(HttpClient);

  private readonly endpoints = {
    sessions: `${environment.apiUrl}/sessions`,
    speakers: `${environment.apiUrl}/speakers`,
  };

  getSessions(): Observable<Session[]> {
    return this.http.get<Session[]>(this.endpoints.sessions);
  }
  getSpeakers(): Observable<Speaker[]> {
    return this.http.get<Speaker[]>(this.endpoints.speakers);
  }
  createSession(session: CreateSession): Observable<Session> {
    return this.http.post<Session>(this.endpoints.sessions,session);
  }
  getSessionById(id: number): Observable<Session> {
    return this.http.get<Session>(
      `${this.endpoints.sessions}/${id}`)
  };
}
