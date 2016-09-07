import { inject, async, addProviders } from '@angular/core/testing';
import { BaseRequestOptions, Http, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { GetProjects } from './';

var readJSON = require('karma-read-json');


 describe('GetProjectsService', () => {
  let projectService: GetProjects;
  let mockbackend: MockBackend;

  //setting up providers
  beforeEach(() => addProviders([
    BaseRequestOptions,
    MockBackend,
    {
      provide: Http,
      useFactory: (backend, options) => new Http(backend, options),
      deps: [MockBackend, BaseRequestOptions]
    },
    GetProjects
  ]));

  //injecting the instances using another beforeEach
  beforeEach(inject([GetProjects], (service) => {
    projectService = service;
  }));

  //specs
  it('should contain property status', async(() => {
     projectService.request()
     .subscribe(response => {
       expect(response).toContain('status');
     });
  }));

  it('should contain property title', async(() => {
     projectService.request()
     .subscribe(response => {
       expect(response).toContain('title');
     });
  }));
 
 })