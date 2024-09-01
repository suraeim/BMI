document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('bmi-form');
    const bmiValueElement = document.getElementById('bmi-value');
    const bmiCategoryElement = document.getElementById('bmi-category');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get the weight and height values from the form
        const weight = parseFloat(document.getElementById('weight').value);
        const heightInCm = parseFloat(document.getElementById('height').value);
        const heightInMeters = heightInCm / 100; // Convert cm to meters

        if (weight > 0 && heightInMeters > 0) {
            // Calculate BMI
            const bmi = weight / (heightInMeters * heightInMeters);
            
            // Determine the BMI category
            let category = '';
            if (bmi < 18.5) {
                category = 'Underweight';
            } else if (bmi < 24.9) {
                category = 'Normal weight';
            } else if (bmi < 29.9) {
                category = 'Overweight';
            } else {
                category = 'Obesity';
            }

            // Display the results
            bmiValueElement.textContent = `Your BMI: ${bmi.toFixed(2)}`;
            bmiCategoryElement.textContent = `Category: ${category}`;
        } else {
            // If input values are not valid
            bmiValueElement.textContent = '';
            bmiCategoryElement.textContent = 'Please enter valid values.';
        }
    });
});
