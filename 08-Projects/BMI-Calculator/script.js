const form = document.querySelector('form');

// console.log(form);

// This use case will give you an empty value.
// const height = parseInt(document.querySelector('#height'));

form.addEventListener('submit', (event) => {
  event.preventDefault(); // V.IMP: to prevent browser to add his own default events

  // if you want to access the values of the text fields then you have to add ".value" at the end to get the values entered.

  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);

  const result = document.querySelector('#results');
  const verdict = document.querySelector('#verdict');
  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please Enter Valid Height!!`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please Enter the Valid Weigth!!`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;

    if (bmi < 18.6) verdict.innerHTML = 'You Are Under Weight!!!';
    else if (bmi >= 18.6 && bmi < 24.9)
      verdict.innerHTML = 'Congrats!! You are well Maintained!!';
    else {
      verdict.innerHTML = 'Gym needs you mate :)!!!';
    }
  }
});
