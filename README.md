# Dissertation-Experiment
View Results

1) Run docker-compose -f docker-compose-mongo.yml up
2) Run docker ps
3) Copy the docker container code
4) Run docker exec -it {docker container code} bash
5) Run mongo "mongodb://user:password@mongodb:27017/participants?authSource=admin"
6) Results are in the collection Answers
7) One example command is db.Answers.find({}) to view all the results


Run Experiment

1) cd scripts
2) ./run.sh

Run Website Only

1) docker-compose -f docker-compose-frontend-only.yml up
