import { Component, OnInit } from '@angular/core';

import { ConfigService } from '../service/config.service';
import { DealerService } from '../service/dealer.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css'],
})
export class ControlPanelComponent implements OnInit {
  constructor(
    private configService: ConfigService,
    private dealerService: DealerService
  ) {}

  ngOnInit(): void {}

  onNewGame(): void {
    // console.log(`TRACER CPC.oNG`);
    this.dealerService.newGame();
  }

  onToggleTransparency(): void {
    // console.log(`TRACER CPC.oTT`);
    this.configService.toggleTransparency();
  }
}
