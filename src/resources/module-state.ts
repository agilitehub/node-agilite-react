import { Theme, ThemeInterface } from './theme'
import Enums from './enums'

import DefaultRootContent from '../components/DefaultRootContent'
import { RightMenuInterface } from '../components/RightMenu'
import { LeftMenuInterface } from '../components/LeftMenu'
import { TabChangeFunctionInterface, TabCloseFunctionInterface } from '../components/TabNavigation';

export interface ModuleConfigInterface {
  state: {
    title: string,
    theme: ThemeInterface,
    rootContent: React.ReactNode,
    leftMenu: LeftMenuInterface,
    rightMenu: RightMenuInterface,
    toolbar: {
      enabled: boolean,
      title: React.ReactNode | string,
      customMenus: {
        content: React.ReactNode,
      }
    },
    tabNavigation: {
      enabled: boolean,
      rootTabKey: string,
      rootTabTitle: React.ReactNode | string,
      activeKey: string,
      animated: boolean,
      onTabChange: TabChangeFunctionInterface,
      onTabClose: TabCloseFunctionInterface,
      tabs: Array<{
        key: string,
        closeable: boolean,
        title: string,
        content: React.ReactNode,
      }>
    }
  }
}

export const ModuleConfig: ModuleConfigInterface = {
  state: {
    title: Enums.defaultAppName,
    rootContent: DefaultRootContent,
    theme: Theme,
    leftMenu: {
      leftMenuTitle: 'Left Menu',
      leftMenuEnabled: false,
      menuItems: [],
      visible: false,
      onLeftMenuOpen: () => {},
      onLeftMenuClose: () => {},
      onLeftMenuItemClick: () => {},
      expandedMenuItems: []
    },
    rightMenu: {
      rightMenuTitle: 'Right Menu',
      rightMenuEnabled: false,
      menuItems: [],
      visible: false,
      onRightMenuOpen: () => {},
      onRightMenuClose: () => {},
      onRightMenuItemClick: () => {},
      expandedMenuItems: []
    },
    toolbar: {
      enabled: true,
      title: 'Agilit-e React',
      customMenus: {
        content: null
      }
    },
    tabNavigation: {
      enabled: false,
      rootTabKey: 'home',
      rootTabTitle: 'Home',
      activeKey: 'home',
      animated: true,
      tabs: [],
      onTabChange: () => {},
      onTabClose: () => {}
    }
  }
}