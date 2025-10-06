# HeartBridge - Project Structure

```
heartbridge/
├── public/
│   ├── index.html                 # Landing page
│   ├── auth/
│   │   ├── login.html
│   │   ├── register.html
│   │   └── forgot-password.html
│   ├── dashboard/
│   │   ├── supporter.html
│   │   ├── orphanage.html
│   │   └── admin.html
│   ├── pages/
│   │   ├── explore.html           # Browse orphanages
│   │   ├── donate.html            # Donation checkout
│   │   ├── volunteer.html         # Volunteer opportunities
│   │   └── profile.html           # User settings
│   ├── assets/
│   │   ├── css/
│   │   │   ├── main.css           # Main styles
│   │   │   ├── components.css     # Reusable components
│   │   │   └── dashboard.css      # Dashboard specific
│   │   ├── js/
│   │   │   ├── main.js            # Core functionality
│   │   │   ├── auth.js            # Authentication
│   │   │   ├── firebase-config.js # Firebase setup
│   │   │   ├── dashboard.js       # Dashboard logic
│   │   │   └── donations.js       # Payment integration
│   │   ├── images/
│   │   │   ├── logo/
│   │   │   ├── icons/
│   │   │   └── placeholders/
│   │   └── fonts/
├── firebase/
│   ├── functions/
│   │   ├── index.js              # Cloud Functions
│   │   └── package.json
│   ├── firestore.rules           # Security rules
│   ├── storage.rules             # File upload rules
│   └── firebase.json             # Firebase config
├── docs/
│   ├── README.md                 # Project documentation
│   ├── SETUP.md                  # Installation guide
│   └── API.md                    # Backend API docs
├── .gitignore
└── package.json                  # Dependencies
```

## Key Files Purpose:

**Frontend Structure:**
- `index.html` - Landing page with mission statement
- `auth/` - Login, register, password reset pages
- `dashboard/` - Role-specific dashboards (supporter, orphanage, admin)
- `pages/` - Core functionality pages
- `assets/` - Static resources (CSS, JS, images)

**Backend Structure:**
- `firebase/functions/` - Cloud Functions for server logic
- `firestore.rules` - Database security rules
- `firebase.json` - Firebase project configuration

**Documentation:**
- Setup guides and API documentation for easy deployment