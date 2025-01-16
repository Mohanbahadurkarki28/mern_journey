// script.js
document.getElementById('phoneInput').addEventListener('input', function (e) {
    const input = e.target.value.replace(/\D/g, ''); // Remove all non-numeric characters
    const formatted = formatPhoneNumber(input);
  
    document.getElementById('formattedOutput').textContent = formatted;
    e.target.value = formatted; // Update input with the formatted value
  });
  
  function formatPhoneNumber(phone) {
    if (phone.length <= 3) {
      return phone;
    } else if (phone.length <= 6) {
      return `(${phone.slice(0, 3)}) ${phone.slice(3)}`;
    } else {
      return `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6, 10)}`;
    }
  }
  