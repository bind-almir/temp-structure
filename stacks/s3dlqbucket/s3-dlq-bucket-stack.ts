import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class S3DlqBucketStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: cdk.StackProps) {
    super(scope, id, props);
    
    new cdk.CfnOutput(this, 'S3DlqBucketStackOut', {
      value: 'S3DlqBucketStackOut'
    });
  }
}