import axios from 'axios';

// Base URL for API - change this based on environment
const API_URL = 'https://portfolio-mern-xj7i.onrender.com/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds
});

// ===========================
// CONTACT API
// ===========================

export const submitContactForm = async (formData) => {
  try {
    const response = await api.post('/contact', formData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Failed to submit form. Please try again.';
  }
};

export const getAllContacts = async () => {
  try {
    const response = await api.get('/contact');
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Failed to fetch contacts.';
  }
};

// ===========================
// PROJECTS API
// ===========================

export const getAllProjects = async () => {
  try {
    const response = await api.get('/projects');
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Failed to fetch projects.';
  }
};

export const getFeaturedProjects = async () => {
  try {
    const response = await api.get('/projects/featured');
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Failed to fetch featured projects.';
  }
};

export const getProjectById = async (id) => {
  try {
    const response = await api.get(`/projects/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Failed to fetch project.';
  }
};

export default api;