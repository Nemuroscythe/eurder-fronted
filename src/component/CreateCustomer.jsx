import React, {useState} from "react";
import {Button, ButtonGroup, Col, Container, Form, InputGroup, Row} from "react-bootstrap";

export default function CreateCustomer() {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        console.log('INFO:  Create customer submit button pressed');
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            console.log('WARNING:  field not valid in form');
        }

        setValidated(true);
    };


    return (<>
            <Container fluid>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="formFirstname">
                            <Form.Label column={true} className={"col-1"}>Firstname</Form.Label>
                            <Form.Control type="text" required/>
                            <Form.Control.Feedback type={"invalid"}>Please provide a firstname</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="formLastname">
                            <Form.Label column={true} className={"col-1"}>Lastname</Form.Label>
                            <Form.Control type="text" required/>
                            <Form.Control.Feedback type={"invalid"}>Please provide a lastname</Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} md="12" controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <InputGroup>
                                <Form.Control type="email"/>
                                <InputGroup.Text>@</InputGroup.Text>
                                <Form.Control type="email"/>
                                <Form.Control.Feedback type={"invalid"}>Please provide an email address</Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>

                    <Row className="md3">
                        <Form.Group controlId="formPhoneNumber">
                            <Form.Label>Phone number(mobile)</Form.Label>
                            <InputGroup>
                                <Col xs={3}>
                                    <InputGroup>
                                        <InputGroup.Text>+</InputGroup.Text>
                                        <Form.Control type="text" required/>
                                        <Form.Control.Feedback type={"invalid"}>Please provide a country code</Form.Control.Feedback>
                                    </InputGroup>
                                </Col>
                                <Col xs={9}>
                                    <Form.Control type="text" required/>
                                    <Form.Control.Feedback type={"invalid"}>Please provide a phone number</Form.Control.Feedback>
                                </Col>
                            </InputGroup>
                        </Form.Group>
                    </Row>

                    <Row className="md3">
                        <Form.Group as={Col} md="10" controlId="formStreetName">
                            <Form.Label>Street</Form.Label>
                            <Form.Control type="text" required/>
                            <Form.Control.Feedback type={"invalid"}>Please provide a street name</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="2" controlId="formStreetNumber">
                            <Form.Label>Number</Form.Label>
                            <Form.Control type="text" required/>
                            <Form.Control.Feedback type={"invalid"}>Please provide a street number</Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Row className="md3">
                        <Form.Group as={Col} md="5" controlId="formPostalCode">
                            <Form.Label>Postalcode</Form.Label>
                            <Form.Control type="text" required/>
                            <Form.Control.Feedback type={"invalid"}>Please provide a postal code</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="7" controlId="formCountry">
                            <Form.Label>Country</Form.Label>
                            <Form.Select id="Select">
                                <option>Belgium</option>
                                <option>France</option>
                                <option>Germany</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>

                    <Row>
                        <Col md={10} size={'lg'}>
                            <ButtonGroup className="d-flex">
                                <Button variant="success" type="submit">
                                    CREATE
                                </Button>
                            </ButtonGroup>
                        </Col>
                        <Col md={2}>
                            <ButtonGroup className="d-flex">
                                <Button variant="light" type="reset">
                                    CANCEL
                                </Button>
                            </ButtonGroup>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </>
    )
}