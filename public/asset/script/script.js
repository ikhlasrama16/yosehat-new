// Ambil semua info card
const infoCards = document.querySelectorAll('.info-card');

// Tambahkan event listener untuk masing-masing card
document.addEventListener('click', function (e) {
    if (e.target.closest('.info-card')) {
        const card = e.target.closest('.info-card');
        const modalId = card.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'block';
        }
    }
});


// Tutup modal ketika tombol "close" diklik
const closeButtons = document.querySelectorAll('.close');
closeButtons.forEach(button => {
    button.addEventListener('click', function () {
        const modal = this.closest('.modal');
        modal.style.display = 'none';
    });
});

// Tutup modal jika klik di luar modal
window.addEventListener('click', function (event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
