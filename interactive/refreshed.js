
window.addEventListener('beforeunload', function (e) {
    try {
        document.querySelector('.circle-full-1').classList.add('fade-out');
        document.querySelector('.circle-logo').classList.add('fade-out');
        document.querySelector('.circle-grey-1').classList.add('fade-out');
        document.querySelector('.circle-grey-2').classList.add('fade-out');
    } catch (error) {}

    
    //e.preventDefault(); 
    //e.returnValue = 'Apakah Anda yakin ingin me-refresh halaman?';

});
