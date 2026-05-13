(function () {
	var thread = document.getElementById('cusdis_thread');
	if (!thread) return;

	var CSS = [
		'body{background:#050a05!important;color:#c2ffc2!important;font-family:"Courier New",Courier,monospace!important}',
		'input,textarea{background:#001a00!important;color:#00ff41!important;border:1px solid #008f11!important;border-radius:0!important;font-family:inherit!important}',
		'input:focus,textarea:focus{border-color:#00ff41!important;outline:none!important}',
		'button{background:#00ff41!important;color:#050a05!important;border:0!important;border-radius:0!important;font-weight:700!important;font-family:inherit!important;cursor:pointer!important}',
		'button:hover{background:#33ff66!important}',
		'a{color:#33ff66!important}a:hover{color:#00ff41!important}',
		'label,p,span,div,li,h1,h2,h3{color:#c2ffc2!important}',
		'.dark,.cusdis-dark{background:#050a05!important}',
	].join('');

	function inject(iframe) {
		try {
			var doc = iframe.contentDocument || (iframe.contentWindow && iframe.contentWindow.document);
			if (!doc) return false;
			var style = doc.createElement('style');
			style.setAttribute('data-injected', 'matrix-theme');
			style.textContent = CSS;
			(doc.head || doc.documentElement).appendChild(style);
			return true;
		} catch (e) {
			return false;
		}
	}

	function handleIframe(iframe) {
		if (iframe.dataset.matrixInjected === '1') return;
		iframe.dataset.matrixInjected = '1';
		if (!inject(iframe)) {
			iframe.addEventListener('load', function () { inject(iframe); });
		}
	}

	var existing = thread.querySelector('iframe');
	if (existing) handleIframe(existing);

	var observer = new MutationObserver(function (mutations) {
		mutations.forEach(function (m) {
			m.addedNodes.forEach(function (node) {
				if (node.tagName === 'IFRAME') handleIframe(node);
			});
		});
	});
	observer.observe(thread, { childList: true, subtree: true });
})();
