import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { CreateClassComponent } from './create-class/create-class.component';

import { MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatSnackBarModule} from '@angular/material';
import { HomeComponent } from './home/home.component';
import { TweetComponent } from './tweet/tweet.component';

import {HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { StudentViewComponent } from './student-view/student-view.component';
import { ClassViewComponent } from './class-view/class-view.component';

import {ChartsModule} from 'ng2-charts';
import {StudentService} from './services/student.service';
import {TweetsService} from './services/tweets.service';
import {SectionService} from './services/section.service';
import {InMemoryDataServiceService} from './in-memory-data-service.service';
import { EditClassComponent } from './edit-class/edit-class.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CreateClassComponent,
    HomeComponent,
    TweetComponent,
    StudentViewComponent,
    ClassViewComponent,
    EditClassComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataServiceService, {dataEncapsulation : false}
    ),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    ChartsModule],
  providers: [StudentService, TweetsService, SectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
