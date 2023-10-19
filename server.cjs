const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", async (req, res) => {
    const userEmail = req.body.email;
    const mail = {
      from: process.env.EMAIL_USER,
      to: userEmail,
      subject: "Pré-Registro - MusicaMente",
      html: `<p>Obrigado por se pré-registrar no MusicaMente! Queremos assegurar que seus dados estão seguros e queremos esclarecer que utilizaremos apenas o seu endereço de e-mail para comunicação relacionada ao MusicaMente.</p>
      <p>Segue abaixo o email utilizado para o pré-registro:</p>
      <p>Email: ${userEmail}</p>
      <p>Fique ligado nas atualizações e nas nossas redes sociais para saber quando começará o beta do MusicaMente.</p>
      <p>Se tiver alguma dúvida ou preocupação, não hesite em nos contatar.</p>
      <p>Atenciosamente,</p>
      <p>A Equipe de Desenvolvimento do MusicaMente</p>`,
    };
  
    try {
      await contactEmail.sendMail(mail);
      res.status(200).json({ code: 200, status: "Message Sent" });
    } catch (error) {
      console.error("Erro ao enviar o e-mail:", error);
      res.status(500).json({ code: 500, status: "Internal Server Error" });
    }
  });
  
