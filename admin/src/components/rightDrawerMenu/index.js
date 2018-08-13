import React, { Component } from 'react'

class TopMenu extends Component {
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
    this.setState({
      [side]: open
    })
  }

  render() {
    return (
      <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
        <div
          tabIndex={0}
          role="button"
          onClick={this.toggleDrawer('left', false)}
          onKeyDown={this.toggleDrawer('left', false)}
        >
          Drawer close
        </div>
      </Drawer>
    )
  }
}

export default TopMenu
