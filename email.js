(function() {
    const target = document.getElementById('email-contact');
    if (!target) return;
    const at = String.fromCharCode(64);
    const dot = String.fromCharCode(46);
    const address = 'hello' + at + 'niugnep' + dot + 'dev';
    const link = document.createElement('a');
    link.href = 'mail' + 'to:' + address;
    link.textContent = address;
    target.appendChild(link);
})();
