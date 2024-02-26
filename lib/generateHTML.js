//
function generatefile(answers) {
  const fileName = "team.html"

      // Generate markdown for README
  //
  let draftMarkdown = `
    
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>


</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
  
    <div class="card employee-card">
    <div class="card-header">
    <h2 class="card-title">${answers.nameManager}</h2>
    <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${"Manager"}</h3>        
</div>
<div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">ID: ${answers.idManager}</li>
        <li class="list-group-item">Email: <a href="mailto:${answers.emailManager}">${answers.emailManager}</a></li>
        <li class="list-group-item">Office number: ${answers.officeNoManager}</li>
    </ul>
</div>

<div class="card engineer-card">
<div class="card-header">
    <h2 class="card-title">${answers.nameEngineer}</h2>
    <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${"Engineer"}</h3>
</div>
<div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">ID: ${answers.idEngineer}</li>
        <li class="list-group-item">Email: <a href="mailto:${answers.emailEngineer}">${answers.emailEngineer}</a></li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${answers.githubUser}" target="_blank" rel="noopener noreferrer">${answers.githubUser}</a></li>
    </ul>
</div>
</div>


<div class="card engineer-card2">
<div class="card-header">
    <h2 class="card-title">${answers.nameEngineer2}</h2>
    <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${"Engineer"}</h3>
</div>
<div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">ID: ${answers.idEngineer2}</li>
        <li class="list-group-item">Email: <a href="mailto:${answers.emailEngineer2}">${answers.emailEngineer2}</a></li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${answers.githubUser2}" target="_blank" rel="noopener noreferrer">${answers.githubUser2}</a></li>
    </ul>
</div>
</div>

<div class="card engineer-card3">
<div class="card-header">
    <h2 class="card-title">${answers.nameEngineer3}</h2>
    <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${"Engineer"}</h3>
</div>
<div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">ID: ${answers.idEngineer3}</li>
        <li class="list-group-item">Email: <a href="mailto:${answers.emailEngineer3}">${answers.emailEngineer3}</a></li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${answers.githubUser3}" target="_blank" rel="noopener noreferrer">${answers.githubUser3}</a></li>
    </ul>
</div>
</div>

<div class="card intern-card">
<div class="card-header">
    <h2 class="card-title">${answers.nameIntern}</h2>
    <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${"Intern"}</h3>
</div>
<div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">ID: ${answers.idIntern}</li>
        <li class="list-group-item">Email: <a href="mailto:${answers.emailIntern}">${answers.emailIntern}</a></li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${answers.school}" target="_blank" rel="noopener noreferrer">${answers.school}</a></li>
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
