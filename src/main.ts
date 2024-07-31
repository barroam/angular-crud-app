import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config'; // Assurez-vous que ce fichier existe et est configuré correctement
import { provideRouter } from '@angular/router';
import { provideHttpClient,withFetch} from '@angular/common/http';
import { routes } from './app/app.routes';
import { provideClientHydration } from '@angular/platform-browser';
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()), // Ajouter withFetch() ici
    provideClientHydration()
  ]
});
