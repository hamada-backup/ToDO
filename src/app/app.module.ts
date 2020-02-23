import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { ListaComponent } from "./lista/lista.component";
import { FormularioComponent } from "./formulario/formulario.component";

@NgModule({
  declarations: [AppComponent, ListaComponent, FormularioComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
