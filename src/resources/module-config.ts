import { Theme, ThemeInterface } from './theme'
import { LeftMenuInterface, RightMenuInterface } from '../index'
import Enums from './enums'

import { DefaultRootContent } from '../components/DefaultRootContent'

interface TabChangeFunctionInterface {
  (key: string): string | undefined | void
}

interface TabCloseFunctionInterface {
  (key: any, action: string): void | undefined
}

export interface ModuleConfigInterface {
  config: {
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
  config: {
    title: Enums.defaultAppName,
    rootContent: DefaultRootContent,
    theme: Theme,
    leftMenu: {
      title: 'Left Menu',
      enabled: true,
      menuItems: [],
      visible: false,
      onOpen: () => {},
      onClose: () => {},
      handleMenuItemClick: () => {},
      expandedMenuItems: []
    },
    rightMenu: {
      title: 'Right Menu',
      enabled: true,
      menuItems: [],
      visible: false,
      onOpen: () => {},
      onClose: () => {},
      handleMenuItemClick: () => {},
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
      enabled: true,
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