import React from 'react'

class PokemonCard extends React.Component {

  // state = {
  //   open: false
  // }

  // toggle = () => {
  //   this.setState({open: !this.state.open})
  // }

  renderDetails = () => {
    if (this.props.open){
      return <div>
            <h5>Species: {this.props.species}</h5>
            <h5>${this.props.price}</h5>
            <h5>Seller: {this.props.username}</h5>
          </div>
    } else {
      return null
    }
  }

  handleClick = () => {
    this.props.changeOpen(this.props.id)
  }
  
  render(){

    return(
      <div style={{backgroundColor: this.props.for_sale ? "green" : 
      "red"}}>
        <img src={this.props.img_url} alt={this.props.name}/>
        <h3>{this.props.name}</h3>
        <button onClick={this.handleClick}>{this.props.open ? "Close" : "Open"}</button>
        {this.renderDetails()}
      </div>
    )
  }
}

export default PokemonCard