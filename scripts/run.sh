
cd ..
cd app
docker-compose up --build
cd ..
cp -r app/build/ nginx/build/
docker-compose up --build
