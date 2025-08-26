    
        const params = new URLSearchParams(window.location.search);

        document.getElementById('nome').textContent = params.get('nome');
        document.getElementById('curso').textContent = params.get('curso');
        document.getElementById('email').textContent = params.get('email');
        document.getElementById('idade').textContent = params.get('idade');
        document.getElementById('disponibilidade').textContent = params.get('disponibilidade');
        document.getElementById('receberCertificado').textContent = params.get('receberCertificado');
        document.getElementById('linguagens').textContent = params.get('linguagens');
        document.getElementById('observacoes').textContent = params.get('observacoes');
