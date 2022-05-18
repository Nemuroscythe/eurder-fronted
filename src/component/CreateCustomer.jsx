import React, {useState} from "react";
import {Button, Col, Container, Form, InputGroup, Row} from "react-bootstrap";

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
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="formLastname">
                            <Form.Label column={true} className={"col-1"}>Lastname</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} md="12" controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <InputGroup>
                                <Form.Control type="email"/>
                                <InputGroup.Text>@</InputGroup.Text>
                                <Form.Control type="email"/>
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
                                        <Form.Control type="text"/>
                                    </InputGroup>
                                </Col>
                                <Col xs={9}>
                                    <Form.Control type="text"/>
                                </Col>
                            </InputGroup>
                        </Form.Group>
                    </Row>

                    <Row className="md3">
                        <Form.Group as={Col} md="10" controlId="formStreetName">
                            <Form.Label>Street</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Form.Group as={Col} md="2" controlId="formStreetNumber">
                            <Form.Label>Number</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                    </Row>

                    <Row className="md3">
                        <Form.Group as={Col} md="5" controlId="formPostalCode">
                            <Form.Label>Postalcode</Form.Label>
                            <Form.Control type="text"/>
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

                    <Row className="md3">
                        <Button as={Col} md="9" variant="success" type="submit">
                            CREATE
                        </Button>

                        <Button as={Col} md="2" variant="light" type="reset">
                            CANCEL
                        </Button>
                    </Row>

                </Form>
            </Container>
        </>
    )
}