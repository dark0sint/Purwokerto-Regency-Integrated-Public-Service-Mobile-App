# report_generator.py
import requests
import pandas as pd

# Fetch data from Laravel API
response = requests.get('http://your-laravel-api-url/api/services')
data = response.json()

# Process with Pandas
df = pd.DataFrame(data)
df.to_csv('services_report.csv', index=False)
print("Report generated!")
