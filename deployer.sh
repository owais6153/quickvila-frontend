set -e

echo "Deployment Start"
git pull origin master
npm run build
cd ../../
rsync -a public_html/trikaro/build/* public_html/
cp public_html/trikaro/.htaccess public_html/.htaccess
echo "Deployment Finished"
