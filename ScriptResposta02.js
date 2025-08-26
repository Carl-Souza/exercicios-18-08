    
        const params = new URLSearchParams(window.location.search);

        document.getElementById('nome').textContent = params.get('nome');
        document.getElementById('curso').textContent = params.get('curso');
        document.getElementById('data').textContent = params.get('data');
        document.getElementById('conhecimento').textContent = params.get('conhecimento');
        document.getElementById('linguagens').textContent = params.get('linguagens');

