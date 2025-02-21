document.getElementById('pizzaForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const size = document.querySelector('input[name="size"]:checked').value;

    const toppings = Array.from(document.querySelectorAll('input[name="toppings"]:checked'))
                          .map(topping => topping.value);

    let summary = `You ordered a ${size} pizza with the following toppings: `;
    summary += toppings.length > 0 ? toppings.join(', ') : 'No toppings selected.';

    document.getElementById('orderSummary').textContent = summary;
});