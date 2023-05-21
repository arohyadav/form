pipeline {

    agent any

    tools {
    nodejs "node"
    }

    environment {
        registryCredential ="ecr:us-east-1:awscreds1"

        appRegistry = "685898574663.dkr.ecr.us-east-1.amazonaws.com/client"
        vprofileRegistry = "https://685898574663.dkr.ecr.us-east-1.amazonaws.com/client"
        
        appRegistry2 = "685898574663.dkr.ecr.us-east-1.amazonaws.com/server"
        vprofileRegistry2 = "https://685898574663.dkr.ecr.us-east-1.amazonaws.com/server"

        appRegistry3 = "685898574663.dkr.ecr.us-east-1.amazonaws.com/nginx"
        vprofileRegistry3 = "https://685898574663.dkr.ecr.us-east-1.amazonaws.com/nginx"
        
        cluster = "rgstech"
        service = "rgstechservice"
    }

    stages {
        stage('Checkout') {
            steps {
            checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/arohyadav/RGSFORM.git']])
            }
        }
  
 
        stage('Test') {
            steps {
            sh 'node --version'
            }
        }

        stage('Build and Push Client Image to ECR') {
            steps {
                script {
                    def imageTag = "${env.BUILD_NUMBER}"

                    dir('client') {
                        sh "aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 685898574663.dkr.ecr.us-east-1.amazonaws.com"
                        sh "docker build -t ${appRegistry}:${imageTag} -t ${appRegistry}:latest ."
                        sh "docker push ${appRegistry}:${imageTag}"
                        sh "docker push ${appRegistry}:latest"
                    }

                }
            }
        }

        stage('Build and Push Server Image to ECR') {
            steps {
                script {
                    def imageTag2 = "${env.BUILD_NUMBER}"

                    dir('server') {
                        sh "aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 685898574663.dkr.ecr.us-east-1.amazonaws.com"
                        sh "docker build -t ${appRegistry2}:${imageTag2} -t ${appRegistry2}:latest ."
                        sh "docker push ${appRegistry2}:${imageTag2}"
                        sh "docker push ${appRegistry2}:latest"
                    }

                }
            }
        }

        stage('Build and Push Nginx Image to ECR') {
            steps {
                script {
                    def imageTag3 = "${env.BUILD_NUMBER}"

                    dir('nginx') {
                        sh "aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 685898574663.dkr.ecr.us-east-1.amazonaws.com"
                        sh "docker build -t ${appRegistry3}:${imageTag3} -t ${appRegistry3}:latest ."
                        sh "docker push ${appRegistry3}:${imageTag3}"
                        sh "docker push ${appRegistry3}:latest"
                    }

                }
            }
        }

        stage('Deploy to ECS') {
            steps {
                withAWS(credentials: 'awscreds1', region: 'us-east-1') {
                        sh "aws ecs update-service --cluster ${cluster} --service ${service} --force-new-deployment"
        }
      }
    }


  }
}