import { Type }       from 'class-transformer';
import { NavItem }    from './navitem';

export class MenuItemsResults {

  incomplete_results: boolean;

  @Type(() => NavItem) // providing a Type is required.
  private menus: NavItem[];

  total_count: number;

  navigationMenus(): NavItem[] {
    return this.menus;
  }

}
