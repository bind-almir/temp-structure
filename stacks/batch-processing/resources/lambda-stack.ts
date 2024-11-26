import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class BatchProcessinLambdaStack extends cdk.Stack {

  public readonly somethingFromLambdaStack: string;

  constructor(scope: Construct, id: string, props: cdk.StackProps) {
    super(scope, id, props);

    this.somethingFromLambdaStack = 'something something you';
    
    new cdk.CfnOutput(this, 'BatchProcessingLambdaStackOut', {
      value: 'BatchProcessingLambdaStackOut'
    });
  }
}