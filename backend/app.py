from flask import Flask, request, jsonify
from flask_mail import Mail, Message
from flask_cors import CORS
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app) # Enable CORS for frontend communication

# Configuration
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True

mail = Mail(app)

@app.route('/contact', methods=['POST'])
def contact():
    data = request.json
    
    if not data:
        return jsonify({'error': 'No data provided'}), 400
        
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')
    
    if not all([name, email, message]):
        return jsonify({'error': 'Missing required fields'}), 400

    try:
        # Create message
        msg = Message(
            subject=f"Portfolio Contact from {name}",
            sender=app.config['MAIL_USERNAME'],
            recipients=[app.config['MAIL_USERNAME']], # Send to yourself
            body=f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}"
        )
        # Send
        mail.send(msg)
        return jsonify({'success': 'Message sent successfully'}), 200
        
    except Exception as e:
        print(f"Error sending email: {e}")
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
