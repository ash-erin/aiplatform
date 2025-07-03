import { Movie, ContentRow } from '../types';

export const featuredMovie: Movie = {
  id: 'featured-1',
  title: 'The Digital Revolution',
  description: 'A groundbreaking documentary exploring the transformation of our digital world and the technologies that shape our future.',
  genre: ['Documentary', 'Technology', 'Science'],
  year: 2024,
  rating: 'PG-13',
  duration: '2h 15m',
  thumbnail: '/src/assets/1.jpg',
  backdrop: '/src/assets/1.jpg',
  videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  isFeatured: true,
  likes: 1250
};

export const movies: Movie[] = [
  {
    id: 'movie-1',
    title: 'AI Awakening',
    description: 'When artificial intelligence gains consciousness, humanity must face its greatest challenge yet.',
    genre: ['Sci-Fi', 'Thriller', 'Drama'],
    year: 2024,
    rating: 'PG-13',
    duration: '2h 8m',
    thumbnail: '/src/assets/2.jpg',
    backdrop: '/src/assets/2.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    likes: 892
  },
  {
    id: 'movie-2',
    title: 'Quantum Leap',
    description: 'A physicist discovers a way to travel through parallel dimensions, but each jump comes with a price.',
    genre: ['Sci-Fi', 'Adventure', 'Mystery'],
    year: 2023,
    rating: 'PG-13',
    duration: '1h 55m',
    thumbnail: '/src/assets/3.jpg',
    backdrop: '/src/assets/3.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    likes: 1456
  },
  {
    id: 'movie-3',
    title: 'Digital Dreams',
    description: 'In a world where dreams can be recorded and shared, privacy becomes the ultimate luxury.',
    genre: ['Drama', 'Sci-Fi', 'Romance'],
    year: 2024,
    rating: 'R',
    duration: '2h 22m',
    thumbnail: '/src/assets/4.jpg',
    backdrop: '/src/assets/4.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    likes: 743
  },
  {
    id: 'movie-4',
    title: 'Code Warriors',
    description: 'Elite hackers must infiltrate the most secure system ever created to save the world from digital chaos.',
    genre: ['Action', 'Thriller', 'Technology'],
    year: 2023,
    rating: 'PG-13',
    duration: '1h 48m',
    thumbnail: '/src/assets/5.jpg',
    backdrop: '/src/assets/5.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    likes: 1089
  },
  {
    id: 'movie-5',
    title: 'Neural Network',
    description: 'A neuroscientist discovers that human consciousness can be uploaded to the cloud, but at what cost?',
    genre: ['Sci-Fi', 'Horror', 'Thriller'],
    year: 2024,
    rating: 'R',
    duration: '2h 5m',
    thumbnail: '/src/assets/11.jpg',
    backdrop: '/src/assets/11.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    likes: 567
  },
  {
    id: 'movie-6',
    title: 'Virtual Reality',
    description: 'When the line between virtual and reality blurs, a gamer must fight for their life in both worlds.',
    genre: ['Action', 'Sci-Fi', 'Adventure'],
    year: 2023,
    rating: 'PG-13',
    duration: '1h 52m',
    thumbnail: '/src/assets/12.jpg',
    backdrop: '/src/assets/12.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    likes: 1234
  },
  {
    id: 'movie-7',
    title: 'Blockchain Revolution',
    description: 'A financial thriller about the rise and fall of cryptocurrency empires and the people who built them.',
    genre: ['Drama', 'Thriller', 'Biography'],
    year: 2024,
    rating: 'R',
    duration: '2h 18m',
    thumbnail: '/src/assets/13.jpg',
    backdrop: '/src/assets/13.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    likes: 876
  },
  {
    id: 'movie-8',
    title: 'Cyber Security',
    description: 'A cybersecurity expert races against time to prevent a global digital meltdown.',
    genre: ['Thriller', 'Action', 'Technology'],
    year: 2023,
    rating: 'PG-13',
    duration: '1h 45m',
    thumbnail: '/src/assets/14.jpg',
    backdrop: '/src/assets/14.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    likes: 1567
  },
  {
    id: 'movie-9',
    title: 'Data Mining',
    description: 'In a world where data is the new gold, miners dig deep into the digital underground.',
    genre: ['Sci-Fi', 'Drama', 'Mystery'],
    year: 2024,
    rating: 'PG-13',
    duration: '2h 12m',
    thumbnail: '/src/assets/15.jpg',
    backdrop: '/src/assets/15.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
    likes: 432
  }
];

export const contentRows: ContentRow[] = [
  {
    id: 'trending',
    title: 'Trending Now',
    movies: [
      movies[1], // AI Awakening
      movies[5], // Virtual Reality
      movies[7], // Cyber Security
      movies[2], // Quantum Leap
      movies[0], // AI Awakening (first movie)
      movies[6], // Blockchain Revolution
    ]
  },
  {
    id: 'sci-fi',
    title: 'Sci-Fi Collection',
    movies: [
      movies[0], // AI Awakening
      movies[1], // Quantum Leap
      movies[2], // Digital Dreams
      movies[4], // Neural Network
      movies[5], // Virtual Reality
      movies[8], // Data Mining
    ]
  },
  {
    id: 'action',
    title: 'Action & Thrillers',
    movies: [
      movies[3], // Code Warriors
      movies[7], // Cyber Security
      movies[5], // Virtual Reality
      movies[6], // Blockchain Revolution
      movies[1], // Quantum Leap
      movies[0], // AI Awakening
    ]
  },
  {
    id: 'new-releases',
    title: 'New Releases',
    movies: [
      movies[0], // AI Awakening
      movies[2], // Digital Dreams
      movies[4], // Neural Network
      movies[6], // Blockchain Revolution
      movies[8], // Data Mining
    ]
  },
  {
    id: 'most-liked',
    title: 'Most Liked',
    movies: [] // This will be populated dynamically based on likes
  }
];

export const getMostLikedMovies = (allMovies: Movie[], count: number = 8): Movie[] => {
  return allMovies
    .sort((a, b) => (b.likes || 0) - (a.likes || 0))
    .slice(0, count);
};