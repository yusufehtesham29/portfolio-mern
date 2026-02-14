require('dotenv').config();
const mongoose = require('mongoose');
const Project = require('./models/Project');

const projects = [
  {
    title: "Superstore Sales & Profit Analysis",
    description: "Analyze 9,995 retail transactions to identify profit optimization opportunities and provide data-driven business recommendations.",
    techStack: ["SQL (SQLite)", "Python (Pandas, Matplotlib)", "Jupyter Notebook"],
    githubLink: "https://github.com/yusufehtesham29/superstore-sales-analysis",
    featured: true,
    order: 1
  },
  {
    title: "Customer Churn Prediction Using Machine Learning",
    description: "Built a machine learning model to predict customer churn with 85% accuracy using classification algorithms and feature engineering.",
    techStack: ["Python 3.12", "Pandas", "NumPy", "Matplotlib & Seaborn", "Scikit-learn"],
    githubLink: "https://github.com/yusufehtesham29/customer-churn-prediction",
    featured: true,
    order: 2
  },
  {
    title: "Superstore SQL-Python Portfolio",
    description: "Professional Data Analyst Portfolio: Superstore Sales & Profit Analysis using SQL and Python for comprehensive business insights.",
    techStack: ["SQL (SQLite)", "Python (Pandas, Matplotlib)", "Jupyter Notebook"],
    githubLink: "https://github.com/yusufehtesham29/superstore-sql-python-portfolio",
    featured: false,
    order: 3
  },
  {
    title: "Sales Insights Analysis - Supermarket Data",
    description: "This project analyzes supermarket sales data from January to March 2019 to uncover trends, customer behavior, and actionable insights.",
    techStack: ["Python 3.12", "Pandas", "NumPy", "Matplotlib & Seaborn"],
    githubLink: "https://github.com/yusufehtesham29/sales-insights-python",
    featured: false,
    order: 4
  },
  {
    title: "Coffee Shop Sales Dashboard",
    description: "Interactive Excel Dashboard for Coffee Shop Sales Analysis with comprehensive data visualization and business intelligence.",
    techStack: ["Microsoft Excel", "Data Analysis", "Dashboard Design", "Business Intelligence"],
    githubLink: "https://github.com/yusufehtesham29/coffee-shop-sales-dashboard",
    featured: false,
    order: 5
  }
];

async function seedProjects() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('📦 Connected to MongoDB');

    const deleteResult = await Project.deleteMany({});
    console.log(`🗑️  Deleted ${deleteResult.deletedCount} existing projects`);

    const insertedProjects = await Project.insertMany(projects);
    console.log(`✅ Added ${insertedProjects.length} projects:`);
    insertedProjects.forEach((project, index) => {
      console.log(`   ${index + 1}. ${project.title}`);
    });

    await mongoose.connection.close();
    console.log('👋 Database connection closed');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.errors) {
      Object.keys(error.errors).forEach(key => {
        console.error(`   - ${key}: ${error.errors[key].message}`);
      });
    }
    process.exit(1);
  }
}

seedProjects();