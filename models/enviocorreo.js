var nodemailer = require('nodemailer')
// Email 

exports.sendEmail = function(req, res){
    var transporter = nodemailer.createTransport({
        service : 'Gmail',
        auth: {
            user : 'alejandro.muoz2@misena.edu.co',
            pass : 'fbplyiwtbuofqjnm'
        }
    })
    var mailOptions = {
        from:'Remitente',
        to: 'alejandro.muoz2@misena.edu.co',
        subject : 'Asunto',
        text: 'pueba'


    };

    transporter.sendMail(mailOptions, function(error,info){
        if(error){
            console.log(error)
            res.send(500, err.message);

        }else{
            console.log("email sent")
            res.status(200).jsonp(req.body)
        }
    });
};