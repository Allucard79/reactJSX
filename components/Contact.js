const Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired
  },

  render() {
    return (
      <div className='contactItem'>
        <img className='contactImage' src='https://www.kwsme.com/wp-content/uploads/2016/06/login-user-icon.png' />
        <p className='contactLabel'>Imię: {this.props.item.firstName}</p>
        <p className='contactLabel'>Nazwisko: {this.props.item.lastName}</p>
        <a className='contactEmail' href='mailto: {this.props.item.email}'>{this.props.item.email}</a>
      </div>
    );
  }
});