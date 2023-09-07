// Basic try/catch

try {
  let value = JSON.parse('{malformed json}');
} catch (error) {
  console.error('Caught an error:', error.message);
}

// With finally

try {
  let value = JSON.parse('{malformed json}');
} catch (error) {
  console.error('Caught an error:', error.message);
} finally {
  console.log('This will always run!');
}

//Specific erors

try {
  // Some code here...
  throw new TypeError('This is a type error!');
} catch (error) {
  if (error instanceof TypeError) {
    console.error('Type Error:', error.message);
  } else {
    console.error('General Error:', error.message);
  }
}

// Without catching the error

function readFile(fileName) {
  let file;
  try {
    file = openFile(fileName);
    // Process the file...
  } finally {
    if (file) {
      file.close();
    }
    console.log('File cleanup done!');
  }
}
