import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import reactLogo from "./React-icon.png"

export default function Main(){
    return (
      
        <main class> 
      <div className="Main-card">
      <div className= "border">
        <h4>Project Dashoard</h4>
      </div>


      
    <div className="card-tow">
    <Card >
    <Card.Img className="img-card" src="https://images.pexels.com/photos/7887847/pexels-photo-7887847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card.Body>
      
        <Card.Title className="Card-Title">Name of Project</Card.Title>
        <Card.Subtitle className="Card-Subtitle"> Description <br></br> By Lerom City</Card.Subtitle>
        <Card.Text className=" text-card">
        Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className="Button-tow" >Chat</Button>
        <Button className="Button-tow" >Vote</Button>
        
      </Card.Body>
    </Card>
    </div>

    <div className="card-one">
      <Card >
      <Card.Img className="img-card" src="https://images.pexels.com/photos/7887847/pexels-photo-7887847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card.Body>
        <Card.Title className="Card-Title">Name of Project</Card.Title>
        <Card.Subtitle className="Card-Subtitle"> Description <br></br> By Lerom City</Card.Subtitle>
        <Card.Text className=" text-card">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut voluptas quam ipsam neque modi!<br></br> Necessitatibus earum fugit,
         provident explicabo laudantium <br></br> sunt officia nihil eum impedit iure commodi sapiente, eaque itaque.
        </Card.Text>
       
      </Card.Body>
      <div className= "border-Main">
        <h4></h4>
      </div>
    </Card>
    </div>


    </div>

        </main>
    )
}