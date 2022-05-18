import React, {useState} from "react";
import {Button, ButtonGroup, Col, Container, Form, InputGroup, Row} from "react-bootstrap";
import {createCustomer} from "../api/CustomerService";
import Customer from "../model/Customer";
import Email from "../model/Email";
import Address from "../model/Address";
import PhoneNumber from "../model/PhoneNumber";

export default function CreateCustomer() {

    const [validated, setValidated] = useState(false);

    function customerMapping(form) {
        return new Customer(
            0,
            form.elements.firstname.value,
            form.elements.lastname.value,
            new Email(
                form.elements.localPart.value,
                form.elements.domain.value,
            ),
            new Address(
                form.elements.streetName.value,
                form.elements.houseNumber.value,
                form.elements.postalCode.value,
                form.elements.country.value,
            ),
            new PhoneNumber(
                form.elements.phoneNumber.value,
                form.elements.countryCode.value
            )
        );
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        console.log('INFO:  Create customer submit button pressed');
        const form = event.currentTarget;
        console.log('INFO : from = ' + Object.values(form).indexOf(1));
        // if (form.checkValidity() === false) {
        //     console.log('WARNING:  field not valid in form');
        //     return;
        // }
        let customer = customerMapping(form);
        console.log('INFO : ' + JSON.stringify(customer));
        setValidated(true);
        createCustomer(customer).then((response) => console.log(response));
    };


    return (<>
            <Container fluid>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="formFirstname">
                            <Form.Label column={true} className={"col-1"}>Firstname</Form.Label>
                            <Form.Control type="text" name={"firstname"} required/>
                            <Form.Control.Feedback type={"invalid"}>Please provide a firstname</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="formLastname">
                            <Form.Label column={true} className={"col-1"}>Lastname</Form.Label>
                            <Form.Control type="text" name={"lastname"} required/>
                            <Form.Control.Feedback type={"invalid"}>Please provide a lastname</Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} md="12" controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <InputGroup>
                                <Form.Control type="text" name={"localPart"}/>
                                <InputGroup.Text>@</InputGroup.Text>
                                <Form.Control type="text" name={"domain"}/>
                                <Form.Control.Feedback type={"invalid"}>Please provide an email
                                    address</Form.Control.Feedback>
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
                                        <Form.Control type="text" name={"countryCode"} required/>
                                        <Form.Control.Feedback type={"invalid"}>Please provide a country
                                            code</Form.Control.Feedback>
                                    </InputGroup>
                                </Col>
                                <Col xs={9}>
                                    <Form.Control type="text" name={"phoneNumber"} required/>
                                    <Form.Control.Feedback type={"invalid"}>Please provide a phone
                                        number</Form.Control.Feedback>
                                </Col>
                            </InputGroup>
                        </Form.Group>
                    </Row>

                    <Row className="md3">
                        <Form.Group as={Col} md="10" controlId="formStreetName">
                            <Form.Label>Street</Form.Label>
                            <Form.Control type="text" name={"streetName"} required/>
                            <Form.Control.Feedback type={"invalid"}>Please provide a street name</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="2" controlId="formStreetNumber">
                            <Form.Label>Number</Form.Label>
                            <Form.Control type="text" name={"houseNumber"} required/>
                            <Form.Control.Feedback type={"invalid"}>Please provide a street
                                number</Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Row className="md3">
                        <Form.Group as={Col} md="5" controlId="formPostalCode">
                            <Form.Label>Postalcode</Form.Label>
                            <Form.Control type="text" name={"postalCode"} required/>
                            <Form.Control.Feedback type={"invalid"}>Please provide a postal code</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="7" controlId="formCountry">
                            <Form.Label>Country</Form.Label>
                            <Form.Select name={"country"} id="Select">
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