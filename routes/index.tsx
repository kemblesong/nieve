import { define } from "../utils.ts";

export default define.page(function Home() {
  return (
    <>
      {/* Floating Nieve animations */}
      <style>
        {`
          @keyframes float1 {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            25% { transform: translateY(-20px) rotate(5deg); }
            50% { transform: translateY(-40px) rotate(0deg); }
            75% { transform: translateY(-20px) rotate(-5deg); }
          }
          
          @keyframes float2 {
            0%, 100% { transform: translateY(-10px) rotate(-2deg); }
            25% { transform: translateY(-30px) rotate(3deg); }
            50% { transform: translateY(-50px) rotate(-2deg); }
            75% { transform: translateY(-30px) rotate(-7deg); }
          }
          
          @keyframes float3 {
            0%, 100% { transform: translateY(-5px) rotate(3deg); }
            33% { transform: translateY(-35px) rotate(-3deg); }
            66% { transform: translateY(-25px) rotate(5deg); }
          }
          
          @keyframes drift {
            0% { transform: translateX(0px); }
            50% { transform: translateX(30px); }
            100% { transform: translateX(0px); }
          }
          
          .floating-nieve {
            position: fixed;
            pointer-events: none;
            z-index: 0;
            opacity: 0.5;
            filter: blur(0.5px);
          }
          
          .floating-nieve:nth-child(1) {
            top: 20%;
            left: 10%;
            animation: float1 4s ease-in-out infinite, drift 8s ease-in-out infinite;
            animation-delay: 0s;
          }
          
          .floating-nieve:nth-child(2) {
            top: 15%;
            left: 5%;
            animation: float1 4s ease-in-out infinite, drift 8s ease-in-out infinite;
            animation-delay: 0s;
          }
          
          .floating-nieve:nth-child(3) {
            top: 75%;
            right: 8%;
            animation: float2 5s ease-in-out infinite, drift 10s ease-in-out infinite reverse;
            animation-delay: 1s;
          }
          
          .floating-nieve:nth-child(4) {
            top: 45%;
            left: 85%;
            animation: float3 6s ease-in-out infinite, drift 12s ease-in-out infinite;
            animation-delay: 2s;
          }
          
          .floating-nieve:nth-child(5) {
            top: 85%;
            left: 15%;
            animation: float1 7s ease-in-out infinite, drift 9s ease-in-out infinite reverse;
            animation-delay: 3s;
          }
          
          .floating-nieve:nth-child(6) {
            top: 8%;
            right: 25%;
            animation: float2 4.5s ease-in-out infinite, drift 11s ease-in-out infinite;
            animation-delay: 0.5s;
          }
          
          .floating-nieve:nth-child(7) {
            top: 30%;
            left: 2%;
            animation: float3 5.5s ease-in-out infinite, drift 7s ease-in-out infinite reverse;
            animation-delay: 1.5s;
          }
          
          .floating-nieve:nth-child(8) {
            top: 78%;
            right: 60%;
            animation: float1 6.5s ease-in-out infinite, drift 13s ease-in-out infinite;
            animation-delay: 2.5s;
          }
          
          .floating-nieve:nth-child(9) {
            top: 12%;
            left: 75%;
            animation: float2 3.5s ease-in-out infinite, drift 9.5s ease-in-out infinite reverse;
            animation-delay: 4s;
          }
          
          .floating-nieve:nth-child(10) {
            top: 88%;
            right: 12%;
            animation: float3 4.8s ease-in-out infinite, drift 10.5s ease-in-out infinite;
            animation-delay: 0.8s;
          }
        `}
      </style>

      {/* Floating Nieve elements */}
      <div className="floating-nieve">
        <div className="w-16 h-16 bg-amber-400 rounded-full border-4 border-amber-600 shadow-lg flex items-center justify-center text-2xl">
          🐕
        </div>
      </div>
      <div className="floating-nieve">
        <div className="w-12 h-12 bg-amber-400 rounded-full border-3 border-amber-600 shadow-lg flex items-center justify-center text-lg">
          🐕
        </div>
      </div>
      <div className="floating-nieve">
        <div className="w-20 h-20 bg-amber-400 rounded-full border-4 border-amber-600 shadow-lg flex items-center justify-center text-3xl">
          🐕
        </div>
      </div>
      <div className="floating-nieve">
        <div className="w-14 h-14 bg-amber-400 rounded-full border-3 border-amber-600 shadow-lg flex items-center justify-center text-xl">
          🐕
        </div>
      </div>
      <div className="floating-nieve">
        <div className="w-18 h-18 bg-amber-400 rounded-full border-4 border-amber-600 shadow-lg flex items-center justify-center text-2xl">
          🐕
        </div>
      </div>
      <div className="floating-nieve">
        <div className="w-10 h-10 bg-amber-400 rounded-full border-2 border-amber-600 shadow-lg flex items-center justify-center text-sm">
          🐕
        </div>
      </div>
      <div className="floating-nieve">
        <div className="w-24 h-24 bg-amber-400 rounded-full border-4 border-amber-600 shadow-lg flex items-center justify-center text-4xl">
          🐕
        </div>
      </div>
      <div className="floating-nieve">
        <div className="w-8 h-8 bg-amber-400 rounded-full border-2 border-amber-600 shadow-lg flex items-center justify-center text-xs">
          🐕
        </div>
      </div>
      <div className="floating-nieve">
        <div className="w-16 h-16 bg-amber-400 rounded-full border-3 border-amber-600 shadow-lg flex items-center justify-center text-xl">
          🐕
        </div>
      </div>

      <div
        class="min-h-screen bg-gradient-to-br from-orange-300 via-yellow-200 to-orange-400 relative"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, transparent 50%, rgba(255, 255, 255, 0.05) 100%)
          `,
          backgroundSize: "60px 60px, 40px 40px, 100% 100%",
          backgroundPosition: "0 0, 30px 30px, 0 0",
        }}
      >
        {/* Subtle decorative border */}
        <div
          class="border-t-4 border-orange-500"
          style={{
            background:
              "linear-gradient(90deg, #f97316 0%, #fb923c 50%, #f97316 100%)",
            height: "4px",
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
                      type="button"
                      class="bg-orange-400 hover:bg-orange-300 text-black font-black px-6 py-4 rounded-xl border-4 border-black shadow-lg transform hover:scale-105 transition-all"
                      style={{ fontFamily: "'Fredoka One', cursive" }}
                    >
                      🦴 BONE FUND $5
                    </button>
                    <button
                      type="button"
                      class="bg-blue-400 hover:bg-blue-300 text-black font-black px-6 py-4 rounded-xl border-4 border-black shadow-lg transform hover:scale-105 transition-all"
                      style={{ fontFamily: "'Fredoka One', cursive" }}
                    >
                      🧸 TOY FUND $10
                    </button>
                    <button
                      type="button"
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

        {/* Bottom decorative border */}
        <div
          class="border-b-4 border-orange-500"
          style={{
            background:
              "linear-gradient(90deg, #f97316 0%, #fb923c 50%, #f97316 100%)",
            height: "4px",
          }}
        >
        </div>
      </div>
    </>
  );
});
