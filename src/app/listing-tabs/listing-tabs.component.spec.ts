import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingTabsComponent } from './listing-tabs.component';

describe('ListingTabsComponent', () => {
  let component: ListingTabsComponent;
  let fixture: ComponentFixture<ListingTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
