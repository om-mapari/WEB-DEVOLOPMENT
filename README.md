```

import boto3

def fetch_all_lambda_arns():
    # Create a Lambda client
    lambda_client = boto3.client('lambda')

    # List all Lambda functions
    response = lambda_client.list_functions()

    # Extract Lambda ARNs from the response
    lambda_arns = [function['FunctionArn'] for function in response['Functions']]

    return lambda_arns

def filter_lambdas_by_tag(tag_key):
    # List to store Lambda ARNs with the specified tag
    lambdas_with_tag = []

    # Get all Lambda ARNs
    all_lambda_arns = fetch_all_lambda_arns()

    # Create a Lambda client
    lambda_client = boto3.client('lambda')

    # Iterate through each Lambda ARN and check for the specified tag
    for arn in all_lambda_arns:
        response = lambda_client.list_tags(Resource=arn)
        if tag_key in response.get('Tags', {}):
            lambdas_with_tag.append(arn)

    return lambdas_with_tag

# Replace 'YOUR_TAG_KEY' with the specific tag key you want to check for
tag_key = 'your-tag-key'
lambdas_with_specified_tag = filter_lambdas_by_tag(tag_key)

print(lambdas_with_specified_tag)




import boto3

def fetch_all_lambda_arns():
    # Create a Lambda client
    lambda_client = boto3.client('lambda')

    all_lambda_arns = []
    next_marker = None

    while True:
        # List Lambda functions with pagination
        if next_marker:
            response = lambda_client.list_functions(MaxItems=50, Marker=next_marker)
        else:
            response = lambda_client.list_functions(MaxItems=50)

        # Extract Lambda ARNs from the response
        functions = response.get('Functions', [])
        for function in functions:
            all_lambda_arns.append(function['FunctionArn'])

        # Check if there are more functions available
        next_marker = response.get('NextMarker')
        if not next_marker:
            break

    return all_lambda_arns

# Fetch all Lambda ARNs
all_lambda_arns = fetch_all_lambda_arns()

print(all_lambda_arns)
```
