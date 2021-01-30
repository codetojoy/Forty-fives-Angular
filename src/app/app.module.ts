import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { GameComponent } from './game/game.component';
import { PlayerComponent } from './player/player.component';

import { ConfigService } from './service/config.service';
import { DealerService } from './service/dealer.service';

@NgModule({
  declarations: [
    AppComponent,
    ControlPanelComponent,
    GameComponent,
    PlayerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ConfigService, DealerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
