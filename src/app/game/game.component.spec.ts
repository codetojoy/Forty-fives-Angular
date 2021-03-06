import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameComponent } from './game.component';

import { ConfigService } from '../service/config.service';
import { DealerService } from '../service/dealer.service';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameComponent],
      providers: [ConfigService, DealerService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
