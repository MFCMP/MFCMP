from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas
import pandas as pd
import os

DATA_FILE = 'data/FOFirearmA1.xlsx'

def create_certificate(pin_number):
    df = pd.read_excel(DATA_FILE, sheet_name='Sheet1')
    record = df[df['ID Number'] == pin_number].iloc[0]

    file_path = f'static/certificates/{pin_number}_certificate.pdf'
    os.makedirs(os.path.dirname(file_path), exist_ok=True)
    c = canvas.Canvas(file_path, pagesize=letter)
    c.drawString(100, 750, f"Certificate for ID Number: {pin_number}")
    c.drawString(100, 730, f"Name and Surname: {record['NameSurname']}")
    c.drawString(100, 710, f"Company Name: {record['Company Name']}")
    c.drawString(100, 690, f"Address: {record['Address']}")
    c.drawString(100, 670, f"Email Address: {record['Email Address']}")
    c.drawString(100, 650, f"Tel No: {record['Tel No']}")
    c.drawString(100, 630, f"Licence No: {record['Licence No']}")
    c.save()

    return file_path

def create_job_card(pin_number):
    df = pd.read_excel(DATA_FILE, sheet_name='Sheet1')
    record = df[df['ID Number'] == pin_number].iloc[0]

    file_path = f'static/job_cards/{pin_number}_job_card.pdf'
    os.makedirs(os.path.dirname(file_path), exist_ok=True)
    c = canvas.Canvas(file_path, pagesize=letter)
    c.drawString(100, 750, f"Job Card for ID Number: {pin_number}")
    c.drawString(100, 730, f"Name and Surname: {record['NameSurname']}")
    c.drawString(100, 710, f"Company Name: {record['Company Name']}")
    c.drawString(100, 690, f"Address: {record['Address']}")
    c.drawString(100, 670, f"Email Address: {record['Email Address']}")
    c.drawString(100, 650, f"Tel No: {record['Tel No']}")
    c.drawString(100, 630, f"Licence No: {record['Licence No']}")
    c.save()

    return file_path