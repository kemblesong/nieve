import { define } from "../utils.ts";

export default define.page(function Home() {
  return (
    <div
      class="min-h-screen bg-gradient-to-b from-orange-400 via-yellow-300 to-orange-500"
      style={{
        backgroundImage: `
          linear-gradient(45deg, rgba(239, 68, 68, 0.1) 25%, transparent 25%),
          linear-gradient(-45deg, rgba(239, 68, 68, 0.1) 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, rgba(239, 68, 68, 0.1) 75%),
          linear-gradient(-45deg, transparent 75%, rgba(239, 68, 68, 0.1) 75%)
        `,
        backgroundSize: "20px 20px",
        backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
      }}
    >
      {/* Brick-style border */}
      <div
        class="border-t-8 border-red-600"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, #dc2626 0px, #dc2626 20px, #991b1b 20px, #991b1b 25px)",
          height: "8px",
        }}
      >
      </div>

      <div class="max-w-6xl mx-auto px-6 py-8">
        {/* Street sign style header */}
        <header class="text-center mb-12 relative">
          <div class="relative inline-block">
            {/* Street sign background */}
            <div
              class="absolute inset-0 bg-green-600 transform rotate-1 rounded-lg shadow-lg"
              style={{ marginTop: "4px", marginLeft: "4px" }}
            >
            </div>
            <div class="relative bg-green-500 px-8 py-6 rounded-lg border-4 border-black shadow-xl transform -rotate-1">
              <h1
                class="text-6xl md:text-7xl font-black text-yellow-300 mb-2 transform rotate-1"
                style={{
                  fontFamily: "'Fredoka One', cursive",
                  textShadow:
                    "4px 4px 0px #000, -2px -2px 0px #000, 2px -2px 0px #000, -2px 2px 0px #000",
                }}
              >
                nieve.dog
              </h1>
              <div class="bg-yellow-300 px-4 py-2 rounded transform -rotate-1 inline-block border-2 border-black">
                <p
                  class="text-lg text-black font-bold"
                  style={{ fontFamily: "'Fredoka One', cursive" }}
                >
                  LIVE FROM THE NEIGHBORHOOD!
                </p>
              </div>
            </div>
          </div>
        </header>

        <main class="space-y-8">
          {/* Livestream Section - TV/Monitor style */}
          <div class="relative">
            <div class="absolute inset-0 bg-purple-700 transform rotate-1 rounded-xl">
            </div>
            <div class="relative bg-purple-600 rounded-xl border-4 border-black shadow-2xl overflow-hidden transform -rotate-1">
              <div class="bg-gray-900 p-4">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-4 h-4 bg-red-400 rounded-full border-2 border-black">
                  </div>
                  <div class="w-4 h-4 bg-yellow-400 rounded-full border-2 border-black">
                  </div>
                  <div class="w-4 h-4 bg-green-400 rounded-full border-2 border-black">
                  </div>
                  <span
                    class="text-green-400 font-bold ml-4"
                    style={{ fontFamily: "'Fredoka One', cursive" }}
                  >
                    NIEVE CAM v2.0
                  </span>
                </div>
                <div class="relative pb-[56.25%] h-0 overflow-hidden bg-black rounded border-2 border-gray-600">
                  <div class="absolute inset-0 flex items-center justify-center">
                    <div class="text-center">
                      <div class="text-6xl mb-4">📺</div>
                      <p
                        class="text-green-400 text-xl font-bold"
                        style={{ fontFamily: "'Fredoka One', cursive" }}
                      >
                        STREAM STARTING SOON...
                      </p>
                      <p
                        class="text-gray-400 mt-2"
                        style={{ fontFamily: "'Comic Neue', cursive" }}
                      >
                        Nieve's getting ready for the show!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tip Jar Section - Graffiti Wall style */}
          <div class="relative">
            <div class="absolute inset-0 bg-red-700 transform -rotate-1 rounded-2xl">
            </div>
            <div
              class="relative bg-red-600 rounded-2xl border-4 border-black shadow-2xl p-8 transform rotate-1"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 20% 20%, rgba(0,0,0,0.1) 1px, transparent 1px),
                  radial-gradient(circle at 80% 80%, rgba(0,0,0,0.1) 1px, transparent 1px)
                `,
                backgroundSize: "50px 50px",
              }}
            >
              <div class="text-center">
                <h2
                  class="text-5xl font-black mb-4 text-yellow-300 transform -rotate-1"
                  style={{
                    fontFamily: "'Fredoka One', cursive",
                    textShadow:
                      "3px 3px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000",
                  }}
                >
                  TREAT FUND!
                </h2>
                <div class="bg-yellow-300 px-6 py-3 rounded-lg border-3 border-black inline-block mb-6 transform rotate-1">
                  <p
                    class="text-black font-bold text-lg"
                    style={{ fontFamily: "'Fredoka One', cursive" }}
                  >
                    Keep the good boy happy! 🐕
                  </p>
                </div>
                <div class="flex flex-wrap justify-center gap-6">
                  <button
                    class="bg-orange-400 hover:bg-orange-300 text-black font-black px-6 py-4 rounded-xl border-4 border-black shadow-lg transform hover:scale-105 transition-all"
                    style={{ fontFamily: "'Fredoka One', cursive" }}
                  >
                    🦴 BONE FUND $5
                  </button>
                  <button
                    class="bg-blue-400 hover:bg-blue-300 text-black font-black px-6 py-4 rounded-xl border-4 border-black shadow-lg transform hover:scale-105 transition-all"
                    style={{ fontFamily: "'Fredoka One', cursive" }}
                  >
                    🧸 TOY FUND $10
                  </button>
                  <button
                    class="bg-green-400 hover:bg-green-300 text-black font-black px-6 py-4 rounded-xl border-4 border-black shadow-lg transform hover:scale-105 transition-all"
                    style={{ fontFamily: "'Fredoka One', cursive" }}
                  >
                    🏠 DELUXE PACKAGE $25
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links - Apartment Building style */}
          <div class="relative">
            <div class="absolute inset-0 bg-blue-700 transform rotate-1 rounded-2xl">
            </div>
            <div class="relative bg-blue-600 rounded-2xl border-4 border-black shadow-2xl p-8 transform -rotate-1">
              <h2
                class="text-4xl font-black mb-6 text-center text-yellow-300 transform rotate-1"
                style={{
                  fontFamily: "'Fredoka One', cursive",
                  textShadow:
                    "3px 3px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000",
                }}
              >
                NIEVE'S NEIGHBORHOOD
              </h2>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                <a
                  href="#"
                  class="bg-pink-400 hover:bg-pink-300 p-6 rounded-xl border-4 border-black shadow-lg transform hover:scale-105 transition-all text-center"
                >
                  <div class="text-4xl mb-2">📸</div>
                  <span
                    class="text-black font-bold"
                    style={{ fontFamily: "'Fredoka One', cursive" }}
                  >
                    INSTA
                  </span>
                </a>
                <a
                  href="#"
                  class="bg-cyan-400 hover:bg-cyan-300 p-6 rounded-xl border-4 border-black shadow-lg transform hover:scale-105 transition-all text-center"
                >
                  <div class="text-4xl mb-2">🐦</div>
                  <span
                    class="text-black font-bold"
                    style={{ fontFamily: "'Fredoka One', cursive" }}
                  >
                    TWITTER
                  </span>
                </a>
                <a
                  href="#"
                  class="bg-red-400 hover:bg-red-300 p-6 rounded-xl border-4 border-black shadow-lg transform hover:scale-105 transition-all text-center"
                >
                  <div class="text-4xl mb-2">📺</div>
                  <span
                    class="text-black font-bold"
                    style={{ fontFamily: "'Fredoka One', cursive" }}
                  >
                    YOUTUBE
                  </span>
                </a>
                <a
                  href="#"
                  class="bg-purple-400 hover:bg-purple-300 p-6 rounded-xl border-4 border-black shadow-lg transform hover:scale-105 transition-all text-center"
                >
                  <div class="text-4xl mb-2">🎵</div>
                  <span
                    class="text-black font-bold"
                    style={{ fontFamily: "'Fredoka One', cursive" }}
                  >
                    TIKTOK
                  </span>
                </a>
              </div>
            </div>
          </div>
        </main>

        <footer class="mt-12 text-center">
          <div class="bg-gray-800 rounded-xl border-4 border-black p-6 transform rotate-1">
            <p
              class="text-yellow-300 font-bold text-lg"
              style={{ fontFamily: "'Fredoka One', cursive" }}
            >
              © 2025 nieve.dog
            </p>
            <p
              class="text-orange-300 mt-2"
              style={{ fontFamily: "'Comic Neue', cursive" }}
            >
              Made with ❤️ for the goodest boy
            </p>
          </div>
        </footer>
      </div>

      {/* Bottom brick border */}
      <div
        class="border-b-8 border-red-600"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, #dc2626 0px, #dc2626 20px, #991b1b 20px, #991b1b 25px)",
          height: "8px",
        }}
      >
      </div>
    </div>
  );
});
