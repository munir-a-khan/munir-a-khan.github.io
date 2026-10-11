const email = document.querySelector('#contact-email');
const copyButton = document.querySelector('.copy-email');
const copyStatus = document.querySelector('.copy-status');

copyButton.hidden = false;
copyButton.addEventListener('click', async () => {
  copyStatus.textContent = '';
  try {
    if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(email.textContent.trim());
    copyStatus.textContent = 'Email copied.';
  } catch {
    const selection = window.getSelection();
    if (selection) {
      const range = document.createRange();
      range.selectNodeContents(email);
      selection.removeAllRanges();
      selection.addRange(range);
    }
    copyStatus.textContent = 'Select the email address above and copy it manually.';
  }
});
