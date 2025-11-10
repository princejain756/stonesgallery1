# Backend Authentication System - Setup Guide

## 🚀 Overview

This backend system provides a complete authentication and query management solution with:
- ✅ Email/Password authentication
- ✅ Google OAuth integration
- ✅ User and Admin dashboards
- ✅ Query management system
- ✅ Role-based access control
- ✅ Beautiful, animated UI

## 📦 Technologies Used

- **Next.js 15** - Full-stack framework
- **NextAuth.js** - Authentication
- **Prisma** - Database ORM
- **PostgreSQL** - Database
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **TypeScript** - Type safety

## 🔧 Setup Instructions

### 1. Database Setup

First, you need a PostgreSQL database. You can use:
- **Local PostgreSQL**
- **Neon** (https://neon.tech) - Free PostgreSQL hosting
- **Supabase** (https://supabase.com) - Free PostgreSQL with UI
- **Railway** (https://railway.app) - Easy deployment

### 2. Environment Variables

Create a `.env` file in the root directory:

```bash
# Database - Replace with your PostgreSQL connection string
DATABASE_URL="postgresql://user:password@localhost:5432/stonesgallery?schema=public"

# NextAuth Configuration
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="generate-a-random-secret-key-here"

# Google OAuth (Get from Google Cloud Console)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

### 3. Generate NextAuth Secret

Run this command to generate a secure secret:

```bash
openssl rand -base64 32
```

Copy the output to `NEXTAUTH_SECRET` in your `.env` file.

### 4. Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable **Google+ API**
4. Go to **Credentials** → **Create Credentials** → **OAuth 2.0 Client ID**
5. Configure OAuth consent screen
6. Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`
7. Copy Client ID and Client Secret to `.env`

### 5. Database Migration

Run Prisma migrations to create database tables:

```bash
# Generate Prisma Client
npx prisma generate

# Create and apply migrations
npx prisma migrate dev --name init

# Open Prisma Studio to view database (optional)
npx prisma studio
```

### 6. Create Admin User

After running migrations, you need to create an admin user manually:

```bash
# Open Prisma Studio
npx prisma studio
```

Then:
1. Go to the `User` model
2. Click "Add record"
3. Fill in:
   - **email**: your-admin@email.com
   - **name**: Admin Name
   - **password**: Leave empty (will set via registration)
   - **role**: admin
4. Save

Alternatively, register a user normally and then change their role to "admin" in Prisma Studio.

### 7. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:3000`

## 📱 Application Routes

### Public Routes
- `/` - Home page
- `/auth/login` - Login/Register page

### Protected Routes (Requires Authentication)
- `/dashboard` - User dashboard (view own queries)
- `/admin` - Admin dashboard (manage all users & queries)

### API Routes
- `POST /api/auth/register` - Register new user
- `POST /api/queries` - Create new query
- `GET /api/queries` - Get queries (user sees own, admin sees all)
- `GET /api/queries/[id]` - Get specific query
- `PATCH /api/queries/[id]` - Update query (admin only)
- `DELETE /api/queries/[id]` - Delete query
- `GET /api/admin/users` - Get all users (admin only)
- `GET /api/admin/dashboard` - Get dashboard stats (admin only)

## 🎨 Features

### Authentication
- Email & password registration
- Email & password login
- Google OAuth login
- Session management
- Password hashing with bcrypt

### User Dashboard
- View all personal queries
- Submit new queries
- Filter queries by status
- Delete own queries
- Real-time status updates
- Beautiful animations

### Admin Dashboard
- View all users and queries
- Update query status and priority
- Add admin notes to queries
- View statistics (total users, pending queries, etc.)
- Filter and manage queries
- Delete queries
- Comprehensive overview

### Query Management
- Status tracking: pending, in-progress, resolved, closed
- Priority levels: low, normal, high, urgent
- Admin notes for internal communication
- Timestamps for creation and resolution

## 🔐 Security Features

- Password hashing with bcrypt
- JWT-based sessions
- Role-based access control
- Protected API routes
- Middleware for route protection
- CSRF protection via NextAuth
- Secure session cookies

## 🎯 Default Roles

### User (default)
- Can register and login
- Can view own queries
- Can submit new queries
- Can delete own queries
- Cannot access admin panel

### Admin
- All user permissions
- Can view all users
- Can view all queries
- Can update query status/priority
- Can add admin notes
- Can delete any query
- Access to admin dashboard

## 🔄 Database Schema

```prisma
model User {
  id            String    @id @default(cuid())
  name          String?
  email         String?   @unique
  password      String?
  role          String    @default("user") // "user" or "admin"
  queries       Query[]
  accounts      Account[]
  sessions      Session[]
}

model Query {
  id          String   @id @default(cuid())
  userId      String
  name        String
  email       String
  phone       String?
  message     String
  subject     String?
  status      String   @default("pending")
  priority    String   @default("normal")
  notes       String?  // Admin notes
  user        User     @relation(fields: [userId], references: [id])
}
```

## 🚀 Deployment

### Environment Variables for Production

Update these in your production environment:

```bash
DATABASE_URL="your-production-database-url"
NEXTAUTH_URL="https://yourdomain.com"
NEXTAUTH_SECRET="your-production-secret"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

### Deployment Platforms

**Recommended: Vercel**
1. Push code to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy

**Database Hosting**
- Neon (Free PostgreSQL)
- Supabase (Free tier available)
- Railway
- PlanetScale

## 📝 Usage Guide

### For Users

1. **Register**: Go to `/auth/login` → Click "Register" tab → Fill form → Submit
2. **Login**: Enter email and password OR click "Sign in with Google"
3. **Submit Query**: Click "New Query" button → Fill form → Submit
4. **View Queries**: See all your queries in the dashboard
5. **Track Status**: Monitor query status changes in real-time

### For Admins

1. **Login**: Use admin credentials at `/auth/login`
2. **Access Admin Panel**: Click "Admin Panel" button in navbar
3. **View Dashboard**: See statistics and overview
4. **Manage Queries**: 
   - Click "Queries" tab
   - Click edit icon to update status/priority
   - Add notes for users
   - Mark as resolved when complete
5. **View Users**: Click "Users" tab to see all registered users

## 🎨 UI Highlights

- **Glassmorphism design** with backdrop blur
- **Gradient backgrounds** with animated particles
- **Smooth animations** using Framer Motion
- **Responsive design** for all screen sizes
- **Dark theme** optimized for luxury brand
- **Status badges** with color coding
- **Real-time updates** with loading states

## 🐛 Troubleshooting

### Database Connection Issues
```bash
# Test database connection
npx prisma db pull
```

### Prisma Client Issues
```bash
# Regenerate Prisma Client
npx prisma generate
```

### Migration Issues
```bash
# Reset database (WARNING: Deletes all data)
npx prisma migrate reset

# Create new migration
npx prisma migrate dev --name your_migration_name
```

### Google OAuth Not Working
- Check redirect URI matches exactly
- Ensure OAuth consent screen is configured
- Verify credentials in `.env` file

## 📚 Resources

- [NextAuth.js Documentation](https://next-auth.js.org/)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Google OAuth Setup](https://support.google.com/cloud/answer/6158849)

## 🎉 Success!

Your authentication system is now ready! Users can register, login, submit queries, and admins can manage everything from a beautiful dashboard.

**Test Credentials:**
- Create your first user via registration
- Update role to "admin" in Prisma Studio
- Login and explore the admin dashboard

---

Built with ❤️ for Stones Gallery
