const express = require('express');
require('./db');
require("dotenv").config();
const cors = require('cors');
const adminRoutes = require('./routes/adminRoutes')
const hopitalRoutes = require('./routes/hopitalRoutes')
const userRoutes = require('./routes/userRoutes')
const patientRoutes = require('./routes/patient')
const patienthopital = require("./routes/patientHopital")
const medecinhopital = require("./routes/medecinHopital")
const patientmedecin = require("./routes/medecinpatient")
const medecinRouter = require('./routes/medecinRoutes');
const io = require('socket.io')();

const chatRouter = require('./routes/chatRoutes')

const bodyParser = require("body-parser");


const app = express();

const PORT = process.env.PORT || 8000 ;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.use("/api/medecin", medecinRouter);
app.use("/api/admin", adminRoutes)
app.use("/api/hopital", hopitalRoutes)
app.use("/api/user", userRoutes)
app.use("/api/patient", patientRoutes)
app.use("/api/patientH", patienthopital)
app.use("/api/medecinH", medecinhopital)
app.use("/api/patientmedecin", patientmedecin)
app.use("/api/chat", chatRouter)
















app.listen(PORT,()=>{
    console.log("server running");
});
