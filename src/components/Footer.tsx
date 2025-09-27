// / Mengimpor data profil dari file terpusat
import { profile } from "../data/site";

export default function Footer() {
  return (
    // / Memberi batas atas dan padding
    <footer className="border-t border-slate-200 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} {profile.name}.
        </p>
      </div>
    </footer>
  );
}