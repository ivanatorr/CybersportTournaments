import React, { Component } from 'react'
import { Button, Form, FormControl, Row } from "react-bootstrap";
import { MDBCol, MDBFormInline, MDBBtn} from 'mdbreact';

export default class FormForTournament extends Component {
    constructor(props) {
        super(props);



    }




    render() {
        return (
            <div className = 'd1'>
            <form type="text" value={this.props.query} >
            <input
                class ="box"
                type="text"
                placeholder="Search"
                onChange={this.props.tournamentMethod}
            />
                {/* <Button variant="light">Найти турнир</Button> */}
                </form>
                </div>

            // <MDBCol md="12">
            //     <MDBFormInline className="md-form mr-auto mb-4" value={this.props.query}>
            //         <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" onChange={this.props.tournamentMethod} />
            //         <MDBBtn gradient="aqua" rounded size="sm" type="submit" className="mr-auto">
            //             Search
            //         </MDBBtn>
            //     </MDBFormInline>
            // </MDBCol>

        )
    }

}

