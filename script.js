

const formatString = (str) => {
    return str.split('').map((char, index)    => `${index}${char.toUpperCase()}`).join('');
  }
  
  const userString = prompt("Enter a string:");
  const result = formatString(userString);
  document.write(result);
  