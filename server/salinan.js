require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

const SPOTIFY_TOKEN_URL = 'https://accounts.spotify.com/api/token';
// const SPOTIFY_API_URL = 'https://api.spotify.com/v1/browse/new-releases?limit=10&country=ID';
// const SPOTIFY_API_URL = 'https://api.spotify.com/v1/browse/new-releases?limit=20';
// const SPOTIFY_API_URL = 'https://api.spotify.com/v1/search?q=album:&type=album&limit=10';
// const SPOTIFY_API_URL = 'https://api.spotify.com/v1/me';
// const SPOTIFY_API_URL = 'https://api.spotify.com/v1/me/top/artists?limit=10';
const SPOTIFY_API_URL = 'https://api.spotify.com/v1/search?q=genre:pop&type=track&limit=10';

// app.get('/api/new-releases', async (req, res) => {
//   const clientId = process.env.SPOTIFY_CLIENT_ID;
//   const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

//   if (!clientId || !clientSecret) {
//     return res.status(500).json({ error: "Kredensial Spotify hilang di file .env!" });
//   }

//   try {
//     // 1. Minta Token
//     const tokenResponse = await fetch(SPOTIFY_TOKEN_URL, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//         'Authorization': 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64')
//       },
//       body: 'grant_type=client_credentials'
//     });

//     if (!tokenResponse.ok) {
//       const tokenError = await tokenResponse.json();
//       console.error("❌ Token Error:", tokenError);
//       return res.status(401).json({ error: "Gagal mendapatkan token", detail: tokenError });
//     }

//     const tokenData = await tokenResponse.json();
//     const token = tokenData.access_token;
//     console.log("✅ Token berhasil didapatkan");

//     // 2. Ambil New Releases dengan Token
//     const releaseResponse = await fetch(SPOTIFY_API_URL, {
//       method: 'GET',
//       headers: { 'Authorization': `Bearer ${token}` }
//     });

//     if (!releaseResponse.ok) {
//       console.error("Spotify API Error:", releaseData);
//       return res.status(releaseResponse.status).json({
//         error: "Spotify API Error",
//         detail: releaseData
//       });
//     }

//     const releaseData = await releaseResponse.json();
//     console.log("✅ Data releases berhasil didapatkan");

//     // 3. Kembalikan data ke Frontend
//     // const albums = releaseData.albums?.items || [];
//     const albums = releaseData.albums?.items || releaseData.releases?.items || [];

//     // if (!albums.length) {
//     //   return res.status(400).json({
//     //     warning: "Tidak ada album ditemukan",
//     //     data: []
//     //   });
//     // }
//     if (!albums.length) {
//       return res.status(400).json({
//         error: "Tidak ada album ditemukan",
//         detail: releaseData
//       });
//     }

//     res.json(albums);

//   } catch (error) {
//     console.error("❌ Error Backend:", error);
//     res.status(500).json({ error: error.message });
//   }
// });

app.get('/api/new-releases', async (req, res) => {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return res.status(500).json({ error: "Kredensial Spotify hilang di .env!" });
  }

  try {
    // ===== STEP 1: Ambil Token =====
    const tokenResponse = await fetch(SPOTIFY_TOKEN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64')
      },
      // body: 'grant_type=client_credentials'
      body: 'grant_type=client_credentials&scope=user-read-private user-read-email'
    });

    // ⭐ CHECK STATUS DULU SEBELUM PARSE DATA
    if (!tokenResponse.ok) {
      const tokenError = await tokenResponse.json();
      console.error("❌ Token Error:", tokenError);
      return res.status(401).json({ error: "Gagal ambil token dari Spotify", detail: tokenError });
    }

    const tokenData = await tokenResponse.json();
    const token = tokenData.access_token;
    console.log("✅ Token berhasil: " + token.substring(0, 20) + "...");

    // ===== STEP 2: Ambil New Releases =====
    const releaseResponse = await fetch(SPOTIFY_API_URL, {
      method: 'GET',
      headers: { 'Authorization': `Bearer ${token}` }
    });

    // ⭐ CHECK STATUS DULU SEBELUM PARSE DATA
    if (!releaseResponse.ok) {
      const releaseError = await releaseResponse.json();
      console.error("❌ Release API Error:", releaseError);
      return res.status(releaseResponse.status).json({
        error: "Gagal ambil releases dari Spotify",
        detail: releaseError
      });
    }

    const releaseData = await releaseResponse.json();
    console.log("✅ Data releases berhasil diambil");

    // ===== STEP 3: Extract albums =====
    const albums = releaseData.albums?.items || [];

    if (albums.length === 0) {
      return res.status(400).json({
        warning: "Tidak ada album ditemukan",
        data: []
      });
    }

    // ===== STEP 4: Kirim ke Frontend =====
    res.json(albums);
    console.log(`✅ Mengirim ${albums.length} albums ke frontend`);

  } catch (error) {
    console.error("❌ Unexpected Error:", error.message);
    res.status(500).json({
      error: "Server Error: " + error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
});