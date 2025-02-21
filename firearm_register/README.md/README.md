# Firearm Register Application

## Overview
This application is a firearm register for the installation of Microdots. It allows users to:
- Record new data into an Excel workbook.
- Create PDF certificates and job cards for each pin number.
- Securely log in to access the application.

## Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd firearm_register
   ```

2. **Set up the virtual environment:**
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

3. **Install the dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the application:**
   ```bash
   python app.py
   ```

5. **Access the application:**
   Open your web browser and go to `http://127.0.0.1:5000`.

## Usage

1. **Login:**
   - Use the username `admin` and password `password123` to log in.

2. **Add Record:**
   - Fill in the form on the dashboard to add a new record to the Excel workbook.

3. **Generate PDFs:**
   - Enter the pin number and click "Generate Certificate" or "Generate Job Card" to create and download the PDFs.

## File Structure

```
firearm_register/
├── app.py
├── templates/
│   ├── login.html
│   ├── dashboard.html
│   ├── certificate.html
│   ├── job_card.html
├── static/
│   ├── styles.css
├── data/
│   ├── FOFirearmA1.xlsx
├── generate_pdfs.py
├── requirements.txt
└── README.md
```

## Notes

- The application uses a dummy user for login. In a production environment, consider using a database to store user credentials.
- Make sure the `data/FOFirearmA1.xlsx` file exists and is properly formatted before running the application.