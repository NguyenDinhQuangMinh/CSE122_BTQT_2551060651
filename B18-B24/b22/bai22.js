function toggleTheme() {
            const body = document.body;
            const checkbox = document.getElementById('theme-toggle');
            const statusText = document.getElementById('status-text');

            body.classList.toggle('toi');

            if (body.classList.contains('toi')) {
                statusText.textContent = "Đây là giao diện ở chế độ TỐI (đang bật).";
            } else {
                statusText.textContent = "Đây là giao diện ở chế độ SÁNG (đang tắt).";
            }
        }