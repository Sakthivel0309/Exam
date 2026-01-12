function goToPayment() {
  window.location.href = "payment.html";
}

function confirmPayment() {
  const txnId = document.getElementById("txnId").value.trim();

  if (txnId === "" || txnId.length < 6) {
    alert("Please enter a valid Transaction ID");
    return;
  }

  // Save Txn ID locally (browser)
  localStorage.setItem("txnId", txnId);

  alert("Payment submitted. Access granted.");
  window.location.href = "dashboard.html";
}
