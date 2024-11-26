#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { BatchProcessinLambdaStack } from './stacks/batch-processing/resources/lambda-stack';
import { OpenSearchStack } from './stacks/opensearch/opensearch-stack';
import { S3DlqBucketStack } from './stacks/s3dlqbucket/s3-dlq-bucket-stack';

const app = new cdk.App();

const lambdaStack = new BatchProcessinLambdaStack(app, 'BatchProcessinLambdaStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});

new OpenSearchStack(app, 'OpenSearchStack', {
  somethingFromLambdaStack: lambdaStack.somethingFromLambdaStack,
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});


new S3DlqBucketStack(app, 'S3DlqBucketStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});
