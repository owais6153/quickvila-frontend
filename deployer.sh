set -e

#Pull Code & Build.
cd public_html/trikaro
git pull origin master
npm run build

cd ../../

#Copy the build files to public_html.
rsync -a public_html/trikaro/build/* public_html/
#Make sure .htaccess is set.
cp public_html/trikaro/.htaccess public_html/.htaccess