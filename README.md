import json
import boto3

def fetch_ssm_parameters(prefix):
    # Create an SSM client
    ssm_client = boto3.client('ssm')

    # Use the `get_parameters_by_path` method to fetch parameters by a specified path (prefix)
    response = ssm_client.get_parameters_by_path(
        Path=prefix,
        Recursive=True,
        WithDecryption=True  # To decrypt secure string parameters
    )

    # Extract parameter names and values from the response
    parameters = {}
    for param in response['Parameters']:
        parameters[param['Name']] = param['Value']

    return parameters

def save_ssm_parameters_as_json(parameters):
    # Save the parameters as a JSON file
    with open('ssm_parameters.json', 'w') as file:
        json.dump(parameters, file, indent=4)

# Replace 'YOUR_PREFIX' with your desired prefix
prefix = '/your-prefix/'
fetched_parameters = fetch_ssm_parameters(prefix)

# Save the fetched parameters as a JSON file
save_ssm_parameters_as_json(fetched_parameters)

