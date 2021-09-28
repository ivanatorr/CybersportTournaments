import React, { Component } from 'react'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage } from 'mdb-react-ui-kit';
import {Row, Col} from "react-bootstrap";

export default class ContentItem extends Component {
    render() {
        return (
            <Row>
            <Col xs ="10"></Col>
            <Col xs = "3">
            <MDBCard>
                {/* <a href ={this.props.links.tournament}> */}
                <MDBCardImage top width = "100%"
                 src = {this.props.links.image} 
                 >
                     {/* <NavLink to = {this.props.links.tournament}/> */}
                </MDBCardImage>
                {/* </a> */}
                <MDBCardBody>
                    <MDBCardTitle>
                        {this.props.title}
                    </MDBCardTitle>
                    <MDBCardText inline>
                    <h5>{this.props.status}</h5>  
                    <h5>{this.props.reward.count}</h5>
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
            </Col>
        </Row>
        )
    }
}
