import { Alert, Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

// import styles from "./Newsletter.module.css";

export const Newsletter = ({ onValidated, status, message }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  const clearFields = () => {
    setEmail("");
  };

  return (
    <Col lg={12}>
      <Row>
        <Col md={6} xl={12}>
          {status === "sending" && <Alert> Enviando... </Alert>}
          {status === "error" && <Alert variant="dander">{message}</Alert>}
          {status === "success" && <Alert variant="success">Pré-Registro Concluido</Alert>}
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite o seu Email"
              />
              <button type="submit" className="text-white font-semibold">
                Enviar
              </button>
            </div>
          </form>
        </Col>
      </Row>
    </Col>
  );
};

Newsletter.propTypes = {
    onValidated: PropTypes.func,
    status: PropTypes.string,
    message: PropTypes.string
};
