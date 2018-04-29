//Core
import React from 'react';

//CSS
import classes from './detail.css';

const detail = (props) => {
  switch(props.type) {
    case 'supplier':
      const currentSupplier = props.suppliers.find(x => x.key === props.currentKey);
      return (
        <div className={classes.detail}>
          <h1>{currentSupplier.name}</h1>
          <p>{currentSupplier.description}</p>
          <p>Contact's Name: {currentSupplier.contactsName}</p>
          <p>Contact's Details: {currentSupplier.contactsDetails}</p>
          <p>Login Id: {currentSupplier.loginID}</p>
          <p>Login Password: {currentSupplier.loginPassword}</p>
          <p>Search Terms: {currentSupplier.tags.map(x => `${x}, `)}</p>
          <a target='_blank' rel='nopener noreferrer' href={currentSupplier.address}>Go To Website</a>
        </div>
      )
    case 'note': 
      const currentNote = props.notes.find(x => x.key === props.currentKey);
      const sentences = currentNote.body.split('\n');
      return (
        <div className={classes.detail}>
          <h1 className={classes.noteTitle}>{currentNote.title}</h1>
          {sentences.map((x, index) => {
            return (
            <p key={index}>{x}</p>
            )
          })}
        </div>
      )
    default:
      return (
        <div className={classes.detail}>
          <h1 style={{textAlign: 'center'}}>Click A Supplier Or Note To View Details</h1>
        </div>
      )
  }
}

export default detail;
