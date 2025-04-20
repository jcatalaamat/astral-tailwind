#!/bin/bash

# This script helps set up a custom domain for your site

# Check if domain name was provided
if [ -z "$1" ]; then
  echo "Please provide a domain name, e.g.: ./setup-custom-domain.sh yourdomain.com"
  exit 1
fi

DOMAIN=$1

# Create CNAME file
echo "Creating CNAME file for $DOMAIN..."
echo "$DOMAIN" > CNAME

# Copy CNAME to dist directory
echo "Copying CNAME to dist directory..."
cp CNAME dist/

echo "Custom domain setup complete! Next steps:"
echo "1. Build your project: yarn build"
echo "2. Deploy to GitHub Pages: yarn deploy"
echo "3. Go to your GitHub repository settings and set up the custom domain"
echo "   in the GitHub Pages section."
echo ""
echo "Don't forget to configure your domain's DNS settings to point to GitHub Pages." 