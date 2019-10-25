import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesPreviewComponent } from './games-preview.component';

describe('GamesPreviewComponent', () => {
  let component: GamesPreviewComponent;
  let fixture: ComponentFixture<GamesPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
