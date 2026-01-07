import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ActivityIndicator, SafeAreaView } from 'react-native';
import { supabase } from './src/lib/supabase';

export default function App() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState<'courses' | 'testimonials'>('courses');

  const fetchData = async () => {
    setLoading(true);
    const { data } = await supabase
      .from(view)
      .select('*')
      .order('created_at', { ascending: false });

    if (data) setItems(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [view]);

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.card}>
      <Image
        source={{ uri: item.image_url || 'https://via.placeholder.com/150' }}
        style={styles.image}
      />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.title || item.name}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {item.description || item.quote}
        </Text>
        <Text style={styles.meta}>
          {view === 'courses' ? item.level : item.role}
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.header}>Freshman <Text style={{ color: '#FF8A00' }}>Academy</Text></Text>

        {/* Tabs */}
        <View style={styles.tabs}>
          <TouchableOpacity
            onPress={() => setView('courses')}
            style={[styles.tab, view === 'courses' && styles.activeTab]}
          >
            <Text style={[styles.tabText, view === 'courses' && styles.activeTabText]}>Courses</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setView('testimonials')}
            style={[styles.tab, view === 'testimonials' && styles.activeTab]}
          >
            <Text style={[styles.tabText, view === 'testimonials' && styles.activeTabText]}>Reviews</Text>
          </TouchableOpacity>
        </View>

        {loading ? (
          <View style={styles.center}>
            <ActivityIndicator size="large" color="#001F3F" />
          </View>
        ) : (
          <FlatList
            data={items}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.list}
            ListEmptyComponent={
              <Text style={styles.empty}>No {view} found.</Text>
            }
          />
        )}
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: '900',
    color: '#001F3F',
    marginBottom: 20,
    letterSpacing: -1,
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  tabText: {
    fontWeight: '700',
    color: '#666',
  },
  activeTabText: {
    color: '#001F3F',
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#eee',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 180,
  },
  cardContent: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#001F3F',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 8,
  },
  meta: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FF8A00',
    textTransform: 'uppercase',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  empty: {
    textAlign: 'center',
    color: '#999',
    marginTop: 50,
  },
});
