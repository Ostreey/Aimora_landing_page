# Firebase Analytics Setup Guide

This project has been configured with Firebase Analytics (which is Google Analytics 4) to track user interactions and website performance. Since you already have Firebase in your mobile app, this creates a unified analytics experience across platforms.

## 🚀 **Setup Complete!**

✅ Your Firebase configuration is already integrated using your existing project:
- **Project ID**: `shooting-buddy-d97a0`
- **Measurement ID**: `G-4SJ55ZBD9D`
- **Domain**: `shooting-buddy-d97a0.firebaseapp.com`

## 📊 **Unified Analytics**

**Benefits of using Firebase Analytics for both mobile and web:**
- **Same dashboard** - All data appears in one Firebase console
- **Cross-platform user journeys** - Track users across your app and website  
- **Consistent event structure** - Same event names work across platforms
- **Standard Firebase events** - Better integration with built-in reports

## 📱💻 **Cross-Platform Events**

The web implementation now uses **Firebase recommended events** that match mobile analytics patterns:

### **Feature Interactions**
```typescript
// Web (matches mobile patterns)
logEvent('select_content', {
  content_type: 'feature',
  content_id: 'battery',
  item_name: 'Akumulator'
});
```

### **Modal Views**
```typescript
// Standard Firebase event
logEvent('view_item', {
  item_id: 'battery',
  item_name: 'Akumulator',
  item_category: 'feature_modal'
});
```

### **CTA Tracking**
```typescript
// Promotion tracking
logEvent('select_promotion', {
  promotion_id: 'hero_section_desktop_order',
  promotion_name: 'cta_button'
});
```

## 🔧 **Technical Implementation**

### **Firebase Configuration**
- **File**: `src/lib/firebase.ts` - Firebase initialization and analytics functions
- **Auto-initialization**: Analytics loads automatically on client-side
- **Same project**: Uses your existing Firebase project credentials

### **Event Functions**
- `trackFeatureClick(featureId, featureTitle)` → `select_content` event
- `trackModalOpen(featureId, featureTitle)` → `view_item` event  
- `trackModalClose(featureId)` → Custom close event
- `trackSwipeInteraction(direction, featureId)` → Custom swipe event
- `trackCTAClick(location)` → `select_promotion` event

## 📈 **Viewing Analytics Data**

**Firebase Console**: [https://console.firebase.google.com/project/shooting-buddy-d97a0](https://console.firebase.google.com/project/shooting-buddy-d97a0)

1. **Real-time**: Analytics → Events → Real-time
2. **Event Reports**: Analytics → Events → All events  
3. **Cross-platform**: See both mobile app and website data together
4. **Custom Reports**: Create reports using Firebase Analytics Intelligence

## 🎯 **Event Consistency**

Your web analytics now use **standard Firebase events** that work seamlessly with your mobile app:

| Web Event | Mobile Equivalent | Purpose |
|-----------|------------------|---------|
| `select_content` | `select_content` | Feature card clicks |
| `view_item` | `view_item` | Modal/detail views |
| `select_promotion` | `select_promotion` | CTA button clicks |
| Custom events | Custom events | App-specific interactions |

## 🧪 **Testing**

1. **Firebase Console**: Check real-time events in Firebase Analytics
2. **Browser DevTools**: Look for Firebase analytics network requests
3. **DebugView**: Enable debug mode for detailed event testing

```javascript
// Enable debug mode (development only)
import { getAnalytics } from 'firebase/analytics';
// Debug events appear in Firebase Console → DebugView
```

## 🔒 **Privacy & Compliance**

- **Unified privacy settings** - Same privacy controls as your mobile app
- **GDPR compliance** - Firebase handles consent management
- **No additional setup** - Uses your existing Firebase privacy configuration

## ⚡ **No Environment Variables Needed**

Unlike traditional GA4 setups, Firebase SDK uses the built-in configuration, so:
- ❌ No `.env.local` file needed
- ❌ No measurement ID setup required  
- ✅ Works immediately with your existing Firebase project

## 📊 **Standard Firebase Events Used**

- **`select_content`** - When users interact with features
- **`view_item`** - When users view detailed content (modals)
- **`select_promotion`** - When users click promotional CTAs
- **Custom events** - App-specific interactions like swipes

This creates a much more consistent and powerful analytics setup that works seamlessly with your existing mobile app analytics! 🎉

## 📺 **Advanced YouTube Video Tracking**

The website now includes comprehensive YouTube video analytics:

### **Tracked Events:**
- `youtube_video_started` - When YouTube video begins playing
- `youtube_video_progress` - Milestone tracking (25%, 50%, 75% completion)
- `youtube_video_stopped` - When user pauses/stops video
- `youtube_video_finished` - When YouTube video completes

### **Data Collected:**
- `video_id` - YouTube video ID (e.g., "6n6qWvT0Uzs")
- `video_title` - Descriptive title
- `current_time` / `stopped_at` - Timestamp in seconds where event occurred
- `video_duration` - Total video length in seconds
- `percent_watched` - Percentage of video completed
- `milestone` - Progress milestone (25, 50, 75 for progress events)
- `device_type` - mobile/desktop

### **YouTube Player API Integration:**
- Uses official YouTube Player API for precise tracking
- Tracks viewing behavior without interrupting user experience
- Compatible with all YouTube features (fullscreen, quality selection, etc.)

This allows you to analyze:
- 📊 **Engagement**: How much of your videos people actually watch
- ⏱️ **Drop-off Points**: Where users typically stop watching
- 📱 **Device Preferences**: Mobile vs desktop video consumption
- 🎯 **Content Performance**: Which videos drive the most engagement 