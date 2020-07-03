import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';

import { TodoListComponent } from './todo-list.component';
import { TodoService } from './todo.service';
import { DemoComponent } from './demo/demo.component';
import { AddmenuComponent } from './addmenu/addmenu.component';
import { DisplayMenuComponent } from './display-menu/display-menu.component';
import {HttpClientModule} from '@angular/common/http'
import {HttpserviceService} from './service/httpservice.service'
import { UploadFileService } from './service/upload-file.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    DemoComponent,
    AddmenuComponent,
    DisplayMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    TodoService,
    HttpserviceService,
    UploadFileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }