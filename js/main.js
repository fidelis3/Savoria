
document.addEventListener('DOMContentLoaded', () => {
  const orderButtons = document.querySelectorAll('button');

  orderButtons.forEach(button => {
    button.addEventListener('click', () => {
      alert('Order taken');
    });
  });
});

// If the alert is not showing, ensure your <script src="js/main.js"></script> is placed just before </body> in starter.html
// and that the path is correct relative to your HTML file.

// Make sure your HTML has at least one <button> element, for example:
// <button>Order</button>
