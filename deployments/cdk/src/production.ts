import { App, Chart } from 'cdk8s';
import { Construct } from 'constructs';
import { InternalService } from '../cdk-toolkit/internal-service';
import { ServiceSecret } from '../cdk-toolkit/service-secret';
import { ServiceConfigMap } from '../cdk-toolkit/service-configmap';

export class MyChart extends Chart {
  constructor(scope: Construct, ns: string) {
    super(scope, ns);
    new ServiceConfigMap(this, 'irving-configmap', {
      name: 'irving-configmap',
      data: {
      },
    })


    new ServiceSecret(this, 'irving-secret', {
      name: 'irving-secret',
      data: {
      },
    })

    new InternalService(this, 'app', {
      serviceName: 'irving-app-service',
      deploymentName: 'irving-app-deployment',
      image: '447866867700.dkr.ecr.us-west-2.amazonaws.com/prod/irving/app:latest',
      replicas: 1,
      port: 3000,
      containerPort: 3000,
      configMapSource: [
        {
          name: 'irving-configmap',
          optional: false
        }
      ],
      secretSource: [
        {
          name: 'irving-secret',
          optional: false
        }
      ]
    });
  }
}

console.log("Fetching secrets...")
console.log("Fetched secrets.")
const app = new App();
new MyChart(app, 'irving');
app.synth();
