import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

interface OpenSearchStackProps extends cdk.StackProps {
  somethingFromLambdaStack: string;
}

export class OpenSearchStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: OpenSearchStackProps) {
    super(scope, id, props);
    
    new cdk.CfnOutput(this, 'OpenSearchStackStackOut', {
      value: props.somethingFromLambdaStack
    });
  }
}