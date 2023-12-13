
function getNumberFact() {
    const numberInput = document.getElementById('numberInput').value;
    const resultDiv = document.getElementById('result');

    if (numberInput === '') {
        resultDiv.innerHTML = 'Please enter a number.';
        return;
    }

    const apiUrl = `http://numbersapi.com/${numberInput}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            resultDiv.innerHTML = data;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            resultDiv.innerHTML = 'Failed to fetch data. Please try again.';
        });
}
