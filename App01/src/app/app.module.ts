import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DetalhePage } from '../pages/detalhe/detalhe';
import { CadUsuarioPage } from '../pages/cad-usuario/cad-usuario';
import { LoginPage } from '../pages/login/login';

import { HttpClientModule } from '@angular/common/http';
import { ProdutosProvider } from '../providers/produtos/produtos';
import { UsuariosProvider } from '../providers/usuarios/usuarios';

import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetalhePage,
    CadUsuarioPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetalhePage,
    CadUsuarioPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProdutosProvider,
    UsuariosProvider
  ]
})
export class AppModule {}
