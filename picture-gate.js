/* Read gate for case studies.
 *
 * NOTE: this is a courtesy gate, not security. The article markup is already in
 * the page and the password lives in this file, so anyone who views source or
 * disables JS can read straight through it. Use it to signal "this is client
 * work, please ask" — not to protect anything actually confidential.
 */
(function () {
    var PASSWORD = '1314';
    var STORE_KEY = 'authenticated';          // shared with login.html
    var FREE_FRACTION = 0.8;                  // share of the page readable before the gate
    var SCREENS_FREE = 2;                     // fallback if the page has no marker

    // These case studies are only ~2.5 screens tall, so a fixed screen count
    // either fires immediately or never. Gate on a fraction of each page's own
    // scrollable height instead, floored at <div data-gate> so the teaser never
    // closes before the final-result section.
    var marker = document.querySelector('[data-gate]');

    function triggerPoint() {
        var vh = window.innerHeight;
        var maxScroll = document.documentElement.scrollHeight - vh;
        var byFraction = FREE_FRACTION * maxScroll;
        if (!marker) return SCREENS_FREE * vh;
        var byMarker = marker.getBoundingClientRect().top + window.scrollY - vh * 0.6;
        return Math.max(byMarker, byFraction);
    }

    function reachedGate() {
        return window.scrollY >= triggerPoint();
    }

    function unlocked() {
        try { return sessionStorage.getItem(STORE_KEY) === 'true'; } catch (e) { return false; }
    }

    if (unlocked()) return;

    var scrollY = 0;
    var gate = null;

    function build() {
        var el = document.createElement('div');
        el.className = 'gate';
        el.setAttribute('role', 'dialog');
        el.setAttribute('aria-modal', 'true');
        el.setAttribute('aria-labelledby', 'gate-title');
        el.innerHTML =
            '<div class="gate-card">' +
              '<h2 id="gate-title">Password required</h2>' +
              '<form class="gate-form">' +
                '<input type="password" placeholder="Password" aria-label="Password" autocomplete="current-password">' +
                '<button type="submit">Enter</button>' +
              '</form>' +
              '<p class="gate-error" role="alert">Not quite &mdash; try again.</p>' +
              '<p class="gate-alt"><a href="mailto:rchen02@risd.edu">Ask me</a></p>' +
            '</div>';
        return el;
    }

    function lock() {
        if (gate) return;

        scrollY = window.scrollY;
        gate = build();
        document.body.appendChild(gate);

        // freeze the page where the reader stopped
        document.body.style.top = -scrollY + 'px';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        document.documentElement.classList.add('gate-locked');

        var form = gate.querySelector('.gate-form');
        var input = gate.querySelector('input');
        var error = gate.querySelector('.gate-error');

        input.focus();

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            if (input.value === PASSWORD) {
                try { sessionStorage.setItem(STORE_KEY, 'true'); } catch (err) {}
                release();
            } else {
                error.classList.add('show');
                input.value = '';
                input.focus();
            }
        });

        input.addEventListener('input', function () { error.classList.remove('show'); });
    }

    function release() {
        document.documentElement.classList.remove('gate-locked');
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollY);

        if (gate) { gate.remove(); gate = null; }
        window.removeEventListener('scroll', onScroll);
    }

    function onScroll() {
        if (reachedGate()) lock();
    }

    window.addEventListener('scroll', onScroll, { passive: true });
})();
