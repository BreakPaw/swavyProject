my-app/
	├── public/              # Aset statis seperti favicon dan index.html
	├── src/
	│   ├── assets/          # Gambar, font, dan file global CSS
	│   ├── components/      # Komponen kecil (Button, Card, Navbar)
	│   │   ├── common/      # Komponen yang dipakai di banyak tempat
	│   │   └── layout/      # Komponen pembungkus (Header, Footer)
	│   ├── hooks/           # Custom React Hooks (misal: useAuth, useFetch)
	│   ├── pages/           # Komponen halaman (Home.jsx, Dashboard.jsx)
	│   ├── services/        # Konfigurasi API (Axios instance)
	│   ├── store/           # State management (Redux/Context)
	│   ├── utils/           # Fungsi pembantu/helper (Format tanggal, dll)
	│   ├── App.jsx          # Root component
	│   └── main.jsx         # Entry point aplikasi
	├── .gitignore           # File yang diabaikan oleh Git
	├── package.json         # Daftar dependensi dan script
	└── README.md            # Dokumentasi proyek
