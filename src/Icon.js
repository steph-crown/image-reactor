import React, {Component} from 'react';

class Icon extends Component {
  constructor(props) {
    super(props)
    this.state = {
      size:17,
      number:0
    }
  }
  emojiClick = () => {
    this.idEn = setInterval(() => this.enlarge())
  }
  enlarge = () => {
    if (this.state.size == 24) {
      clearInterval(this.idEn);
      this.setState({number:this.state.number + 1})
      this.idRe = setInterval(() => this.reduce())
    }
    this.setState({size:this.state.size+1})
  }
  reduce = () => {
    if (this.state.size == 17) {
      clearInterval(this.idRe)
    }
    this.setState({size:this.state.size-1})
  }
  render() {
    return (
      <div className="icon" style={{width:"20%",cursor:"pointer"}} onClick={this.emojiClick}>
        <i className={this.props.name} style={{color:this.props.color, fontSize:this.state.size+"px"}}></i>
	<small className="text-muted" style={{color:this.props.color}}>•{this.state.number}</small>
      </div>
    )
  }
}

export default Icon
