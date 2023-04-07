const mongoose = require('mongoose');
const mongoUrl ="mongodb+srv://siwarbouzidi:hSg23Zp9yvNR0ybj@cluster0.hmj75mf.mongodb.net/?retryWrites=true&w=majority";





mongoose.connect(mongoUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
    
 
}).then(() => console.log("our db is connected"))
.catch((err) => console.log(err));