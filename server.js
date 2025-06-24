const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3000;

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const bookedAppointments = [];

app.post('/send-message', async (req, res) => {
    const { name, whatsapp, date, time } = req.body;
    if (!whatsapp.startsWith('+')) {
        return res.status(400).send({ error: 'WhatsApp number must start with +<country_code>' });
    }
    const appointmentDateTime = `${date}T${time}`;
    if (bookedAppointments.includes(appointmentDateTime)) {
        return res.status(400).send({ error: 'This time slot is already booked. Please select a different time.' });
    }
    
    const message = `Hi ${name}, your appointment with Dr. Avani Reddy is confirmed for ${date} at ${time}.`;

    try {
        const twilioResponse = await client.messages.create({
            from: 'whatsapp:+14155238886', 
            to: `whatsapp:${whatsapp}`, 
            body: message
        });
        bookedAppointments.push(appointmentDateTime);

        console.log('Twilio response:', twilioResponse.sid);
        res.status(200).send({ success: true, message: 'WhatsApp sent!' });
    } catch (error) {
        console.error('Twilio error:', error.message);
        res.status(500).send({ error: 'Failed to send WhatsApp.' });
    }
});


app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
