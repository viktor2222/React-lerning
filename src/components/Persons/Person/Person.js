import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classes from './Person.css';
import withClass from '../../../hoc/withClass'
import Aux1 from '../../../hoc/Aux1'

class Person extends Component {
  constructor(props){
    super(props)
    console.log('[Person js] inside constructor',props);
  }

  componentWillMount(){
    console.log('[Person js] inside componentWillMount');
  }
  componentDidMount(){
    console.log('[Person js] inside componentDidMount');
    if (this.props.position === 0 ) {
      this.inputElement.focus();
    }
  }
  render (){
    console.log('[Person js] inside render');
    return (
      <Aux1 classes={classes.Person}>
        <p onClick={this.props.click}>I am {this.props.name} a Person and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input 
          ref={ (inp)=>{this.inputElement = inp} }
          type="text" 
          onChange={this.props.changed} 
          value={this.props.name} />
      </Aux1>   
    )
  }
}

Person.propTypes = {
  ckick: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default withClass(Person,classes.Person);