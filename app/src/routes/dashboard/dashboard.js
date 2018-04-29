//Core
import React, { Component } from 'react';
import axios from 'axios';

//Components
import Detail from '../../components/detail/detail';

//CSS
import classes from './dashboard.css';

//Assets
import agentImg from '../../assets/stephanie-temple.jpg';

class Dashboard extends Component {
  state = {
    baseURL: 'https://tft-info.firebaseio.com/',
    resources: [],
    suppliers: [],
    notes: [],
    currentType: '',
    currentKey: ''
  }

  componentDidMount() {
    this.getResources();
    this.getSuppliers();
    this.getNotes();
  }
  
  getResources = () => {
    const resourcesURL = `${this.state.baseURL}resources.json`;
    const learningURL = `${this.state.baseURL}learningResources.json`
    let newResources = [];

    axios.get(resourcesURL)
    .then(res => {
      const data = res.data;
      for(let property in data) {
        newResources.push({...data[property], key: property})
      }
      axios.get(learningURL)
      .then(res => {
        const data = res.data;
        for(let property in data) {
          newResources.push({...data[property], key: property})
        }
        this.setState({...this.state, resources: newResources});
      })
      .catch(err => {
        console.log(err)
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  getSuppliers = () => {
    const suppliersURL = `${this.state.baseURL}suppliers.json`;
    let newSuppliers = [];

    axios.get(suppliersURL)
    .then(res => {
      const data = res.data;
      for(let property in data) {
        newSuppliers.push({...data[property], key: property})
      }
      this.setState({...this.state, suppliers: newSuppliers})
    })
    .catch(err => {
      console.log(err);
    })
  }

  getNotes = () => {
    const notesURL = `${this.state.baseURL}users/1501790447527/notes.json`;
    let newNotes = [];

    axios.get(notesURL)
    .then(res => {
      const data = res.data;
      for(let property in data) {
        newNotes.push({...data[property], key: property})
      }
      this.setState({...this.state, notes: newNotes})
    })
    .catch(err => {
      console.log(err);
    })
  }

  setDetail = (event, type, key) => {
    this.setState({...this.state, currentType: type, currentKey: key});
  }
  
  render() {
    return (
      <div className={classes.dashboard}>
        <div className={classes.welcome}>
          <h1>Info Desk</h1>
          <img src={agentImg} alt='agent'/>
          <h3>Hello, Stephanie!</h3>
        </div>
        <div className={classes.links}>
          {this.state.resources.map(resource => {
            return (
              <a target='_blank' rel='no opener noreferrer' key={resource.key} href={resource.address}>{resource.name}</a>
            )
          })}
        </div> 
        <div className={classes.supplierControls}>
          <p><i className="far fa-heart"></i></p>
          <p><i className="far fa-star"></i></p>
          <div className={classes.search}>
            <span><i className="fas fa-search"></i></span>
            <input type='text' placeholder='Search...'/>
          </div>
        </div>
        <div className={classes.supplierMaster}>
          <h1 style={{textAlign: 'center'}}>Suppliers</h1>
          <hr/>
          {this.state.suppliers.map(supplier => {
            return (
              <p className={classes.supplierMasterItem} key={supplier.key} onClick={(event) => {this.setDetail(event, 'supplier', supplier.key)}}>{supplier.name}</p>
            )
          })}
        </div>
        <div className={classes.notesMaster}>
          <h1 style={{textAlign: 'center'}}>Notes</h1>
          <hr/>
          {this.state.notes.map(note => {
            return (
              <p className={classes.supplierMasterItem} key={note.key} onClick={(event) => {this.setDetail(event, 'note', note.key)}}>{note.title}</p>
            )
          })}
        </div>
        <div className={classes.logo}>Agents Of Tons Of Fun Travel</div>
        <Detail type={this.state.currentType} currentKey={this.state.currentKey} suppliers={this.state.suppliers} notes={this.state.notes}/>
      </div>
    );
  }
}

export default Dashboard;

