import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom';

class GroupForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">
            {error}
          </div>
        </div>
      )
    }
  }

  renderInput = ({ input, label, meta }) => {
    return(
      <div className="field">
        <label>{label}</label>
        <input {...input} autoComplete="off"/>
        <div>{this.renderError(meta)}</div>
      </div>
    )
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field name="title" component={this.renderInput} label="Enter Title:" />
        <Field name="description" component={this.renderInput} label="Enter Description:"/>
        <Field name="goals" component={this.renderInput} label="Enter Daily Goal(s):" />
        <button className="ui button primary">Submit</button>
        <Link to='/' className='ui button'>Cancel</Link>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'You must enter a title'
  }
  if(!formValues.description) {
    errors.description = 'You must enter a description'
  }
  if(!formValues.goals) {
    errors.goals = 'You must enter a goal'
  }
  return errors;
}

export default reduxForm({
  form: 'groupForm',
  validate: validate,
  enableReinitialize: true
})(GroupForm);
