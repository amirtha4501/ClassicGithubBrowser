import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { RepoListComponent } from './components/repo-list/repo-list.component';
import { RepoCardComponent } from './components/repo-card/repo-card.component';
import { HighlightDirective } from './directives/highlight.directive';
import { TruncatePipe } from './pipes/truncate.pipe';

@NgModule({ declarations: [
        AppComponent,
        SearchComponent,
        RepoListComponent,
        RepoCardComponent,
        HighlightDirective,
        TruncatePipe
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        FormsModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
