import React, {Component} from 'react';
import Icon from './Icon';

class ImageCard extends Component {
  render() {
    return(
      <div className="card" style={{width: "18rem"}}>
        <img src={this.props.link} class="card-img-top" alt={this.props.text} />
        <div className="card-body">
          <p className="card-text">{this.props.text}</p>
	  <div className="line"></div>
	  <div className="icons row pl-3 pt-3">
	    <Icon name="fa fa-thumbs-up"color="#195091" />
	    <Icon name="fa fa-heart"color="#ea1924" />
	    <Icon name="fas fa-angry"color="#e64505" />
	    <Icon name="fas fa-grin-tears"color="#ffa835" />
	    <Icon name="fas fa-dizzy"color="#ffa835" />
	  </div>
        </div>
      </div>
    )
  }
}

export default ImageCard

