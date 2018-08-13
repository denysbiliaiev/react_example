import React, { Component } from 'react'
import styles from './topMenu.module.scss'
import history from '../../history'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

class TopMenu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: 0
    }
  }

  handleChange = (event, value) => {
    this.setState({ value })
    history.push(this.routes[value])
  }

  routes = ['/admin/events', '/admin/people', '/auth/signIn']

  render() {
    const { toggleDrawer } = this.props

    return (
      <div className={styles.topMenu}>
        <AppBar position="static">
          <Toolbar className="tabs">
            <IconButton aria-label="Menu" onClick={toggleDrawer('left', true)}>
              <MenuIcon />
            </IconButton>
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              scrollable
              scrollButtons="off"
              className="tabs"
            >
              <Tab label="Events" />
              <Tab label="Peoples" />
              <Tab label="Auth" />
            </Tabs>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default TopMenu
