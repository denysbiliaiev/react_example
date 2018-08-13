import React, { Component } from 'react'
import style from './events.module.scss'
import Grid from '@material-ui/core/Grid'
import EventsTable from '../../components/events/virtualized-lazy-table'
import SelectedEvents from '../../components/events/selected-events'
import PeopleList from '../../components/people/people-list'
import Trash from '../../components/common/trash'

class Events extends Component {
  static propTypes = {}

  render() {
    return (
      <Grid container spacing={16} className={style.events}>
        <Grid item md>
          <SelectedEvents />
        </Grid>
        <Grid container>
          <Grid item md={4} className="persons">
            <PeopleList />
          </Grid>
          <Grid item md={6}>
            <h2>Click for event and drag persons to event</h2>
            <EventsTable />
          </Grid>
          <Grid item md={2}>
            <Trash />
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default Events
