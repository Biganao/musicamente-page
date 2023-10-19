import { Alert, Col, Row } from "react-bootstrap";
import { useState } from "react";
import PropTypes from "prop-types";

export const Newsletter = ({ onValidated, status, message }) => {
  const formInitialDetails = {
    email: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);

  const onFormUpdate = (category, value) => {
    setFormDetails({ ...formDetails, [category]: value });
  };

  const email = formDetails.email;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email && email.indexOf("@") > -1) {
      onValidated({ EMAIL: email });
      try {
        let response = await fetch("https://musicamente.onrender.com/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(formDetails),
        });
        let result = await response.json();

        setFormDetails(formInitialDetails);

        if (result.code === 200) {
          console.log({ success: true, message: "Message sent successfully" });
        } else {
          console.log({
            success: false,
            message: "Something went wrong, please try again later",
          });
        }
      } catch (error) {
        console.error("Error while making the request:", error);
      }
    }
  };

  return (
    <Col lg={12}>
      <Row>
        <Col md={6} xl={12}>
          {status === "sending" && <Alert> Enviando... </Alert>}
          {status === "error" && <Alert variant="dander">{message}</Alert>}
          {status === "success" && (
            <Alert variant="success">Pré-Registro Concluido {message}</Alert>
          )}
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={formDetails.email}
              onChange={(e) => onFormUpdate("email", e.target.value)}
              placeholder="Digite o seu Email"
              style={{ marginTop: "2em" }}
            />
            <button type="submit" className="text-white font-semibold">
              Enviar
            </button>
          </form>
        </Col>
      </Row>
    </Col>
  );
};

Newsletter.propTypes = {
  onValidated: PropTypes.func,
  status: PropTypes.string,
  message: PropTypes.string,
};
