function showPaymentDetails() {
  const paymentMethod = document.getElementById("payment-method").value;
  const paymentDetails = document.getElementById("payment-details");

  console.log(paymentMethod); 

  paymentDetails.innerHTML = "";

  if (paymentMethod === "credit_card") {
    paymentDetails.style.display = "block";
    paymentDetails.innerHTML = `
    <label for="holder">Name on Card</label>
    <input type="text" id="holder" name="holder" required>
    <label for="card-number">Card Number:</label>
    <input type="text" id="card-number" name="card_number" required maxlength="4">  <p id style= "color: gray; font-size: smaller;">Please input last 4 digits.</p>
    <label for="expiration">Expiration Date</label>
    <input type="date" id="expiration" name="expiration" required min="4" max="4">
  `;
    console.log("PAYMENT");
  } else if (paymentMethod === "debit") {
    paymentDetails.style.display = "block";
    paymentDetails.innerHTML = `
    <label for="holder">Name on Card</label>
    <input type="text" id="holder" name="holder" required>
    <label for="card-number">Card Number:</label>
    <input type="text" id="card-number" name="card_number" required>
    <p id style= "color: gray; font-size: smaller;">Please input last 4 digits.</p>
    <label for="expiration">Expiration Date</label>
    <input type="number" id="expiration" name="expiration" required min="4" max="4">
  `;
    console.log("PAYMENT"); 
  } else if (paymentMethod === "paypal") {
    paymentDetails.style.display = "block";
    paymentDetails.innerHTML = `
      <label for="paypmail">Paypal Email:</label>
      <input type="text" id="paypmail" name="paypmail" required>
      <label for="paypalname">Name:</label>
      <input type="text" id="paypalname" name="paypalname" required>

    
      <p id style= "color: gray; font-size: smaller;">You will be redirected to PayPal upon submission.</p>
    `;
    console.log("Showing PayPal message");
  } else if (paymentMethod === "gcash") {
    paymentDetails.style.display = "block";
    paymentDetails.innerHTML = `
    <label for="gcashnum">Gcash Number:</label>
    <input type="number" id="gcashnum" name="gcashnum" required>
    <label for="gcashname">Name: </label>
    <input type="text" id="gcashname" name="gcashname" required>

      <p id style= "color: gray; font-size: smaller;">You will be redirected to Gcash upon submission.</p>
    `;
    console.log("Showing Gcash message"); 
  } else {
    paymentDetails.style.display = "none";
  }
}
