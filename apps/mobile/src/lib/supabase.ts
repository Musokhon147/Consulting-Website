import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ethcsaqdpcgrqsuooxvi.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0aGNzYXFkcGNncnFzdW9veHZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc3ODI4NjYsImV4cCI6MjA4MzM1ODg2Nn0.vRR66KeGtUju1rh_ymZuAq4reSMQUNLbNKdH-079Kug';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
});
