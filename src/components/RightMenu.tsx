import * as React from 'react'
import { Drawer, Menu } from 'antd'

import { Theme, ThemeInterface } from '../resources/theme';

interface props {
  theme: ThemeInterface,
  rightMenu: RightMenuInterface
}

interface onRightMenuOpen {
  (event: any): any
}

interface onRightMenuClose {
  (event: any): any
}

interface MenuItem {
  key: string
  children?: Array<MenuItem>
  title: React.ReactNode | string
}

interface onMenuItemClick {
  (event: any): any
}

export interface RightMenuInterface {
  enabled: boolean,
  title: React.ReactNode,
  menuItems: Array<MenuItem>,
  visible: boolean,
  onOpen: onRightMenuOpen,
  onClose: onRightMenuClose,
  handleMenuItemClick: onMenuItemClick,
  expandedMenuItems: Array<string>
}

export const RightMenu: React.SFC<props> = props => {
  return (
    <Drawer
      title={<div style={{ color: props.theme.secondaryLight ? props.theme.secondaryLight : Theme.secondaryLight }}>{props.rightMenu.title}</div>}
        placement='right'
        closable={true}
        width={300}
        visible={props.rightMenu.visible}
        onClose={props.rightMenu.onClose}
        headerStyle={{
          backgroundColor: props.theme.primary ? props.theme.primary : Theme.primary,
          color: props.theme.secondaryLight ? props.theme.secondaryLight : Theme.secondaryLight
        }}
      >
        <Menu
          onClick={props.rightMenu.handleMenuItemClick}
          mode='inline'
          defaultOpenKeys={props.rightMenu.expandedMenuItems}
        >
          {props.rightMenu.menuItems.map(child1 => {
            if (child1.children && child1.children.length > 0) {
              return (
                <Menu.SubMenu
                  key={child1.key}
                  title={child1.title}
                >
                  {child1.children.map(child2 => {
                    if (child2.children && child2.children.length > 0) {
                      return (
                        <Menu.SubMenu
                          key={child2.key}
                          title={child2.title}
                        >
                          {child2.children.map(child3 => {
                            if (child3.children && child3.children.length > 0) {
                              return (
                                <Menu.SubMenu
                                  key={child3.key}
                                  title={child3.title}
                                >
                                  {child3.children.map(child4 => {
                                    if (child4.children && child4.children.length > 0) {
                                      return (
                                        <Menu.SubMenu
                                          key={child4.key}
                                          title={child4.title}
                                        >
                                          {child4.children.map((child5: { key: string | number | null | undefined; title: React.ReactNode; }) => {
                                            return <Menu.Item key={child5.key}>{child5.title}</Menu.Item>
                                          })}
                                        </Menu.SubMenu>
                                      )
                                    } else {
                                      return <Menu.Item key={child4.key}>{child4.title}</Menu.Item>
                                    }
                                  })}
                                </Menu.SubMenu>
                              )
                            } else {
                              return <Menu.Item key={child3.key}>{child3.title}</Menu.Item>
                            }
                          })}
                        </Menu.SubMenu>
                      )
                    } else {
                      return <Menu.Item key={child2.key}>{child2.title}</Menu.Item>
                    }
                  })}
                </Menu.SubMenu>
              )
            } else {
              return <Menu.Item key={child1.key}>{child1.title}</Menu.Item>
            }
          })}
        </Menu>
      </Drawer>
  )
}