function applyEffect(effect, button) {
            
            const buttons = document.querySelectorAll('.btn');
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const img = document.getElementById('main-image');

            img.style.filter = 'none';
            img.style.transform = 'none';

            switch (effect) {
                case 'gray':
                    img.style.filter = 'grayscale(1)';
                    break;
                case 'xray':
                    img.style.filter = 'grayscale(1) invert(1)';
                    break;
                case 'invert':
                    img.style.filter = 'invert(1)';
                    break;
                case 'fliph':
                    img.style.transform = 'scaleX(-1)';
                    break;
                case 'flipv':
                    img.style.transform = 'scaleY(-1)';
                    break;
                case 'glow':
                    img.style.filter = 'drop-shadow(0 0 10px #38bdf8)';
                    break;
                case 'shadow':
                    img.style.filter = 'drop-shadow(4px 4px 6px rgba(0,0,0,0.8)) blur(3px)';
                    break;
                case 'boldshadow':
                    img.style.filter = 'drop-shadow(6px 6px 0px #ef4444)';
                    break;
                case 'dropshadow':
                    img.style.filter = 'drop-shadow(5px 5px 10px #3b82f6)';
                    break;
                case 'blur':
                    img.style.filter = 'blur(3px)';
                    break;
                case 'wave':
                    img.style.filter = 'url(#wave-filter)';
                    break;
                case 'mask':
                case 'alpha':
                    img.style.filter = 'opacity(0.4)';
                    break;
            }
        }