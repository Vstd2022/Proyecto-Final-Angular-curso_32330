import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from './shared/layout/navbar/navbar.component';
import { ToolbarComponent} from './shared/layout/toolbar/toolbar.component';
import { PageWrapperComponent } from './shared/layout/page-wrapper/page-wrapper.component';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import { MyMaterialModule } from './shared/modules/my-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentDialogComponent } from './shared/components/student-dialog/student-dialog.component';
import { SidebarComponent } from './shared/layout/sidebar/sidebar.component';
import { ConversorPipe } from './conversor.pipe';
import { ResaltadoDirective } from './resaltado.directive'; 
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,  
    NavbarComponent,
    ToolbarComponent,
    PageWrapperComponent,
    StudentsPageComponent,
    StudentDialogComponent,
    SidebarComponent,
    ConversorPipe,
    ResaltadoDirective,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatToolbarModule,
    MyMaterialModule,  
    ReactiveFormsModule ,
    MatListModule,
    MatSidenavModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
