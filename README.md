# JobBoard  

A simple job board application built with React, Tailwind CSS, and a mock API using a JSON file.  

## 🚀 Features  
- Browse job listings  
- Apply for jobs  
- User authentication (Login & Register)  
- Dynamic job carousel  
- Responsive UI  

## 🛠️ Setup Instructions  

### 1️⃣ Clone the Repository  
```sh
git clone <https://github.com/felix-atoma/job-board.git>
cd job-board
2️⃣ Install Dependencies
sh
Copy
Edit
npm install
3️⃣ Start the Development Server
sh
Copy
Edit
npm run dev
The app will be available at http://localhost:5173/

4️⃣ JSON Mock API Setup
The job data is stored in data/jobjson.json.

Modify or add job listings directly in the JSON file.
5️⃣ Project Structure
php
Copy
Edit
jobboard/
│── src/
│   ├── components/        # Reusable components (Navbar, Footer, JobCarousel, ApplyForm, Relationship)
│   ├── data/              # Contains jobjson.json (mock API)
│   ├── layouts/           # Layout components (RootLayout)
│   ├── pages/             # Application pages (Home, Browse Jobs, Login, Register)
│   ├── App.jsx            # Main App component
│   ├── main.jsx           # Entry point
│── public/                # Static assets
│── package.json           # Project dependencies and scripts
│── README.md              # Project documentation
🔗 Links
GitHub Repo: [https://github.com/felix-atoma/job-board.git]

Flutterflow Design: [https://app.flutterflow.io/project/felixapp-8g24gr]

Live Demo: [https://job-board-git-main-felix-atomas-projects.vercel.app/]
