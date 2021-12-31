import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu.interface';
import { MenuService } from 'src/app/service/menu.service';
import { SecurityService } from 'src/app/service/security.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listMenus: Array<Menu> = [];
  panelOpenState = false;
  perfil?: string;

  constructor(
    private seguridadService: SecurityService,
    private menuService: MenuService
  ) {

  }

  async ngOnInit() {
    this.perfil = 'ADM';
    this.getMenus();
  }

  getMenus = async () => {
    const result = await this.menuService.cargarMenu().toPromise();
    this.listMenus = await this.obtenerMenu(result as any);
    console.log(this.listMenus);
  }

  obtenerMenu = async (list: Array<Menu>) => {
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
    return menusPadres;
  }

  cerrarSesion() {
    this.seguridadService.cerrarSesion();
  }
}
