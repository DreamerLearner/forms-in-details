import React, { PureComponent } from 'react';
import t from 'tcomb-form';

class TcombDummyForm extends PureComponent{

	constructor(props){
		super(props);

		this.save = this.save.bind(this);
	}

	save() {
	    const value = this.refs.form.getValue();
	    if (value) {
	      console.log(value);
	    }
	}

	render(){
		const Animal = t.enums({
		 dog: "Dog",
		 cat: "Cat"
		});

		const Pet = t.struct({
		  name: t.String,
		  type: Animal
		});

		const Person = t.struct({
		  name: t.String,
		  pets: t.list(Pet)
		});

		const formLayout = (locals) => {
		  return (
		    <div>
		      <p>formLayout</p>
		      <div>{locals.inputs.name}</div>
		      <div>{locals.inputs.pets}</div>
		    </div>
		  );
		};

		const petLayout = (locals) => {
		  return (
		    <div style={{background:'pink'}} >
		      <p>petLayout</p>
		      <div>{locals.inputs.name}</div>
		      <div>{locals.inputs.type}</div>
		    </div>
		  );
		};

		const options = {
		  template: formLayout,
		  fields: {
		    pets: { // <- pets is a list, you can customise the elements with the `item` option
		      item: {
		        template: petLayout
		      }
		    }
		  }
		};

		const value = {
		  name: 'myname',
		  pets: [
		    {name: 'pet1', type: 'dog'},
		    {name: 'pet2', type: 'cat'}
		  ]
		};

		return(
			<div>
		       <t.form.Form ref="form"
		         type={Person}
		         options={options}
		         value={value}
		       />
		       <br/>
		       <button className="btn btn-primary" onClick={this.save}>Save</button>
		    </div>
		);
	}
}

export default TcombDummyForm;