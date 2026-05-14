import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ShoppingCart } from "lucide-react";

const notificationsData = [
  { name: "Mariana S.", city: "São Paulo, SP", time: "há 2 minutos" },
  { name: "Juliana R.", city: "Curitiba, PR", time: "há 5 minutos" },
  { name: "Beatriz L.", city: "Rio de Janeiro, RJ", time: "há 12 minutos" },
  { name: "Fernanda M.", city: "Belo Horizonte, MG", time: "há 8 minutos" },
  { name: "Carla P.", city: "Salvador, BA", time: "há 15 minutos" },
  { name: "Amanda K.", city: "Porto Alegre, RS", time: "há 3 minutos" },
  { name: "Regina V.", city: "Fortaleza, CE", time: "há 20 minutos" },
  { name: "Patrícia G.", city: "Recife, PE", time: "há 7 minutos" },
  { name: "Letícia B.", city: "Goiânia, GO", time: "há 10 minutos" },
  { name: "Cláudia O.", city: "Manaus, AM", time: "há 4 minutos" },
];

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentNotification, setCurrentNotification] = useState<number | null>(null);

  useEffect(() => {
    const showRandomNotification = () => {
      const randomIndex = Math.floor(Math.random() * notificationsData.length);
      setCurrentNotification(randomIndex);
      
      // Hide after 6 seconds
      setTimeout(() => {
        setCurrentNotification(null);
      }, 6000);
    };

    // Initial delay: 2 seconds after page load
    const initialTimer = setTimeout(showRandomNotification, 2000);

    // Interval for subsequent notifications: Every 12 seconds
    const interval = setInterval(showRandomNotification, 12000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  const toggleFaq = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();
    e.stopPropagation();
    const search = window.location.search;
    
    // If it's an internal hash link on the same page, we scroll.
    // If the user wants to force window.location.href, they might want to reload or change page.
    // Given the context of "tracking parameters for the next page", 
    // internal anchors should probably just scroll while external/page links redirect.
    if (url.startsWith('#')) {
      const targetId = url.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    const separator = url.includes('?') ? '&' : '?';
    const cleanSearch = search.startsWith('?') ? search.substring(1) : search;
    const finalUrl = cleanSearch ? `${url}${separator}${cleanSearch}` : url;
    
    window.location.href = finalUrl;
  };

  const faqData = [
    {
      q: "Preciso ter experiência com rituais ou espiritualidade?",
      a: "Não. O guia foi criado para quem está começando do zero. Tudo é explicado em linguagem simples, sem termos complicados. Se você nunca fez um banho energético, você está no lugar certo."
    },
    {
      q: "As ervas são fáceis de encontrar?",
      a: "Sim. Todas as ervas usadas nas receitas são comuns e encontradas em mercados, feiras livres, lojas de produtos naturais ou farmácias de manipulação. Nenhum ingrediente raro ou caro."
    },
    {
      q: "Como vou receber o material após a compra?",
      a: "Imediatamente! Após a confirmação do pagamento, você recebe o acesso por e-mail. É 100% digital - você acessa pelo celular, tablet ou computador, quando e onde quiser."
    },
    {
      q: "O bônus da Comunidade VIP realmente é vitalício?",
      a: "Sim, quem comprar hoje garante o acesso vitalício sem nenhum custo adicional. Esse bônus é válido somente para as compras realizadas hoje - depois, ele pode ser removido ou virar um produto separado."
    },
    {
      q: "E se eu não gostar ou não funcionar para mim?",
      a: "Você tem 7 dias após a compra para solicitar o reembolso. Basta enviar uma mensagem e devolvemos todo o valor pago, sem perguntas e sem burocracia."
    }
  ];

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <span className="hero-badge">Rituais ancestrais com ervas</span>
          <h1>
            Liberte-se do peso
            <br />
            <em>que te cansa por dentro</em>
          </h1>
          <p className="hero-subtitle">com Banhos de Luz</p>
          <p className="hero-desc">
            Rituais ancestrais com ervas para limpar, proteger e renovar sua energia - do jeito certo, passo a passo.
          </p>

          <img
            src="https://i.ibb.co/MkJRp7qP/Chat-GPT-Image-12-de-mai-de-2026-10-44-12.png"
            alt="Essência Banho de Luz"
            className="w-full max-w-sm mx-auto rounded-xl shadow-2xl mb-24 border border-[#C9993A]/20"
            referrerPolicy="no-referrer"
          />

          <div className="pain-points mt-16">
            <div className="pain-item">
              <span className="pain-icon">🌪️</span>
              <span>Sente energias pesadas no dia a dia</span>
            </div>
            <div className="pain-item">
              <span className="pain-icon">😴</span>
              <span>Cansa sem motivo aparente</span>
            </div>
            <div className="pain-item">
              <span className="pain-icon">🌙</span>
              <span>Sono agitado, acorda exausta</span>
            </div>
            <div className="pain-item">
              <span className="pain-icon">✨</span>
              <span>Quer mais clareza e amor-próprio</span>
            </div>
            <div className="pain-item">
              <span className="pain-icon">🌿</span>
              <span>Busca protection e prosperidade</span>
            </div>
          </div>

          <a 
            href="#oferta" 
            className="btn-primary"
            onClick={(e) => handleNavigation(e, "#oferta")}
          >
            Quero minha Coleção Banho de Luz →
          </a>
          <span className="btn-note">📲 Acesso digital imediato após a compra</span>
        </div>
      </section>

      {/* WHY IT WORKS */}
      <section className="why-section">
        <div className="container">
          <p className="section-label">Por que funciona</p>
          <h2 className="section-title">O segredo não é a erva.</h2>

          <blockquote className="why-quote">
            "É a intenção combinada com a receita certa."
          </blockquote>

          <p className="section-intro">
            Qualquer pessoa pode colocar um punhado de ervas numa bacia. O que faz a diferença real é saber qual mistura
            usar, em qual momento, com qual propósito - e repetir o ritual com o estado mental correto. É isso que a
            Coleção Banho de Luz entrega: não só as receitas, mas a compreensão de por que cada elemento age no seu
            campo energético.
          </p>

          <div className="steps">
            <div className="step">
              <div className="step-num">01</div>
              <div>
                <p className="step-title">Identifique o que você precisa</p>
                <p className="step-text">
                  Proteção, limpeza, amor-próprio ou prosperidade? O guia ajuda você a escolher o banho certo para o
                  momento certo da sua vida.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">02</div>
              <div>
                <p className="step-title">Prepare com intenção real</p>
                <p className="step-text">
                  Cada receita vem com o passo a passo explicado de forma simples - incluindo o momento ideal, os
                  ingredientes e a forma de preparo que potencializa o resultado.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">03</div>
              <div>
                <p className="step-title">Sinta a diferença no corpo e na vida</p>
                <p className="step-text">
                  Com a prática regular, seu campo energético se renova, o cansaço sem causa vai diminuindo e você
                  começa a se sentir mais leve, protegida e alinhada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENTS */}
      <section className="contents-section">
        <div className="container">
          <p className="section-label">O que está dentro</p>
          <h2 className="section-title">
            Tudo o que você precisa para
            <br />
            <em>transformar sua energia</em>
          </h2>

          <div className="contents-grid">
            <div className="content-card">
              <span className="card-icon">🌿</span>
              <p className="card-title">Banhos de Proteção</p>
              <p className="card-text">
                Receitas com ervas específicas para criar uma camada de proteção ao redor de você, afastando energias
                densas e influências negativas do seu cotidiano.
              </p>
            </div>
            <div className="content-card">
              <span className="card-icon">💧</span>
              <p className="card-title">Banhos de Limpeza e Renovação</p>
              <p className="card-text">
                Misturas poderosas para dissolver o acúmulo energético do estresse, das discussões e das situações
                pesadas - como um reset completo do seu campo vibracional.
              </p>
            </div>
            <div className="content-card">
              <span className="card-icon">💖</span>
              <p className="card-title">Banhos para Amor-Próprio</p>
              <p className="card-text">
                Rituais delicados focados em fortalecer sua autoestima, equilibrar as emoções e reconectar você com a
                sua própria essência e valor.
              </p>
            </div>
            <div className="content-card">
              <span className="card-icon">✨</span>
              <p className="card-title">Banhos de Prosperidade</p>
              <p className="card-text">
                Combinações de ervas usadas há gerações para abrir caminhos, atrair oportunidades e remover bloqueios
                invisíveis que travam sua vida financeira e pessoal.
              </p>
            </div>
            <div className="content-card">
              <span className="card-icon">📜</span>
              <p className="card-title">Rituais Ancestrais Passo a Passo</p>
              <p className="card-text">
                Cada ritual é explicado with linguagem simples e direta: quando fazer, como preparar, o que dizer e como
                potencializar cada banho com intenção clara.
              </p>
            </div>
            <div className="content-card">
              <span className="card-icon">🌙</span>
              <p className="card-title">Guia de Uso por Momento de Vida</p>
              <p className="card-text">
                Um índice prático que mostra qual banho usar dependendo do que você está vivendo - luto, mudança,
                bloqueio, início de ciclo ou renovação espiritual.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AUTHOR */}
      <section className="author-section">
        <div className="container">
          <p className="section-label">Quem criou este material</p>
          <div className="author-wrap">
            <img 
              src="https://i.ibb.co/MxFTJ4JV/Retrato-de-mulher-com-sorriso-radiante.png" 
              alt="Ana Valentina Lima" 
              className="author-photo object-cover" 
              referrerPolicy="no-referrer"
            />
            <div>
              <p className="author-name-large">Ana Valentina Lima</p>
              <p className="author-title">Terapeuta energética • 12+ anos de experiência</p>
              <p className="author-bio">
                Ana Valentina cresceu aprendendo sobre plantas e rituais com sua família no interior de Minas Gerais.
                Formada em fitoterapia e práticas holísticas, ela dedicou anos a sistematizar o conhecimento ancestral
                que recebeu de forma oral.
                <br />
                <br />
                Depois de ajudar milhares de pessoas presencialmente, decidiu criar a Coleção Banho de Luz para tornar
                esse conhecimento acessível a qualquer pessoa - independente de onde mora ou quanto pode investir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing-section" id="oferta">
        <div className="container">
          <p className="section-label" style={{ color: 'var(--gold-light)' }}>
            Oferta especial de hoje
          </p>
          <h2 className="section-title">
            Tudo isso por muito
            <br />
            <em>menos do que você imagina</em>
          </h2>

          <div className="pricing-card">
            <div className="text-[#E8C47A] text-xs font-bold tracking-widest uppercase mb-4 py-1.5 px-4 border border-[#E8C47A]/40 bg-[#E8C47A]/10 rounded-lg inline-block">
              ⚠️ Restam apenas 14 acessos com este valor
            </div>
            <p className="price-from">De R$ 97,00</p>
            <p className="price-main">
              <sup>R$</sup>27,00
            </p>
            <p className="price-note">pagamento único • acesso imediato e vitalício</p>

            <ul className="pricing-includes">
              <li>Guia completo de Banhos Energéticos</li>
              <li>Banhos de Proteção contra energias negativas</li>
              <li>Banhos de Limpeza e Renovação energética</li>
              <li>Banhos de Amor-Próprio e Equilíbrio emocional</li>
              <li>Banhos de Prosperidade e Abertura de Caminhos</li>
              <li>Rituais ancestrais explicados passo a passo</li>
              <li>Guia de Uso por Momento de Vida</li>
            </ul>

            <a 
              href="https://pay.hotmart.com/S105796273C" 
              className="btn-pricing"
              onClick={(e) => handleNavigation(e, "https://pay.hotmart.com/S105796273C")}
            >
              ✦ Quero minha Coleção Agora por R$ 27,00 ✦
            </a>

            <div className="trust-badges">
              <span className="trust-badge">🔒 Pagamento 100% seguro</span>
              <span className="trust-badge">📲 Acesso imediato</span>
              <span className="trust-badge">✅ 7 dias de garantia</span>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section">
        <div className="container">
          <p className="section-label">O que dizem quem já usou</p>
          <h2 className="section-title">
            Pessoas reais,
            <br />
            <em>transformações reais</em>
          </h2>

          <div className="testimonials-grid">
            <div className="testimonial">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">
                "Eu vivia esgotada, achava que era só trabalho. Mas depois de aprender a blindar minha energia com os
                banhos de proteção da Ana, sinto que as pessoas negativas não me 'sugam' mais. É libertador."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">SM</div>
                <div>
                  <p className="author-name">Sofia M.</p>
                  <p className="author-city">Porto Alegre, RS</p>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">
                "O guia da Ana é direto ao ponto. Fiz o banho de abertura de caminhos e em menos de uma semana uma
                oportunidade travada há meses desenrolou. Energia é tudo quando se sabe usar!"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">AT</div>
                <div>
                  <p className="author-name">Amanda T.</p>
                  <p className="author-city">Florianópolis, SC</p>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">
                "Sempre tive dificuldade em me priorizar. Os rituais de amor-próprio me ajudaram a reconectar com meu
                centro. Hoje acordo com muito mais disposição e amor pela vida. Vale cada centavo."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">RP</div>
                <div>
                  <p className="author-name">Raquel P.</p>
                  <p className="author-city">Brasília, DF</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="container">
          <p className="section-label">Dúvidas frequentes</p>
          <h2 className="section-title">
            Perguntas que
            <br />
            <em>você pode ter</em>
          </h2>

          <div className="faq-list">
            {faqData.map((item, index) => (
              <div key={index} className="faq-item">
                <div
                  className="faq-q w-full text-left flex justify-between items-center cursor-pointer appearance-none bg-transparent border-none p-0"
                  onClick={(e) => toggleFaq(e, index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleFaq(e as any, index);
                    }
                  }}
                  aria-expanded={openFaq === index}
                >
                  <span className="font-medium pr-8">{item.q}</span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-[#C9993A]" />
                  </motion.div>
                </div>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="faq-a pt-2 pb-1 text-[#4A5E50] font-light leading-relaxed">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="container">
          <div className="divider"></div>
          <h2 className="section-title">
            Você merece se sentir
            <br />
            <em>leve, protegida e plena.</em>
          </h2>
          <p>
            Milhares de pessoas já escolheram cuidar da própria energia. Agora é a sua vez - e custa menos do que um
            jantar fora.
          </p>
          <a 
            href="#oferta" 
            className="btn-primary"
            onClick={(e) => handleNavigation(e, "#oferta")}
          >
            ✦ Começar minha jornada de Luz agora ✦
          </a>
          <p className="final-sub">Por apenas R$ 27,00 • Acesso imediato • 7 dias de garantia</p>
          <div className="divider" style={{ marginTop: '40px' }}></div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Coleção Banho de Luz - Todos os direitos reservados.</p>
        <p style={{ marginTop: '8px', maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto', opacity: 0.7 }}>
          Os resultados podem variar de pessoa para pessoa. Este produto não substitui tratamentos médicos, psicológicos
          ou psiquiátricos.
        </p>
        <p style={{ marginTop: '12px' }}>
          <a href="#" onClick={(e) => handleNavigation(e, "#")}>Política de Privacidade</a> &nbsp;|&nbsp;
          <a href="#" onClick={(e) => handleNavigation(e, "#")}>Termos de Uso</a> &nbsp;|&nbsp;
          <a href="#" onClick={(e) => handleNavigation(e, "#")}>Contato</a>
        </p>
      </footer>

      {/* PURCHASE NOTIFICATION */}
      <AnimatePresence>
        {currentNotification !== null && (
          <motion.div
            initial={{ opacity: 0, x: -50, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -50, y: 20 }}
            className="fixed bottom-6 left-6 z-[9999] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.15)] rounded-2xl p-5 border border-[#C9993A]/20 flex items-center gap-4 max-w-[340px] pointer-events-none"
          >
            <div className="w-12 h-12 bg-[#2D4A35] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
              <ShoppingCart className="w-6 h-6 text-[#E8C47A]" />
            </div>
            <div>
              <p className="text-[13px] font-bold text-[#1A2E20] leading-tight">
                {notificationsData[currentNotification].name} de {notificationsData[currentNotification].city}
              </p>
              <p className="text-[11px] text-[#4A5E50] opacity-80 mt-1 leading-snug">
                Acabou de adquirir a Coleção Banho de Luz {notificationsData[currentNotification].time}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

