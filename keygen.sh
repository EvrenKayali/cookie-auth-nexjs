#! /bin/bash

ssh-keygen -t rsa -b 4096 -m PEM -f jwtRS256.key -N ''
sed -i '' '/CERT/d' .env.local
KEY=$(<jwtRS256.key)
ENCODED=`echo $KEY | base64` 
echo "CERT=$ENCODED" >> .env.local
rm jwtRS256.key.pub
rm jwtRS256.key