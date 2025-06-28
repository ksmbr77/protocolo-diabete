import Script from "next/script"

export default function VSLPage() {
  return (
    <>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
      var s=document.createElement("script"); 
      s.src="https://scripts.converteai.net/7e36cdf6-8f2d-4adf-9c73-eb7c42755be9/players/685f7df11360073ec94270cb/v4/player.js"; 
      s.async=!0;
      document.head.appendChild(s);
    `,
        }}
      />

      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-3 md:px-4 py-4 md:py-8 max-w-4xl">
          {/* Main Headline */}
          <div className="text-center mb-8">
            <h1
              className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-4 md:mb-6 px-2"
              style={{ color: "#111" }}
            >
              El secreto para controlar tu azúcar de noche — que las grandes farmacéuticas preferirían mantener{" "}
              <span style={{ color: "#E63946" }}>oculto</span>.
            </h1>

            <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 leading-relaxed px-2" style={{ color: "#555" }}>
              Un simple hábito casero que ayuda a tu hígado a liberar menos azúcar mientras duermes —{" "}
              <span style={{ color: "#3B82F6" }}>sin pastillas</span> ni efectos secundarios.
            </p>
          </div>

          {/* Video Section */}
          <div className="flex justify-center mb-8 md:mb-12 px-2">
            <div className="w-full max-w-3xl">
              <div className="relative bg-black rounded-lg overflow-hidden shadow-xl md:shadow-2xl">
                <div className="aspect-video">
                  <vturb-smartplayer
                    id="vid-685f7df11360073ec94270cb"
                    style={{
                      display: "block",
                      margin: "0 auto",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Additional Content */}
          <div className="text-center space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12 px-2">
              <div className="text-center p-4 md:p-6 bg-blue-50 rounded-lg border border-blue-100">
                <div className="text-2xl md:text-3xl mb-2 md:mb-3">🎓</div>
                <h3 className="font-semibold text-blue-800 mb-1 md:mb-2 text-sm md:text-base">Harvard Medical</h3>
                <p className="text-blue-600 text-xs md:text-sm">Estudios confirman la efectividad del método</p>
              </div>

              <div className="text-center p-4 md:p-6 bg-blue-50 rounded-lg border border-blue-100">
                <div className="text-2xl md:text-3xl mb-2 md:mb-3">🏥</div>
                <h3 className="font-semibold text-blue-800 mb-1 md:mb-2 text-sm md:text-base">Mayo Clinic</h3>
                <p className="text-blue-600 text-xs md:text-sm">Investigación respalda los resultados</p>
              </div>

              <div className="text-center p-4 md:p-6 bg-blue-50 rounded-lg border border-blue-100">
                <div className="text-2xl md:text-3xl mb-2 md:mb-3">🔬</div>
                <h3 className="font-semibold text-blue-800 mb-1 md:mb-2 text-sm md:text-base">Stanford University</h3>
                <p className="text-blue-600 text-xs md:text-sm">Validación científica del protocolo</p>
              </div>
            </div>

            <div className="mt-8 md:mt-12 flex justify-center px-2">
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 md:p-8 max-w-sm md:max-w-md text-center w-full">
                <div className="text-3xl md:text-4xl mb-3 md:mb-4">🛡️</div>
                <h3 className="text-lg md:text-xl font-bold text-green-800 mb-2">Garantía de 60 Días</h3>
                <p className="text-green-700 text-sm leading-relaxed">
                  Si no ves resultados en los primeros 60 días, te devolvemos el 100% de tu dinero. Sin preguntas.
                </p>
                <div className="mt-3 md:mt-4 text-xs text-green-600 font-medium">
                  ✓ Garantía Total • ✓ Sin Riesgo • ✓ 100% Seguro
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
