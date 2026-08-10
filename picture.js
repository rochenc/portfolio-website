// Scroll-in appear effect, mirroring the template's stagger.
(function () {
    var targets = document.querySelectorAll('.tile, .rise');
    if (!targets.length) return;

    if (!('IntersectionObserver' in window)) {
        targets.forEach(function (el) { el.classList.add('is-in'); });
        return;
    }

    var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            var el = entry.target;
            var delay = Number(el.dataset.delay || 0);
            setTimeout(function () { el.classList.add('is-in'); }, delay);
            io.unobserve(el);
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    targets.forEach(function (el) { io.observe(el); });
})();
