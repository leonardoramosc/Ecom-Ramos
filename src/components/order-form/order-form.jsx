import { useState, useRef } from "react";
import { Form, Button, InputGroup, Modal } from "react-bootstrap";

import "./order-form.css";

const OrderForm = ({ onSubmit, ...otherProps }) => {
  const [validated, setValidated] = useState(false);
  const [emailIsCorrect, setEmailIsCorrect] = useState(true);
  const nameRef = useRef();
  const lastnameRef = useRef();
  const emailRef = useRef();
  const confirmationEmailRef = useRef();
  const phoneRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (emailRef.current.value !== confirmationEmailRef.current.value) {
      event.stopPropagation();
      setValidated(true);
      return setEmailIsCorrect(false);
    }

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      onSubmit({
        name: `${nameRef.current.value} ${lastnameRef.current.value}`,
        email: emailRef.current.value,
        phone: phoneRef.current.value,
      });
    }

    setValidated(true);
  };

  return (
    <Modal
      {...otherProps}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Tus datos</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo electrónico</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="email"
                placeholder="correo@correo.com"
                required
                ref={emailRef}
              />
              <Form.Control.Feedback type="invalid">
                Por favor introduce un correo válido.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Confirmar Correo electrónico</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="email"
                placeholder="correo@correo.com"
                required
                ref={confirmationEmailRef}
              />
              {!emailIsCorrect && (
                <Form.Control.Feedback type="invalid">
                  Los correos no coinciden
                </Form.Control.Feedback>
              )}
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="validationCustomUsername">
            <Form.Label>Nombre</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="Nombre"
                aria-describedby="inputGroupPrepend"
                required
                minLength="3"
                ref={nameRef}
              />
              <Form.Control.Feedback type="invalid">
                Por favor introduce tu nombre.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="validationCustomUsername">
            <Form.Label>Apellido</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="Apellido"
                aria-describedby="inputGroupPrepend"
                required
                minLength="3"
                ref={lastnameRef}
              />
              <Form.Control.Feedback type="invalid">
                Por favor introduce tu apellido.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Número telefónico</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="123456789"
                required
                pattern="[0-9]+.{7,}"
                ref={phoneRef}
              />
              <Form.Control.Feedback type="invalid">
                Por favor introduce un número telefónico válido
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Button variant="primary" type="submit">
            Enviar orden
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={otherProps.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default OrderForm;
