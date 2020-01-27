import { TestBed } from '@angular/core/testing';
import { DropdownService } from './dropdown.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

fdescribe('DropdownService', () => {
  beforeEach(() => {
        
    TestBed.configureTestingModule({

      providers:[
        {} 
      ],
      imports:
        [
          HttpClientTestingModule
        ]
    })
  
  });

  it('should be created', () => {
    const service: DropdownService = TestBed.get(DropdownService);
    expect(service).toBeTruthy();
  });
});
