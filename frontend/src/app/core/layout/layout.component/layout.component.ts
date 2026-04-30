import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

interface MenuOption {
  icon: string;
  label: string;
  route: string;
  subLabel: string;
}

@Component({
  selector: 'app-layout.component',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export default class LayoutComponent {
  menuOptions: MenuOption[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Inicio',
      subLabel: 'inicio',
      route: '/home',
    },
    {
      icon: 'fa-solid fa-times',
      label: 'Undefined',
      subLabel: 'undefined',
      route: '/undefined',
    },
  ];
}
