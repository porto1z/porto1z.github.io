document.addEventListener('DOMContentLoaded', function () {
    const openModals = document.querySelectorAll('.hero__cta');
    const closeModals = document.querySelectorAll('.modal__close');
  
    openModals.forEach((openModal) => {
      openModal.addEventListener('click', (e) => {
        e.preventDefault();
        const targetModalId = e.currentTarget.getAttribute('data-modal-target');
        const targetModal = document.querySelector(targetModalId);
        targetModal.style.display = 'flex';
      });
    });
  
    closeModals.forEach((closeModal) => {
      closeModal.addEventListener('click', (e) => {
        e.preventDefault();
        const targetModalId = e.currentTarget.getAttribute('data-modal-close');
        const targetModal = document.querySelector(targetModalId);
        targetModal.style.display = 'none';
      });
    });
  });
  