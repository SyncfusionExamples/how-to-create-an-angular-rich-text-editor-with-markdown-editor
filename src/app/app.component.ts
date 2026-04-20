import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { MarkdownFormatter } from '@syncfusion/ej2-angular-richtexteditor';
import { marked } from 'marked';
import { RichTextEditorModule, ToolbarService, ImageService, LinkService, HtmlEditorService, MarkdownEditorService } from '@syncfusion/ej2-angular-richtexteditor';
import { SplitterModule } from '@syncfusion/ej2-angular-layouts'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  imports: [RichTextEditorModule, SplitterModule],
  standalone: true,
  providers: [ToolbarService, ImageService, LinkService, HtmlEditorService, MarkdownEditorService],
})
export class AppComponent implements OnInit {
  title = 'myangularproject';
  public markDownValue = `The Angular Rich Text Editor is a feature-rich WYSIWYG HTML editor and WYSIWYG Markdown editor. The Rich Text Editor is widely used to create blogs, forum posts, notes sections, support tickets (incidents), comment sections, messaging applications, and more. The control provides an efficient user interface for a better editing experience with mobile support. It has a variety of tools to edit and format rich content and return a valid HTML markup or Markdown (MD) content. It allows users to insert images, links, tables, and lists with modular architecture.`;

  public customFormatter: MarkdownFormatter = new MarkdownFormatter({
    listTags: { 'OL': '1., 2., 3.', 'UL': '+ ' }
  });

  public previewValue: string = '';
  public onChange(){
    this.previewValue = marked(this.markDownValue);
  }

  public ngOnInit(): void {
    this.onChange();
  }
}
