import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpClientModule } from '@angular/common/http';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
//import { HttpModule } from '@angular/http';

import { BrMaskerModule } from 'brmasker-ionic-3';

import { AmbienteComprasPage } from '../pages/ambiente-compras/ambiente-compras';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { ListaProdutosComponent } from '../pages/listaProdutos/lista-produtos.component';
import { LoginPage } from '../pages/login/login';
import { HistoricoPage } from '../pages/historico/historico';
import { GasPage } from '../pages/gas/gas';
import { EsqueciSenhaPage } from '../pages/esqueci-senha/esqueci-senha';

import { UsuarioServiceProvider } from '../providers/usuario-service/usuario-service';
import { ListagemProdutosServiceProvider } from '../providers/listagem-produtos-service/listagem-produtos-service';
import { ComprasHistoricoServiceProvider } from '../providers/compras-historico-service/compras-historico-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListaProdutosComponent,
    HistoricoPage,
    LoginPage,
    AmbienteComprasPage,
    GasPage,
    EsqueciSenhaPage
  

  ],
  imports: [
    BrowserModule,
    BrMaskerModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListaProdutosComponent,
    HistoricoPage,
    LoginPage,
    AmbienteComprasPage,
    GasPage,
    EsqueciSenhaPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuarioServiceProvider,
    ListagemProdutosServiceProvider,
    ComprasHistoricoServiceProvider
    ]
})
export class AppModule {}