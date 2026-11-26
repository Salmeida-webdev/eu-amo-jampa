    const header = document.querySelector('.site-header');
    const progress = document.querySelector('#progress-bar');
    const navToggle = document.querySelector('#menu-toggle');
    const nav = document.querySelector('#nav-links');
    const motionOK = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const intro = document.querySelector('#cinematic-intro');
    const introSkip = document.querySelector('#intro-skip');

    function finishIntro() {
      if (!intro || intro.dataset.finished === 'true') return;
      intro.dataset.finished = 'true';
      document.body.classList.remove('intro-active');
      if (!motionOK) { intro.remove(); return; }
      intro.classList.add('is-leaving');
      window.setTimeout(() => intro.remove(), 1000);
    }
    if (motionOK && intro) {
      document.body.classList.add('intro-active');
      introSkip.focus({preventScroll:true});
      introSkip.addEventListener('click', finishIntro, {once:true});
      document.addEventListener('keydown', event => { if (event.key === 'Escape') finishIntro(); }, {once:true});
      window.setTimeout(finishIntro, 2450);
    } else {
      intro?.remove();
    }

    function updateScrollUI() {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty('--scroll-progress', String(max > 0 ? Math.min(1, window.scrollY / max) : 0));
      header.classList.toggle('scrolled', window.scrollY > 24);
    }
    window.addEventListener('scroll', updateScrollUI, {passive:true});
    updateScrollUI();

    navToggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
      navToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open'); navToggle.setAttribute('aria-expanded','false'); navToggle.setAttribute('aria-label','Abrir menu');
    }));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open'); navToggle.setAttribute('aria-expanded','false'); navToggle.setAttribute('aria-label','Abrir menu'); navToggle.focus();
      }
    });

    if ('IntersectionObserver' in window && motionOK) {
      document.querySelectorAll('.cards .place-card').forEach((card,index) => {
        card.style.setProperty('--reveal-delay', `${(index % 3) * 110}ms`);
      });
      const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); }
      }), {threshold:.12, rootMargin:'0px 0px -36px 0px'});
      document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
      const timelineObserver = new IntersectionObserver(entries => entries.forEach(entry => entry.target.classList.toggle('active', entry.isIntersecting)), {threshold:.65});
      document.querySelectorAll('.timeline-item').forEach(el => timelineObserver.observe(el));
      const timelineTrack = document.querySelector('.timeline');
      const trackObserver = new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) { timelineTrack.classList.add('is-active'); trackObserver.unobserve(timelineTrack); }
      }), {threshold:.2});
      trackObserver.observe(timelineTrack);
    } else {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
    }

    const filters = document.querySelectorAll('.filter-button');
    const cards = document.querySelectorAll('.place-card');
    filters.forEach(button => button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      filters.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      cards.forEach(card => { card.hidden = filter !== 'todos' && !card.dataset.category.split(' ').includes(filter); });
    }));

    const modal = document.querySelector('#place-modal');
    const modalImage = document.querySelector('#modal-image');
    function openPlace(card) {
      modalImage.src = card.dataset.image;
      modalImage.hidden = false;
      modalImage.alt = card.querySelector('img').alt;
      document.querySelector('#modal-subtitle').textContent = card.dataset.subtitle;
      document.querySelector('#modal-title').textContent = card.dataset.title;
      document.querySelector('#modal-copy').textContent = card.dataset.copy;
      document.querySelector('#modal-source').href = card.dataset.source;
      modal.showModal();
    }
    cards.forEach(card => card.querySelector('.place-link').addEventListener('click', () => openPlace(card)));
    document.querySelector('.modal-close').addEventListener('click', () => modal.close());
    modal.addEventListener('click', event => { if (event.target === modal) modal.close(); });
    document.querySelectorAll('img').forEach(image => {
      const markLoaded = () => { if (image.naturalWidth > 0) image.classList.add('image-ready'); };
      image.addEventListener('load', markLoaded, {once:true});
      image.addEventListener('error', () => {
        image.classList.add('image-failed');
        if (image === modalImage) image.hidden = true;
        image.closest('.hero-visual, .place-card, .manifesto-visual')?.classList.add('image-failed');
      }, {once:true});
      if (image.complete) markLoaded();
    });

    const plans = {
      1:[['Manhã','Cabo Branco e Seixas','Comece na orla e consulte a maré para decidir se as piscinas naturais estão em boas condições.'],['Tarde','Centro Histórico','Reserve tempo para conhecer o Centro Cultural São Francisco e caminhar pelas praças históricas.'],['Fim de tarde','Hotel Globo','Feche o passeio com a vista para o Rio Sanhauá; confirme antes os horários de visitação.']],
      2:[['Dia 1 · manhã','Orla de Tambaú e Cabo Branco','Caminhe pela orla, conheça o letreiro e explore os pontos de apoio do bairro.'],['Dia 1 · tarde','Farol e Ponta do Seixas','Siga para a falésia e veja o Farol do Cabo Branco; passeios às piscinas dependem da maré.'],['Dia 2','Centro Histórico','Visite o conjunto de São Francisco, praças, casario e o Hotel Globo com tempo para observar os detalhes.']],
      3:[['Dia 1','Tambaú e Cabo Branco','Orla, gastronomia e paradas tranquilas entre as praias urbanas.'],['Dia 2','Seixas e Farol','Paisagem costeira, mirantes e piscinas naturais quando as condições permitirem.'],['Dia 3','Varadouro e Centro Histórico','Arquitetura, memória e cultura: caminhe sem pressa pelas ruas e praças históricas.']]
    };
    const routeTabs = [...document.querySelectorAll('.route-tab')];
    const routePanel = document.querySelector('#route-days');
    function showPlan(days, focusTab=false) {
      const selected = routeTabs.find(tab => Number(tab.dataset.days) === days);
      routeTabs.forEach(tab => { const active = tab === selected; tab.setAttribute('aria-selected',String(active)); tab.tabIndex = active ? 0 : -1; });
      routePanel.setAttribute('aria-labelledby',selected.id);
      routePanel.innerHTML = plans[days].map((day,index) => `<article class="route-day" style="animation-delay:${index*80}ms"><time>${day[0]}</time><div><h3>${day[1]}</h3><p>${day[2]}</p></div></article>`).join('');
      if (focusTab) selected.focus();
    }
    routeTabs.forEach((tab,index) => {
      tab.addEventListener('click', () => showPlan(Number(tab.dataset.days)));
      tab.addEventListener('keydown', event => {
        if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
          event.preventDefault(); const next = (index + (event.key === 'ArrowRight' ? 1 : -1) + routeTabs.length) % routeTabs.length;
          showPlan(Number(routeTabs[next].dataset.days), true);
        }
      });
    });
    showPlan(1);

    if (motionOK && window.matchMedia('(pointer:fine)').matches) {
      const parallax = document.querySelector('[data-parallax]');
      let ticking = false;
      window.addEventListener('scroll', () => {
        if (!ticking) requestAnimationFrame(() => {
          const rect = parallax.getBoundingClientRect();
          if (rect.bottom > 0 && rect.top < innerHeight) parallax.style.setProperty('--parallax-y', `${Math.max(-18, Math.min(18, (rect.top / innerHeight) * -18))}px`);
          ticking = false;
        });
        ticking = true;
      }, {passive:true});
      parallax.addEventListener('pointermove', event => {
        const bounds = parallax.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - .5;
        const y = (event.clientY - bounds.top) / bounds.height - .5;
        parallax.style.setProperty('--parallax-x', `${x * -16}px`);
        parallax.style.setProperty('--parallax-y', `${y * -14}px`);
      });
      parallax.addEventListener('pointerleave', () => {
        parallax.style.setProperty('--parallax-x', '0px');
        parallax.style.setProperty('--parallax-y', '0px');
      });
    }
    document.querySelector('#year').textContent = new Date().getFullYear();
