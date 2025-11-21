import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-8">
      <div className="max-w-7xl mx-auto px-6 py-10 text-center text-gray-600">
        <div className="mb-3">© {new Date().getFullYear()} Company Name — All Rights Reserved</div>
        <div className="flex justify-center gap-4 text-sm">
          <div>Privacy</div>
          <div>Terms</div>
          <div>Contact</div>
        </div>
      </div>
    </footer>
  );
}
