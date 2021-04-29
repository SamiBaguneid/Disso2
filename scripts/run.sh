
cd ..
cd app
docker-compose build --no-cache
docker-compose up
cd ..
cp -r app/build/ nginx/build/
docker-compose up --build
