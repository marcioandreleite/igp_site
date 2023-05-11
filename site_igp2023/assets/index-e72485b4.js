(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const r="/assets/logo1-71391954.png",c="/assets/atendimento1-6e53713e.png",p="/assets/01-29c8112a.png",l="/assets/02-e39bdf1b.png",d="/assets/03-cef69915.png",g="/assets/04-ddfeff0c.png",u="/assets/qrcode-f8f31071.png",m="/assets/logo5-4532d5b8.png",h="/assets/ibhost-25df4e76.png",v="/assets/linushost-d07f4dc0.png",f="/assets/muhonor-3a882380.png",_="/assets/musix-46820213.png",A="/assets/gtavidanova-1e80d9e2.png";(function(){document.addEventListener?document.addEventListener("contextmenu",function(a){return a.preventDefault(),!1}):document.attachEvent("oncontextmenu",function(a){return a=a||window.event,a.returnValue=!1,!1})})();document.querySelector("#root").innerHTML=`

<body>
<section class="igp-head">
  <article>
    <img src="${r}" alt="logo isgamepost" id="home">
    <h1>Organic Marketing Full</h1>
    <p>O Seu Sucesso Online Está Aqui</p>
    <p>Google, Instagram, Facebook, Discord, Telegram...</p>
    <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5521976036608" rel="external" target="_blank"><button
        class="igp-action__btn">Seu Sucesso Agora</button></a>
  </article>
</section>
<main>
  <section class="igp-contact">
    <article>
      <p><a href="http://api.whatsapp.com/send?1=pt_BR&phone=5521976036608" rel="external" target="_blank"><img
            src="${c}" alt="whatsap"></a></p>
    </article>
  </section>
  <section class="igp-talk">
    <header>
      <h2>Nossos Clientes Muito Satisfeitos</h2>
    </header>
    <picture>
      <img src="${g}" alt="">
      <img src="${l}" alt="">
    </picture>
    <picture>
      <img src="${d}" alt="">
      <img src="${p}" alt="">
    </picture>
  </section>
  <section id="planos" class="igp-service">
    <img src="${r}" width="230" alt="logo Isgamepost">
    <h2>Tudo para Sua Divulgação na Internet</h2>
    <div>
      <article class="igp-service__plan">
        <h3>IGP ORGANIC Marketing</h3>
        <p>Divulgações profissionais e direcionadas ao público alvo específico, nas redes sociais</p>
        <p>Nosso alcance é superior a <span class="igp-service__size">25000</span> pessoas</p>
      </article>
      <article class="igp-service__plan igp-service__qrcode img">
        <img src="${u}" alt="code">
        <P>Use o QRcode ou Chave PIX Para o Pagamento dos serviços</P>
        <p>(Chave PIX) isgamepost@isgamepost.com</p>
      </article>
      <article class="igp-service__plan">
        <h3><span>PLANO MASTER - Gerenciamento de Redes Sociais - 3000 divulgações em 30 dias</h3>
        <p>Este plano inclui divulgações em todas as redes sociais</p>
        <p>SEO Básico - seu site em evidência no Google, Facebook e Twitter</p>
        <p>04 (quatro) Imagens para divulgação</p>
        <p>GRÁTIS - Roteiro e Divulgações em nossos perfis, páginas e grupos.</p>
        <p>Valor <span class="igp-service__size">R$ 163,90</span></p>
      </article>
      <article class="igp-service__plan">
        <h3><span>PLANO PREMIUM - 3000 divulgações em 30 dias</h3>
        <p>Este plano inclui divulgações em todas as redes sociais</p>
        <p>01 (Uma) Imagem para divulgação</p>
        <p>GRÁTIS - Roteiro e Divulgações em nossos perfis, páginas e grupos.</p>
        <p>Valor <span class="igp-service__size">R$ 91,47</span></p>
      </article>
      <article class="igp-service__plan">
        <h3><span>PLANO BASIC</span> - 600 divulgações em 15 dias (nos grupos do FACE)</h3>
        <p>01 (Uma) Imagem para divulgação</p>
        <p>Este plano contempla somente divulgações nos grupos do Facebook</p>
        <p>GRÁTIS - Roteiro e Divulgações em nossos perfis, páginas e grupos.</p>
        <p>Valor <span class="igp-service__size">R$ 64,90</span></p>
      </article>
      <article class="igp-service__plan">
        <h3><span>PLANO START</span> - 300 divulgações em 15 dias (nos grupos do FACE)</h3>
        <p>Este plano contempla somente divulgações nos grupos do Facebook</p>
        <p>GRÁTIS - Roteiro e Divulgações em nossos perfis, páginas e grupos.</p>
        <p>Valor <span class="igp-service__size">R$ 13,00</span></p>
      </article>
      <article class="igp-service__plan">
        <h3><span>PLANO ADS GOOGLE</span></h3>
        <p>Por Periodo (sessão)</p>
        <p>Valor <span class="igp-service__size">R$ 100,00</span></p>
      </article>
      <article class="igp-service__plan">
        <h3><span>VIDEO</span></h3>
        <p>Cada 1(Uma)</p>
        <p>Valor <span class="igp-service__size">R$ 150,00</span></p>
      </article>
      <article class="igp-service__plan">
        <h3><span>IMAGEM</span></h3>
        <p>Cada 1(Uma)</p>
        <p>Valor <span class="igp-service__size">R$ 25,00</span></p>
      </article>
    </div>
  </section>

  <section class="igp-who">
    <header id="sobre" class="igo-who__header">
      <img src="${m}" width="230" title="isgamepost.com" alt="isgamepost.com" />
    </header>
    <div>
      <article>
        <h3>A ISGAMEPOST</h3>
        <p>A IGP é uma agência com foco no Marketing de jogos online. Trabalhamos com transparência e proximidade,
          para que juntos possamos encontrar a melhor estratégia para criar oportunidades e aumentar os resultados.
        </p>
      </article>
      <article>
        <h3>DIFERENCIAL DA ISGAMEPOST</h3>
        <p>Com o foco em Marketing de jogos online, as nossas divulgações são orgânicas, o que gera melhores
          resultados, pois nossos divulgadores, são treinados, para também responder dúvidas dos jogadores, quando
          necessário, e assim nosso modelo de negócio garante comodidade, satisfação e economia ao cliente.
          Disponibilizamos diversos canais de atendimento, nos mantemos acessíveis a qualquer dúvida ou necessidade de
          forma rápida e econômica.</p>
      </article>
      <article>
        <h3>POR QUE DIVULGAR COM A ISGAMEPOST?</h3>
        <p>Contratando as divulgações da ISGAMEPOST, você pode dedicar seu tempo para cuidar do seu servidor, tendo a
          certeza de que a sua marca estará sendo colocada em evidência, através das divulgações diárias, feitas no
          público-alvo de acordo com as configurações do seu servidor.</p>
        <p>O atendimento da ISGAMEPOST é completamente pessoal e trabalhamos para entender a suas necessidades e
          propor as melhores soluções sem tirar você do seu foco principal que é o seu Servidor.</p>
        <p>A ISGAMEPOST é uma empresa que Divulga nas principais Redes Sociais, ou seja, Facebook, Instagram,
          Whatsapp, Telegram e Discord.</p>
        <p>Agora, que tal valorizar ao máximo o seu dinheiro? Ainda não estava convencido das vantagens de utilizar os
          serviços da ISGAMEPOST?
          Você definitivamente vai perceber a vantagem que é, valorizar cada centavo do seu investimento. Aqui, na
          ISGAMEPOST otimizamos da forma mais rentável para que com um investimento baixo você consiga grandes
          resultados.</p>
        <p>Por último e longe de ser o fator menos importante, o que há de mais valioso! O conhecimento profundo das
          ferramentas que irão alavancar o seu site;
        <p>A ampla experiência em divulgação, captação e atendimento ao cliente;</p>
        <p>A busca por melhores resultados.</p>
        <p>A ISGAMEPOST é uma empresa que trabalha 100% dentro da ferramenta que vende.</p>
        </p>
      </article>
    </div>
  </section>
  <section class="igp-client">
    <header class="igp-client__header">
      <i class="fas fa-file-signature"></i>
      <h2>Parceiros IsGamePost</h2>
    </header>
    <div>
      <a href="https://ibhost.com.br/" target="_blank" rel="external"><img src="${h}" width="200"
          alt="IB Host" title="IB Host" /></a>
      <a href="https://linushost.com.br/financeiro/aff.php?aff=38" target="_blank" rel="external"><img
          src="${v}" width="200" alt="Linushost" title="LinusHost" /></a>
      <a href="https://mu-honor.com/" target="_blank" rel="external"><img src="${f}" width="200"
          alt="Muhonor" title="MUhonor" /></a>
      <a href="https://muonline6.com/" target="_blank" rel="external"><img src="${_}" width="200" alt="MuSix"
          title="MuSix" /></a>
      <a href=" https://discord.gg/vidanovarp" target="_blank" rel="external"><img src="${A}"
          width="200" alt="GTAcidadeNova" title="GTAcidadeNova" /></a>
    </div>
  </section>
</main>
<section>
  <div>
    <a href="#home" class="igp-link__top">
      <i class="fas fa-arrow-up"></i>
    </a>
  </div>
</section>

<footer class="igp-footer">
  <h2>Todos os Direitos Reservados a isgamepost.com ®</h2>
</footer>

</body>
  `;
