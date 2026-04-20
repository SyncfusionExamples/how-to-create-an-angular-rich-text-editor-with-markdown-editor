import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RichTextEditorModule, ToolbarService, ImageService, LinkService, HtmlEditorService, MarkdownEditorService } from '@syncfusion/ej2-angular-richtexteditor';
import { SplitterModule } from '@syncfusion/ej2-angular-layouts';
import { AppComponent } from './app.component';


@NgModule({
  imports: [
    BrowserModule,
    RichTextEditorModule,
    SplitterModule, AppComponent
  ],
  providers: [ToolbarService, ImageService, LinkService, HtmlEditorService, MarkdownEditorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
