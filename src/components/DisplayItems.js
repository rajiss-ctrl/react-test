import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import './Cardwith.css';

class Items extends Component {
    constructor(props) {
        super(props);
        this.state={
            products:[
                {
                    id:0,
                    name: 'Baby things',
                    image:'./assets/images/babythings.jpg',
                    descriptions:'The best and quality baby wears you cant compare with others' 
                },
                {
                    id:1,
                    name: 'Baby things',
                    image:'./assets/images/babythings2.jpg',
                    descriptions:'The best and quality baby wears you cant compare with others' 
                },
                {
                    id:2,
                    name: 'Bags',
                    image:'./assets/images/bags.jpg',
                    descriptions:'The best and quality baby wears you cant compare with others' 
                },
                {
                    id:3,
                    name: 'For Ladies',
                    image:'./assets/images/ladythings.jpg',
                    descriptions:'The best and quality baby wears you cant compare with others'
                },
                {
                    id:4,
                    name: 'cutlery',
                    image:'./assets/images/cutlery.jpg',
                    descriptions:'The best and quality baby wears you cant compare with others' 
                } ,
                {
                    id:5,
                    name: 'Decorations',
                    image:'./assets/images/decorate.jpg',
                    descriptions:'The best and quality baby wears you cant compare with others' 
                }
                ]

            
        }
    }

    render(){
const item = this.state.products.map((prdct)=>{
  return(
    <div key={prdct.id}  className="col-12 col-md-4   " >
          <Card  className="m-2">
            <CardImg width="100%" src={prdct.image} alt={prdct.name} />
            <CardImgOverlay className="">
              <CardTitle tag="h4">{prdct.name}</CardTitle>
            </CardImgOverlay>
            <p>{prdct.descriptions}</p>
          </Card>
            

    </div> 
  )
});
        return(
<div   className="container">
        <div className="row cardwidth  ">
     {item} 
         </div>   
              
</div>

        );
    }
}

export default Items;
