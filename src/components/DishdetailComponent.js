import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if (dish != null) {
          return(
            <Card>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          );
        }
        else {
          return(
            <div></div>
          );
        }
      }
      
    formatDate(string){
        var options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        return new Date(string).toLocaleDateString([],options);
    }

    renderComment(dish) {
        if (dish != null) {
          const comments = dish.comments.map((comment) => {
            return (
              <div>
                <p>{comment.comment}</p>
                <p>-- {comment.author}, {this.formatDate(comment.date)}</p>
              </div>
            )
          })
          return(
            <div>
                <h4>Comments</h4>
                <ul className='list-unstyled'>
                  {comments}
                </ul>
            </div>
           
          )
        }
          else {
            return(
              <div></div>
            );
          }
      }
  

    render () {
      return(
        <div className="row">
           <div className="col-12 col-md-5 m-1">
               {this.renderDish(this.props.dish)}
           </div>
           <div className="col-12 col-md-5 m-1">
                {this.renderComment(this.props.dish)}
           </div>
       </div>
      )  
    }

}

export default DishDetail;