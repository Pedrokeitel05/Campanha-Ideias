import { Lightbulb, Award, FileText, ArrowRight } from 'lucide-react';

function App() {
  const smartsheetUrl = 'https://app.smartsheet.com/b/form/819dde3acb2d426b96822c46a4b8c95f';
  const youtubeVideoId = 'SrfrP362L_U';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-emerald-500/10"></div>

      <div className="relative">
        <header className="container mx-auto px-6 sm:px-8 py-6 sm:py-8">
          <div className="flex items-center gap-3">
            <Lightbulb className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400" />
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Campanha de Ideias</h1>
          </div>
        </header>

        <main className="container mx-auto px-6 sm:px-8 py-8 sm:py-12">
          <section className="text-center mb-12 sm:mb-16">
            <div className="inline-block mb-6 sm:mb-8 px-4 sm:px-6 py-2 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-full border border-cyan-400/30">
              <span className="text-sm sm:text-base text-cyan-300 font-semibold">Regional Sul • Grupo GPS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight px-2">
              Transforme suas<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400">
                ideias em realidade
              </span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
              Participe da nossa campanha e ajude a otimizar processos, reduzir custos e melhorar a rotina de trabalho. As melhores ideias serão premiadas!
            </p>

            <a
              href={smartsheetUrl}
              className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-base sm:text-lg rounded-full hover:from-cyan-400 hover:to-blue-500 transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/50"
            >
              Inscrever Minha Ideia
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6 sm:p-8 hover:border-cyan-400/60 transition-all">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-cyan-500/30">
                <Award className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Prêmio Principal</h3>
              <p className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 mb-3 sm:mb-4">
                R$ 2.000
              </p>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Premiação para as melhores ideias das áreas Administrativa e Operacional
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 sm:p-8 hover:border-blue-400/60 transition-all">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-600 to-slate-700 rounded-xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-blue-500/30">
                <Lightbulb className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">O que buscamos</h3>
              <ul className="text-sm sm:text-base text-slate-300 space-y-2.5 sm:space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1 text-lg">•</span>
                  <span className="leading-relaxed">Redução de custos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1 text-lg">•</span>
                  <span className="leading-relaxed">Ganho de tempo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1 text-lg">•</span>
                  <span className="leading-relaxed">Otimização de processos</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-6 sm:p-8 hover:border-emerald-400/60 transition-all">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-emerald-500/30">
                <FileText className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Período</h3>
              <p className="text-sm sm:text-base text-slate-300 mb-3 sm:mb-4 leading-relaxed">
                <span className="text-white font-semibold">Inscrições:</span><br />
                27/10/2025 a 14/11/2025
              </p>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                <span className="text-white font-semibold">Duração:</span><br />
                18 dias
              </p>
            </div>
          </section>

          <section className="mb-12 sm:mb-16">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 sm:p-8 md:p-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">Como funciona?</h3>

              {youtubeVideoId && (
                <div className="flex justify-center mb-6 sm:mb-8">
                  <div className="w-full max-w-md aspect-[9/16] bg-slate-900 rounded-xl overflow-hidden border border-slate-700 shadow-xl">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                      title="Como funciona a Campanha de Ideias"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                <div className="text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-cyan-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 font-bold text-xl sm:text-2xl shadow-lg shadow-cyan-500/30">
                    1
                  </div>
                  <h4 className="text-base sm:text-lg text-white font-semibold mb-2">Inscreva-se</h4>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed">Envie sua ideia pelo formulário SmartSheet</p>
                </div>

                <div className="text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 font-bold text-xl sm:text-2xl shadow-lg shadow-blue-500/30">
                    2
                  </div>
                  <h4 className="text-base sm:text-lg text-white font-semibold mb-2">Avaliação</h4>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed">Comissão analisa todas as propostas</p>
                </div>

                <div className="text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 font-bold text-xl sm:text-2xl shadow-lg shadow-emerald-500/30">
                    3
                  </div>
                  <h4 className="text-base sm:text-lg text-white font-semibold mb-2">Seleção</h4>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed">As melhores ideias são escolhidas</p>
                </div>

                <div className="text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 font-bold text-xl sm:text-2xl shadow-lg shadow-cyan-500/30">
                    4
                  </div>
                  <h4 className="text-base sm:text-lg text-white font-semibold mb-2">Premiação</h4>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed">Reconhecimento e prêmios para os vencedores</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12 sm:mb-16">
            <div className="bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-500/30 rounded-2xl p-6 sm:p-8 md:p-12 text-center">
              <FileText className="w-12 h-12 sm:w-16 sm:h-16 text-cyan-400 mx-auto mb-4 sm:mb-6" />
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Regulamento Completo</h3>
              <p className="text-sm sm:text-base text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
                Confira todos os detalhes sobre elegibilidade, critérios de avaliação, premiação e muito mais.
              </p>
              <a
                href="/REGULAMENTO.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-all border border-slate-600 text-sm sm:text-base"
              >
                <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                Baixar Regulamento (PDF)
              </a>
            </div>
          </section>

          <section className="text-center mb-12 sm:mb-16">
            <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl p-8 sm:p-10 md:p-12 shadow-2xl shadow-cyan-500/30">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 px-2">Pronto para participar?</h3>
              <p className="text-base sm:text-lg text-cyan-100 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
                Não perca essa oportunidade de fazer a diferença e ser reconhecido pelo seu talento e criatividade!
              </p>
              <a
                href={smartsheetUrl}
                className="inline-flex items-center gap-2 sm:gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-white text-blue-700 font-bold text-lg sm:text-xl rounded-full hover:bg-slate-100 transition-all transform hover:scale-105 shadow-xl"
              >
                Enviar Minha Ideia Agora
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </section>
        </main>

        <footer className="container mx-auto px-6 sm:px-8 py-6 sm:py-8 border-t border-slate-800">
          <div className="text-center text-slate-400">
            <p className="text-sm sm:text-base">Campanha de Ideias - Regional Sul • Grupo GPS</p>
            <p className="text-xs sm:text-sm mt-2">Todos os direitos reservados</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
