require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// CORS Setup yang lebih ketat
const corsOptions = {
  origin: 'http://localhost:5173', // Port Vite default
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

// app.use(cors(corsOptions));
// app.options('*', cors(corsOptions)); // Pre-flight
app.use(cors());

const SPOTIFY_TOKEN_URL = 'https://accounts.spotify.com/api/token';
const SPOTIFY_API_URL = 'https://api.spotify.com/v1/search?q=year:2026&type=album&limit=10';
// const SPOTIFY_API_URL =
//   'https://api.spotify.com/v1/browse/new-releases?limit=10&offset=0&country=US';
// const SPOTIFY_API_URL = 'https://api.spotify.com/v1/search?q=pop&type=album&limit=10';
// const SPOTIFY_API_URL = 'https://api.spotify.com/v1/browse/new-releases?limit=20';
// const SPOTIFY_API_URL = 'https://api.spotify.com/v1/search?q=album:*&type=album&limit=10';
// const SPOTIFY_API_URL = 'https://api.spotify.com/v1/browse/categories?limit=10';
// const SPOTIFY_API_URL = 'https://api.spotify.com/v1/search?q=year:2024&type=album&limit=10';

app.get('/api/new-releases', async (req, res) => {
  console.log('\n📍 Request diterima ke /api/new-releases');

  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    console.error('❌ Credentials missing!');
    return res.status(500).json({ error: "Kredensial Spotify hilang!" });
  }

  try {
    // Step 1: Token
    console.log('1️⃣  Requesting token...');
    const tokenResponse = await fetch(SPOTIFY_TOKEN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64')
      },
      body: 'grant_type=client_credentials'
    });

    if (!tokenResponse.ok) {
      const error = await tokenResponse.json();
      console.error('❌ Token Error:', error);
      return res.status(401).json({ error: "Token failed", detail: error });
    }

    const tokenData = await tokenResponse.json();
    const token = tokenData.access_token;
    console.log('✅ Token OK');

    // Step 2: New Releases
    console.log('2️⃣  Fetching releases...');
    const releaseResponse = await fetch(SPOTIFY_API_URL, {
      headers: { 'Authorization': `Bearer ${token}` }
    });

    console.log('📊 Spotify Status:', releaseResponse.status);

    if (!releaseResponse.ok) {
      const error = await releaseResponse.json();
      console.error('❌ Spotify Error:', error);
      return res.status(releaseResponse.status).json({
        error: "Spotify failed",
        detail: error
      });
    }

    const releaseData = await releaseResponse.json();
    const albums = releaseData.albums?.items || [];

    console.log(`✅ Success! Sending ${albums.length} albums`);
    res.json(albums);

  } catch (error) {
    console.error('❌ Exception:', error.message);
    res.status(500).json({ error: error.message });
  }
});

// Error middleware
app.use((err, req, res, next) => {
  console.error('🔴 Unhandled Error:', err);
  res.status(500).json({ error: 'Server error' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server di http://localhost:${PORT}`);
  console.log(`✅ CORS enabled untuk localhost:5173`);
});