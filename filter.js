(function() {
    const bar = document.getElementById('tag-filter');
    if (!bar) return;
    const buttons = Array.from(bar.querySelectorAll('button[data-tag]'));
    const projects = Array.from(document.querySelectorAll('.project-log[data-tags]'));
    const groups = Array.from(document.querySelectorAll('.project-group'));

    function apply(tag) {
        projects.forEach(function(project) {
            const tags = (project.dataset.tags || '').split(/\s+/);
            project.hidden = !(tag === 'all' || tags.indexOf(tag) !== -1);
        });
        groups.forEach(function(group) {
            const items = group.querySelectorAll('.project-log[data-tags]');
            if (!items.length) return;
            group.hidden = !Array.from(items).some(function(item) { return !item.hidden; });
        });
        buttons.forEach(function(button) {
            button.setAttribute('aria-pressed', String(button.dataset.tag === tag));
        });
    }

    buttons.forEach(function(button) {
        button.addEventListener('click', function() { apply(button.dataset.tag); });
    });

    // Deep-link support: never let a filter hide the anchor target.
    if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target && target.classList.contains('project-log')) {
            const details = target.querySelector('details.project-deep');
            if (details) details.open = true;
        }
    }
})();
