import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './persons.module.scss'
import Grid from '@material-ui/core/Grid'
import NewPersonForm from '../../components/people/new-person-form'
import PeopleList from '../../components/people/people-list'
import Trash from '../../components/common/trash'
import { addPerson } from '../../ducks/people'

class Persons extends Component {
  static propTypes = {}

  render() {
    return (
      <Grid container spacing={24} className={styles.persons}>
        <Grid item md className="newPerson">
          <NewPersonForm onSubmit={this.props.addPerson} />
        </Grid>
        <Grid item md>
          <PeopleList />
        </Grid>
        <Grid item md>
          <Trash />
        </Grid>
      </Grid>
    )
  }
}

export default connect(null, { addPerson })(Persons)
