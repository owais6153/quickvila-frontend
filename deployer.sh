set -e

echo "Deployment Start"
git pull origin master
echo "Build Start"
npm run build
cd ../../
echo "Moving build to public"
rsync -a public_html/trikaro/build/* public_html/
cp public_html/trikaro/.htaccess public_html/.htaccess
echo "Deployment Finished"
