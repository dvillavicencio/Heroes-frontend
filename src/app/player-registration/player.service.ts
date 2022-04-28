import {Injectable} from "@angular/core";
import {Player} from "./player";
import {Hero} from "./hero";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.prod";


@Injectable({providedIn : 'root'})
export class playerService{

  baseUrl = environment.baseUrl;

  constructor(private http : HttpClient) {}

  createAndStorePlayer(firstName: string, lastName: string, nickname: string){
   const postData: Player = { firstName: firstName, lastName: lastName, nickname: nickname};
    this.http.post<Player>(this.baseUrl +  'user/api/add', postData)
      .subscribe();
  }

  fetchPlayers(){
    return this.http.get<Player[]>(this.baseUrl + 'user/api/all');
  }

  fetchHeroes(){
    return this.http.get<Hero[]>(this.baseUrl + 'heroes/api/all');
  }
}
