import pandas as pd

# Load the CSV file
file_path = 'data/ranking_atletas.csv'

# Ler o CSV para um DataFrame
df = pd.read_csv(file_path)

# Converter para JSON
json_data = df.to_json(orient='records', force_ascii=False)

# Salvar o JSON em um arquivo
with open('data/ranking_atletas.json', 'w', encoding='utf-8') as json_file:
    json_file.write(json_data)