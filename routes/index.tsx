import { define } from "../utils.ts";

export default define.page(function Home() {
  return (
    <>
      {/* Floating Nieve animations */}
      <style>
        {`
          @keyframes float1 {
            0% { transform: translateX(0px) translateY(0px) rotate(0deg); }
            25% { transform: translateX(50px) translateY(-30px) rotate(8deg); }
            50% { transform: translateX(80px) translateY(-50px) rotate(-5deg); }
            75% { transform: translateX(40px) translateY(-25px) rotate(6deg); }
            100% { transform: translateX(0px) translateY(0px) rotate(0deg); }
          }

          @keyframes float2 {
            0% { transform: translateX(0px) translateY(0px) rotate(-3deg); }
            33% { transform: translateX(60px) translateY(-40px) rotate(10deg); }
            66% { transform: translateX(90px) translateY(-60px) rotate(-8deg); }
            100% { transform: translateX(0px) translateY(0px) rotate(-3deg); }
          }

          @keyframes float3 {
            0% { transform: translateX(0px) translateY(0px) rotate(5deg); }
            50% { transform: translateX(100px) translateY(-70px) rotate(-12deg); }
            100% { transform: translateX(0px) translateY(0px) rotate(5deg); }
          }

          @keyframes float1Reverse {
            0% { transform: translateX(0px) translateY(0px) rotate(0deg); }
            25% { transform: translateX(-50px) translateY(-30px) rotate(-8deg); }
            50% { transform: translateX(-80px) translateY(-50px) rotate(5deg); }
            75% { transform: translateX(-40px) translateY(-25px) rotate(-6deg); }
            100% { transform: translateX(0px) translateY(0px) rotate(0deg); }
          }

          @keyframes float2Reverse {
            0% { transform: translateX(0px) translateY(0px) rotate(3deg); }
            33% { transform: translateX(-60px) translateY(-40px) rotate(-10deg); }
            66% { transform: translateX(-90px) translateY(-60px) rotate(8deg); }
            100% { transform: translateX(0px) translateY(0px) rotate(3deg); }
          }

          @keyframes float3Reverse {
            0% { transform: translateX(0px) translateY(0px) rotate(-5deg); }
            50% { transform: translateX(-100px) translateY(-70px) rotate(12deg); }
            100% { transform: translateX(0px) translateY(0px) rotate(-5deg); }
          }

          .floating-nieve {
            position: fixed;
            pointer-events: none;
            z-index: 0;
            opacity: 0.8;
          }

          .floating-nieve:nth-child(2) {
            top: 10%;
            left: 5%;
            animation: float1 10s ease-in-out infinite;
            animation-delay: 0s;
          }

          .floating-nieve:nth-child(3) {
            top: 35%;
            left: 8%;
            animation: float2Reverse 9s ease-in-out infinite;
            animation-delay: 1s;
          }

          .floating-nieve:nth-child(4) {
            top: 75%;
            right: 5%;
            animation: float2Reverse 10s ease-in-out infinite;
            animation-delay: 1s;
          }

          .floating-nieve:nth-child(5) {
            top: 45%;
            right: 10%;
            animation: float3 9s ease-in-out infinite;
            animation-delay: 2s;
          }

          .floating-nieve:nth-child(6) {
            top: 60%;
            left: 12%;
            animation: float1Reverse 8s ease-in-out infinite;
            animation-delay: 3s;
          }

          .floating-nieve:nth-child(7) {
            top: 8%;
            right: 5%;
            animation: float2 9s ease-in-out infinite;
            animation-delay: 0.5s;
          }

          .floating-nieve:nth-child(8) {
            top: 85%;
            left: 12%;
            animation: float3Reverse 7s ease-in-out infinite;
            animation-delay: 1.5s;
          }

          .floating-nieve:nth-child(9) {
            top: 25%;
            left: 3%;
            animation: float1 8s ease-in-out infinite;
            animation-delay: 2.5s;
          }

          .floating-nieve:nth-child(10) {
            top: 50%;
            right: 3%;
            animation: float2Reverse 8s ease-in-out infinite;
            animation-delay: 4s;
          }

          .floating-nieve:nth-child(11) {
            top: 40%;
            left: 2%;
            animation: float3 7s ease-in-out infinite;
            animation-delay: 0.8s;
          }
        `}
      </style>

      {/* Floating Nieve elements */}
      <div className="floating-nieve">
        <img src="/nieve1.png" alt="Nieve" className="w-36 h-36 rounded-full border-4 border-amber-600 object-cover" />
      </div>
      <div className="floating-nieve">
        <img src="/nieve2.png" alt="Nieve" className="w-32 h-32 rounded-full border-4 border-amber-600 object-cover" />
      </div>
      <div className="floating-nieve">
        <img src="/nieve3.png" alt="Nieve" className="w-48 h-48 rounded-full border-4 border-amber-600 object-cover" />
      </div>
      <div className="floating-nieve">
        <img src="/nieve4.png" alt="Nieve" className="w-36 h-36 rounded-full border-4 border-amber-600 object-cover" />
      </div>
      <div className="floating-nieve">
        <img src="/nieve5.png" alt="Nieve" className="w-32 h-32 rounded-full border-4 border-amber-600 object-cover" />
      </div>
      <div className="floating-nieve">
        <img src="/nieve6.png" alt="Nieve" className="w-48 h-48 rounded-full border-4 border-amber-600 object-cover" />
      </div>
      <div className="floating-nieve">
        <img src="/nieve7.png" alt="Nieve" className="w-44 h-44 rounded-full border-4 border-amber-600 object-cover" />
      </div>
      <div className="floating-nieve">
        <img src="/nieve8.png" alt="Nieve" className="w-32 h-32 rounded-full border-4 border-amber-600 object-cover" />
      </div>
      <div className="floating-nieve">
        <img src="/nieve9.png" alt="Nieve" className="w-32 h-32 rounded-full border-4 border-amber-600 object-cover" />
      </div>
      <div className="floating-nieve">
        <img
          src="/nieve10.png"
          alt="Nieve"
          className="w-36 h-36 rounded-full border-4 border-amber-600 object-cover"
        />
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
