docker build -t todos .

docker tag todos:latest 192905991141.dkr.ecr.us-east-2.amazonaws.com/todos:v0.1.5

docker push 192905991141.dkr.ecr.us-east-2.amazonaws.com/todos:v0.1.5