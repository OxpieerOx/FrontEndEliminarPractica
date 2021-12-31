import { Injectable } from '@angular/core';
import {Menu} from "../interfaces/menu.interface";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  info: Array<any> = [];

  constructor(private http: HttpClient) {
    // this.cargarMenu();
  }

  cargarMenu() {
    return this.http.get('assets/data/menus.json');
  }



  verificarPermiso = async (rol: string, url: string) => {
    let permiso = false;
    const list = await this.cargarMenu().toPromise() as any;
    const menusPadres: Array<Menu> = [];
    const menusHijos: Array<Menu> = [];
    for (const menu of list) {
      if (menu.padre) {
        menusHijos.push(menu);
      } else {
        menusPadres.push(menu);
      }
    }
    for (const padres of menusPadres) {
      const data = menusHijos.filter(x => x.padre === padres.id);
      if (data.length > 0) {
        padres.hijos = data;
      }

    }
    menusPadres.forEach(menu => {
      if (menu.perfil.includes(rol)) {
        if (menu.hijos) {
          menu.hijos.forEach(hijo => {
            const index = hijo.url.indexOf(url);
            if (index > -1) {
              permiso = true;
              return;
            }
          });
        } else {
          const index = menu.url.indexOf(url);
          if (index > -1) {
            permiso = true;
            return;
          }
        }
      } else {
        return;
      }
    });
    return permiso;
  }
}
