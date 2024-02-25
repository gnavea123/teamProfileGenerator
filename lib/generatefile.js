//
function generatefile(answers) {
  const fileName = "team.html"

      // Generate markdown for README
  //
  let draftMarkdown = `# ${fileName}

  ## Description 
  
  ${answers.nameManager} `;


  //
    // Add License section
    draftMarkdown += `
    * [License](#license)  
  
  <!DOCTYPE html>
   <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <title>Document</title>
  </head>
  <body>
    <div class="p-5 mb-4 bg-body-tertiary rounded-3">
    <div class="container-fluid py-5">
      <h1 class="display-5 fw-bold">Hi! My name is ${answers.nameManager}</h1>
      <p class="col-md-8 fs-4">my id is  ${answers.idManager}.</p>
      <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My email is ${answers.emailManager}</li>
        <li class="list-group-item">My OfficeNumber is:  ${answers.officeNoManager}</li>
      </ul>
    </div>
  </div>
  </body>
  </html>
  `;

  //
    // Return markdown
    return draftMarkdown;
}
  
module.exports = generatefile;
