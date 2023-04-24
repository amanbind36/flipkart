const otpForm = document.querySelector('#otp-form');
const otpInput = document.querySelector('#otp');
const submitBtn = document.querySelector('#submit-btn');
const otpStatus = document.querySelector('#otp-status');

otpForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const otp = otpInput.value;
  // replace this with your own logic for generating the expected OTP
  const expectedOtp = '123456';

  if (otp === expectedOtp) {
    // OTP is valid, process the order confirmation
    otpStatus.textContent = 'Order confirmed!';
  } else {
    // OTP is invalid, display an error message
    otpStatus.textContent = 'Invalid OTP. Please try again.';
  }
});
