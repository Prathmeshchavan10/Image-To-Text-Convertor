
//Addinf EventListener
document.getElementById("convertButton").addEventListener("click", () => {
    
    const imageInput = document.getElementById("imageInput");
    const output = document.getElementById("output");
  
    //check file
    if (imageInput.files.length === 0) {
      output.textContent = "Please upload an image first.";
      return; 
    }
  
    //Take First Image
    const imageFile = imageInput.files[0];
  
    const reader = new FileReader(); //new objet
  
    // Define what happens when the file is successfully read
    reader.onload = () => {
      const imageSrc = reader.result;//(in Base64 format) 
  //Tesseract library to read image and convert to text
      Tesseract.recognize(
        imageSrc, 
        "eng", 
      )
        .then(({ data: { text } }) => {
         //display extracted texr
          output.textContent = text;
        })
        .catch((error) => {
            //display error message 
          output.textContent = `Error: ${error.message}`;
        });
    };
  
    //  reading the image file as a data URL
    reader.readAsDataURL(imageFile);
  });




  