import { Analytics, logEvent as firebaseLogEvent, getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';

// 🔧 DEBUG FLAG - Set to false to disable all debug output
const ENABLE_DEBUG_MODE = false;

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

    // Enable debug mode if flag is true
    if (ENABLE_DEBUG_MODE) {
      // Enable debug view in Firebase Console
      (window as any).gtag('config', 'G-6Y7THWE39L', {
        debug_mode: true
      });
      console.log('🔥 Firebase Analytics Debug Mode Enabled');
    }
  }
  return analytics;
};

// Device detection utility
export const getDeviceType = (): 'mobile' | 'desktop' => {
  if (typeof window === 'undefined') return 'desktop';

  const userAgent = navigator.userAgent.toLowerCase();
  const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
  const isTablet = /ipad|android(?!.*mobile)/i.test(userAgent);

  const deviceType = (isMobile || isTablet) ? 'mobile' : 'desktop';

  // Debug logging if flag is enabled
  if (ENABLE_DEBUG_MODE) {
    console.log('🔍 Device Detection:', {
      userAgent: userAgent.substring(0, 100) + '...',
      isMobile,
      isTablet,
      detectedType: deviceType
    });
  }

  return deviceType;
};

// Test function for mobile analytics (development only)
export const testMobileAnalytics = () => {
  if (ENABLE_DEBUG_MODE) {
    const deviceType = getDeviceType();
    console.log('🧪 Testing Mobile Analytics:', {
      currentDevice: deviceType,
      isFirebaseReady: !!getFirebaseAnalytics(),
      timestamp: new Date().toISOString()
    });

    // Test a CTA click
    trackCTAClick('test_mobile_analytics');
  }
};

// Log events using Firebase Analytics
export const logEvent = (eventName: string, parameters?: Record<string, any>) => {
  const analytics = getFirebaseAnalytics();
  if (analytics) {
    // Log to console if debug flag is enabled
    if (ENABLE_DEBUG_MODE) {
      console.log('📊 Analytics Event:', {
        event: eventName,
        parameters,
        timestamp: new Date().toISOString()
      });
    }
    firebaseLogEvent(analytics, eventName, parameters);
  }
};

// CTA tracking function
export const trackCTAClick = (ctaName: string) => {
  if (typeof window !== 'undefined') {
    logEvent('cta_click', {
      name: ctaName,
    });
  }
};

export const trackGAEvent = (eventName: string, params?: { [key: string]: any }) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, params);
  } else if (typeof window !== 'undefined') {
    // Fallback for Firebase Analytics if gtag is not present
    logEvent(eventName, params);
  }
};

// Video tracking functions
export const trackVideoStarted = () => {
  logEvent('video_started', {
    device_type: getDeviceType(),
    event_category: 'engagement',
  });
};

export const trackVideoFinished = () => {
  logEvent('video_finished', {
    device_type: getDeviceType(),
    event_category: 'engagement',
  });
};

// Scroll tracking functions
export const trackScrollToProductDescription = () => {
  logEvent('scrolled_to_Product_description', {
    device_type: getDeviceType(),
    event_category: 'navigation',
  });
};

export const trackScrollToRoadmap = () => {
  logEvent('scrolled_to_roadmap', {
    device_type: getDeviceType(),
    event_category: 'navigation',
  });
};

// Modal unfold tracking
export const trackModalUnfold = (modalName: string) => {
  logEvent(`unfold_${modalName}`, {
    modal_name: modalName,
    device_type: getDeviceType(),
    event_category: 'interaction',
  });
};

// Form submission tracking
export const trackFormSend = () => {
  logEvent('form_send', {
    device_type: getDeviceType(),
    event_category: 'conversion',
  });
}; 