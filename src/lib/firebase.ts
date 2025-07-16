import { Analytics, logEvent as firebaseLogEvent, getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration (complete config from "landing page 2" stream)
const firebaseConfig = {
  apiKey: "AIzaSyB8CAR1HiktODFCDuvjTrRo2fyCRAuzEm8",
  authDomain: "shooting-buddy-d97a0.firebaseapp.com",
  projectId: "shooting-buddy-d97a0",
  storageBucket: "shooting-buddy-d97a0.firebasestorage.app",
  messagingSenderId: "285001528726",
  appId: "1:285001528726:web:29b90233fab5b0cdb3d9b7",
  measurementId: "G-6Y7THWE39L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics
let analytics: Analytics | null = null;

// Function to get analytics instance (only on client side)
export const getFirebaseAnalytics = () => {
  if (typeof window !== 'undefined' && !analytics) {
    analytics = getAnalytics(app);
  }
  return analytics;
};

// Log events using Firebase Analytics
export const logEvent = (eventName: string, parameters?: Record<string, any>) => {
  const analytics = getFirebaseAnalytics();
  if (analytics) {
    firebaseLogEvent(analytics, eventName, parameters);
  }
};

// Specific tracking functions for common events
export const trackFeatureClick = (featureId: string, featureTitle: string) => {
  logEvent('feature_clicked', {
    feature_id: featureId,
    feature_title: featureTitle,
    event_category: 'engagement',
  });
};

export const trackModalOpen = (featureId: string, featureTitle: string) => {
  logEvent('modal_opened', {
    feature_id: featureId,
    feature_title: featureTitle,
    event_category: 'engagement',
  });
};

export const trackModalClose = (featureId: string) => {
  logEvent('modal_closed', {
    feature_id: featureId,
    event_category: 'engagement',
  });
};

export const trackSwipeInteraction = (direction: string, featureId: string, featureTitle?: string) => {
  logEvent('feature_swiped', {
    swipe_direction: direction,
    feature_id: featureId,
    feature_title: featureTitle,
    event_category: 'interaction',
  });
};

export const trackCTAClick = (ctaLocation: string) => {
  logEvent('order', {
    button_location: ctaLocation,
    event_category: 'conversion',
  });
}; 