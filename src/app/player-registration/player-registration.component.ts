import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import {Player} from "./player";
import {map} from "rxjs/operators";
import {playerService} from "./player.service";
import {Hero} from "./hero";

@Component({
  selector: 'app-player-registration',
  templateUrl: './player-registration.component.html',
  styleUrls: ['./player-registration.component.css']
})
export class PlayerRegistrationComponent implements OnInit {

  currentPlayer: Player = { firstName: "", lastName: "", nickname: ""};
  players: Player[] = [];
  heroes: Hero[] = [];
  isFetching = false;

  constructor(private http : HttpClient, private playerService : playerService) {}

  ngOnInit(): void {
  }

  onCreateUser(playerData: Player) {
    this.playerService.createAndStorePlayer(playerData.firstName, playerData.lastName, playerData.nickname);
    this.currentPlayer.firstName = playerData.firstName;
    this.currentPlayer.lastName = playerData.lastName;
    this.currentPlayer.nickname = playerData.nickname;
    console.log(this.currentPlayer);
  }

  onRequestHeroes(){
    this.isFetching = true;
    this.playerService.fetchHeroes().subscribe(
      heroesArray => {
        this.isFetching = false;
        this.heroes = heroesArray;
        console.log(this.heroes);
      }
    );
  }

  clearHeroes() {
    this.heroes = [];
  }
}
