import { Component, Input, OnInit } from "@angular/core";
import { Player } from "../model/player.model";
import { Card } from "../model/card/card.model";

@Component({
  selector: "app-player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.css"],
})
export class PlayerComponent implements OnInit {
  @Input() player: Player;

  constructor() {}

  ngOnInit(): void {}

  onClick(card: Card) {
    console.log(`TRACER PlayerComp onClick for ${card.toString()}`);
  }
}
