import { define } from "../utils.ts";

export default define.page(function Home() {
  return (
    <div class="min-h-screen p-6">
      <header class="max-w-4xl mx-auto text-center mb-8">
        <h1
          class="text-7xl md:text-8xl font-bold text-purple-600 mb-4"
          style={{ fontFamily: "'Bubblegum Sans', cursive" }}
        >
          nieve.dog
        </h1>
        <p
          class="text-xl text-gray-700"
          style={{ fontFamily: "'Bubblegum Sans', cursive" }}
        >
          Watch Nieve's adventures live!
        </p>
      </header>

      <main class="max-w-4xl mx-auto">
        {/* Livestream Section */}
        <div class="bg-white rounded-xl shadow-xl p-4 mb-8">
          <div class="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-inner bg-gray-100">
            {/* Replace with actual embed code when available */}
            <div class="absolute inset-0 flex items-center justify-center">
              <p class="text-gray-500 text-lg">
                Livestream placeholder - Replace with your embed code
              </p>
            </div>
          </div>
        </div>

        {/* Tip Jar Section */}
        <div class="bg-white rounded-xl shadow-xl p-6 mb-8 text-center">
          <h2
            class="text-3xl font-bold mb-4 text-orange-500"
            style={{ fontFamily: "'Bubblegum Sans', cursive" }}
          >
            Treat Jar
          </h2>
          <p class="mb-4">
            Help keep Nieve's tail wagging with treats and toys!
          </p>
          <div class="flex justify-center gap-4">
            <button class="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-3 rounded-full font-bold transition">
              🦴 Send a Treat ($5)
            </button>
            <button class="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full font-bold transition">
              🧸 Send a Toy ($10)
            </button>
          </div>
        </div>

        {/* Social Links */}
        <div class="bg-white rounded-xl shadow-xl p-6 text-center">
          <h2
            class="text-3xl font-bold mb-4 text-blue-500"
            style={{ fontFamily: "'Bubblegum Sans', cursive" }}
          >
            Follow Nieve's Adventures
          </h2>
          <div class="flex justify-center gap-6 text-3xl">
            <a href="#" class="text-pink-500 hover:text-pink-600 transition">
              <span role="img" aria-label="Instagram">📸</span>
            </a>
            <a href="#" class="text-blue-400 hover:text-blue-500 transition">
              <span role="img" aria-label="Twitter">🐦</span>
            </a>
            <a href="#" class="text-red-500 hover:text-red-600 transition">
              <span role="img" aria-label="YouTube">📺</span>
            </a>
            <a href="#" class="text-green-500 hover:text-green-600 transition">
              <span role="img" aria-label="TikTok">🎵</span>
            </a>
          </div>
        </div>
      </main>

      <footer class="max-w-4xl mx-auto mt-12 text-center text-gray-500">
        <p>© 2023 nieve.dog - All Rights Reserved</p>
        <p class="mt-2">Made with ❤️ for the goodest boy</p>
      </footer>
    </div>
  );
});
