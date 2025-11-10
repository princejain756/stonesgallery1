#!/bin/bash

echo "🚀 Stones Gallery Backend Setup"
echo "================================"
echo ""

# Check if .env exists
if [ ! -f .env ]; then
    echo "⚠️  .env file not found. Creating from .env.example..."
    cp .env.example .env
    echo "✅ Created .env file"
    echo "⚠️  Please edit .env and add your actual credentials!"
    echo ""
else
    echo "✅ .env file found"
fi

# Generate Prisma Client
echo "📦 Generating Prisma Client..."
npx prisma generate

# Run migrations
echo "🗄️  Running database migrations..."
echo "⚠️  Make sure your DATABASE_URL is set correctly in .env"
read -p "Press enter to continue or Ctrl+C to cancel..."
npx prisma migrate dev --name init

# Ask if user wants to open Prisma Studio
echo ""
read -p "Would you like to open Prisma Studio to create an admin user? (y/n) " -n 1 -r
echo ""
if [[ $REPLY =~ ^[Yy]$ ]]
then
    echo "🎨 Opening Prisma Studio..."
    echo "Create a user and set role to 'admin'"
    npx prisma studio
fi

echo ""
echo "✨ Setup complete!"
echo ""
echo "📝 Next steps:"
echo "1. Edit .env with your actual credentials"
echo "2. Set up Google OAuth in Google Cloud Console"
echo "3. Create an admin user in Prisma Studio"
echo "4. Run 'npm run dev' to start the server"
echo ""
echo "📚 See BACKEND-SETUP.md for detailed instructions"
