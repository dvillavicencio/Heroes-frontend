import {Injectable} from "@angular/core";
import {Player} from "./player";
import {Hero} from "./hero";
import {HttpClient} from "@angular/common/http";


@Injectable({providedIn : 'root'})
export class playerService{

  private players: Player[] = [];

  constructor(private http : HttpClient) {}

  createAndStorePlayer(firstName: string, lastName: string, nickname: string){
   const postData: Player = { firstName: firstName, lastName: lastName, nickname: nickname};
    this.http.post<Player>('${http://localhost:8080}/user/api/add', postData)
      .subscribe();
  }

  fetchPlayers(){
    this.http.get<Player[]>('http://localhost:8080/user/api/all');
  }

  fetchHeroes(){
    return this.http.get<Hero[]>(`http://localhost:8080/heroes/api/all`);
  }
}
