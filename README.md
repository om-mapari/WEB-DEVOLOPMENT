```



import boto3

def count_dynamodb_tables():
    dynamodb_client = boto3.client('dynamodb')
    paginator = dynamodb_client.get_paginator('list_tables')
    table_count = 0
    for response in paginator.paginate():
        table_count += len(response['TableNames'])
    return table_count

def count_ecs_services():
    ecs_client = boto3.client('ecs')
    paginator = ecs_client.get_paginator('list_clusters')
    service_count = 0
    for clusters_response in paginator.paginate():
        for cluster_arn in clusters_response['clusterArns']:
            services = ecs_client.list_services(cluster=cluster_arn)
            service_count += len(services['serviceArns'])
    return service_count

def count_ecs_clusters():
    ecs_client = boto3.client('ecs')
    paginator = ecs_client.get_paginator('list_clusters')
    cluster_count = 0
    for response in paginator.paginate():
        cluster_count += len(response['clusterArns'])
    return cluster_count

def count_elastic_load_balancers():
    elbv2_client = boto3.client('elbv2')
    paginator = elbv2_client.get_paginator('describe_load_balancers')
    elb_count = 0
    for response in paginator.paginate():
        elb_count += len(response['LoadBalancers'])
    return elb_count

def count_glue_jobs():
    glue_client = boto3.client('glue')
    paginator = glue_client.get_paginator('get_jobs')
    glue_count = 0
    for response in paginator.paginate():
        glue_count += len(response['Jobs'])
    return glue_count

def count_kinesis_streams():
    kinesis_client = boto3.client('kinesis')
    paginator = kinesis_client.get_paginator('list_streams')
    stream_count = 0
    for response in paginator.paginate():
        stream_count += len(response['StreamNames'])
    return stream_count

def count_s3_buckets():
    s3_client = boto3.client('s3')
    paginator = s3_client.get_paginator('list_buckets')
    bucket_count = 0
    for response in paginator.paginate():
        bucket_count += len(response['Buckets'])
    return bucket_count

def count_step_functions():
    stepfunctions_client = boto3.client('stepfunctions')
    paginator = stepfunctions_client.get_paginator('list_state_machines')
    step_function_count = 0
    for response in paginator.paginate():
        step_function_count += len(response['stateMachines'])
    return step_function_count

def count_application_load_balancers():
    elbv2_client = boto3.client('elbv2')
    paginator = elbv2_client.get_paginator('describe_load_balancers')
    alb_count = 0
    for response in paginator.paginate():
        alb_count += len(response['LoadBalancers'])
    return alb_count

def count_lambda_functions():
    lambda_client = boto3.client('lambda')
    paginator = lambda_client.get_paginator('list_functions')
    lambda_count = 0
    for response in paginator.paginate():
        lambda_count += len(response['Functions'])
    return lambda_count

# Fetch counts for different resources
dynamodb_count = count_dynamodb_tables()
ecs_service_count = count_ecs_services()
ecs_cluster_count = count_ecs_clusters()
elb_count = count_elastic_load_balancers()
glue_count = count_glue_jobs()
kinesis_count = count_kinesis_streams()
s3_count = count_s3_buckets()
step_function_count = count_step_functions()
alb_count = count_application_load_balancers()
lambda_count = count_lambda_functions()

print(f"Number of DynamoDB tables: {dynamodb_count}")
print(f"Number of ECS services: {ecs_service_count}")
print(f"Number of ECS clusters: {ecs_cluster_count}")
print(f"Number of Elastic Load Balancers: {elb_count}")
print(f"Number of Glue jobs: {glue_count}")
print(f"Number of Kinesis streams: {kinesis_count}")
print(f"Number of S3 buckets: {s3_count}")
print(f"Number of Step Functions: {step_function_count}")
print(f"Number of Application Load Balancers: {alb_count}")
print(f"Number of Lambda functions: {lambda_count}")
```
