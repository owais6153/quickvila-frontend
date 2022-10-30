set -e

#Pull Code & Build.
cd /home/quickvil/public_html/trikaro
git pull origin master
npm run build
#Copy the build files to public_html.
rsync -a /home/quickvil/public_html/trikaro/build/* /home/quickvil/public_html/
#Make sure .htaccess is set.
cp /home/quickvil/public_html/trikaro/.htaccess /home/quickvil/public_html/.htaccess