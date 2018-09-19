import { Type } from 'class-transformer';

export class NavItem {
  _id?: string;
  referenceName?: string;
  displayName: string;
  iconName: string;
  route?: string;
  disabled?: boolean;
  parent?: string;
  @Type(() => NavItem)
  submenus?: NavItem[];
  // owner: Owner;

}
