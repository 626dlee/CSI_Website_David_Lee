import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

class Product extends React.Component {
  constructor() {
    super();
    {
      /*<div className="product-wrapper">
        
        <h3>{this.props.title}</h3>
        <img className="product-img" src={this.props.img} />
        <br />

        <p>
          {this.props.desc}
          <br />
          {this.props.desc1}
          <br />
          {this.props.desc2}
        </p>
        
      </div>*/
    }
  }
  render() {
    return (
      <Card className="card-wrapper">
        <CardActionArea>
          <Typography gutterBottom variant="h5" component="h4">
            {this.props.title}
          </Typography>
          <CardMedia
            component="img"
            image={this.props.img}
            title={this.props.title}
          />
          {/*<CardContent>
            <Typography component="p">
              {this.props.desc}
              <br />
              {this.props.desc1}
              <br />
              {this.props.desc2}
            </Typography>
          </CardContent>*/}
        </CardActionArea>
      </Card>
    );
  }
}

export default Product;
