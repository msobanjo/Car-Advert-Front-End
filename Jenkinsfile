
pipeline {
    agent any

    stages {
        stage('Testing Environment') {
            steps {
                   echo "test"
                }
            }
        stage('Build') {
            steps {
 
                sh 'docker build -t="msobanjo/car-advert-front-end:latest" .'
                }
            }
        stage('Deploy') {
            steps {
                sh 'docker push msobanjo/car-advert-front-end:latest'
            }
        }
    }
}
