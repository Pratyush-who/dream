import { motion } from 'framer-motion';
import Head from 'next/head';
import { FiSearch, FiFilter, FiBookOpen, FiHeart, FiShare2 } from 'react-icons/fi';

type Dream = {
  id: string;
  title: string;
  excerpt: string;
  mood: string;
  language: string;
  likes: number;
  date: string;
  isPublic: boolean;
};

export default function DreamLibrary() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMood, setSelectedMood] = useState<string>('all');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('all');
  
  const dreams: Dream[] = [
    {
      id: '1',
      title: 'The Floating City',
      excerpt: 'I dreamed of a city that floated above the clouds, with bridges made of light connecting the buildings...',
      mood: 'surreal',
      language: 'english',
      likes: 42,
      date: '2 days ago',
      isPublic: true
    },
    {
      id: '2',
      title: 'समुद्र के नीचे का मंदिर',
      excerpt: 'मैंने सपना देखा कि मैं एक प्राचीन मंदिर में था जो समुद्र के नीचे था...',
      mood: 'adventure',
      language: 'hindi',
      likes: 28,
      date: '1 week ago',
      isPublic: true
    },
    {
      id: '3',
      title: 'The Chase',
      excerpt: 'I was being chased through a maze of mirrors by a shadowy figure...',
      mood: 'horror',
      language: 'english',
      likes: 35,
      date: '3 days ago',
      isPublic: true
    },
    {
      id: '4',
      title: 'மலைக்குள் மறைந்த நகரம்',
      excerpt: 'ஒரு மலையின் உள்ளே மறைந்து கிடந்த பழைய நகரத்தை கண்டேன்...',
      mood: 'adventure',
      language: 'tamil',
      likes: 19,
      date: '5 days ago',
      isPublic: true
    }
  ];

  const filteredDreams = dreams.filter(dream => {
    const matchesSearch = dream.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         dream.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesMood = selectedMood === 'all' || dream.mood === selectedMood;
    const matchesLanguage = selectedLanguage === 'all' || dream.language === selectedLanguage;
    
    return matchesSearch && matchesMood && matchesLanguage;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-50 text-gray-900">
      <Head>
        <title>Dream Library | Aura</title>
      </Head>

      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-8">
            <FiBookOpen className="w-6 h-6 text-purple-600" />
            <h1 className="text-3xl font-bold">Dream Library</h1>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-grow">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search dreams..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex gap-2">
                <div className="relative">
                  <FiFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <select
                    value={selectedMood}
                    onChange={(e) => setSelectedMood(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg appearance-none"
                  >
                    <option value="all">All Moods</option>
                    <option value="surreal">Surreal</option>
                    <option value="romantic">Romantic</option>
                    <option value="horror">Horror</option>
                    <option value="adventure">Adventure</option>
                  </select>
                </div>
                
                <div className="relative">
                  <FiFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <select
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg appearance-none"
                  >
                    <option value="all">All Languages</option>
                    <option value="english">English</option>
                    <option value="hindi">Hindi</option>
                    <option value="tamil">Tamil</option>
                    <option value="bengali">Bengali</option>
                    <option value="telugu">Telugu</option>
                  </select>
                </div>
              </div>
            </div>

            {filteredDreams.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500">No dreams found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredDreams.map((dream) => (
                  <motion.div
                    key={dream.id}
                    whileHover={{ y: -5 }}
                    className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold">{dream.title}</h3>
                        <span className="text-xs px-2 py-1 bg-purple-100 text-purple-800 rounded-full capitalize">
                          {dream.mood}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{dream.excerpt}</p>
                      
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">{dream.date}</span>
                        <div className="flex gap-4">
                          <button className="flex items-center gap-1 text-gray-500 hover:text-purple-600">
                            <FiHeart className="w-4 h-4" />
                            <span>{dream.likes}</span>
                          </button>
                          <button className="flex items-center gap-1 text-gray-500 hover:text-purple-600">
                            <FiShare2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

// Reuse Navbar and Footer components from index.tsx