import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import styles from './app.module.scss'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { greyTheme } from './material-ua-themes'
import AuthPage from './routes/auth'
import { default as AdminPage } from './routes/admin'
import ProtectedRoute from './components/common/protected-route'
import TopMenu from './components/topMenu'
import CustomDragLayer from './components/common/custom-drag-layer'

import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      top: false,
      left: false,
      bottom: false,
      right: false
    }

    this.toggleDrawer = this.toggleDrawer.bind(this)
  }

  toggleDrawer = (side, open) => () => {
    console.log(side)
    this.setState({
      [side]: open
    })
  }

  render() {
    return (
      <MuiThemeProvider theme={greyTheme}>
        <div className={styles.app}>
          <TopMenu toggleDrawer={this.toggleDrawer} />
          <Route path="/auth" component={AuthPage} />
          <ProtectedRoute path="/admin" component={AdminPage} />
          <CustomDragLayer />
        </div>
        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            Drawer close close close close close
          </div>
          <Divider />
        </Drawer>
      </MuiThemeProvider>
    )
  }
}

export default App
