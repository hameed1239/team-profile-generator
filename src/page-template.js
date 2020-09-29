

const generateManager = manager => {
    return `
    <section class="my-3" id="manager">
            <h2 class="text-dark bg-primary p-2 display-inline-block"><i class="fas fa-mug-hot"></i> Manager</h2>
            <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
                <h3 class="manager-name text-light">${manager.name}</h3>
                <div class="bg-secondary text-dark ">
                    <h4 class="ml-4"><i class="far fa-id-badge"></i> ${manager.id}</h4 >
                    <a href="mailto:${manager.email}" class="email ml-4"><i class="fas fa-at"></i> ${manager.email}</a>
                    <h4 class="ml-4"><i class="fas fa-phone"></i> ${manager.officeNumber}</h4>
                </div>
            </div>
        </section>
  `;
}

const generateEngineers = engineersArr => {
    return `
    <section class="my-3" id="engineer">
            <h2 class="text-dark bg-primary p-2 display-inline-block"><i class="fas fa-glasses"></i> Engineers</h2>
            <div class="flex-row justify-space-between">
            ${engineersArr.map(({ name, id, email, gitHubUsername }) => {
                return `
                
                    <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
                        <h3 class="engineer-name text-light">${name}</h3>
                        <div class="bg-secondary text-dark ">
                            <h4 class="ml-4"><i class="far fa-id-badge"></i> ${id}</h4>
                            <a href="mailto:${email}" class="email ml-4"><i class="fas fa-at"></i>
                                ${email}</a>
                            <a href="https://github.com/${gitHubUsername}" target="_blank" class=" link ml-4"><i class="fab fa-github"></i>
                                ${gitHubUsername}</a>
                        </div>
                    </div>
                `
            }).join('')}
        
                
            </div>
        </section>
    `;
}

const generateInterns = internsArr => {
    return `
    <section class="my-3" id="Intern">
            <h2 class="text-dark bg-primary p-2 display-inline-block"><i class="fas fa-user-graduate"></i> Interns</h2>
            <div class="flex-row justify-space-between">
            ${internsArr.map(({ name, id, email, school }) => {
                return `
            
                <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
                    <h3 class="intern-name text-light">${name}</h3>
                    <div class="bg-secondary text-dark ">
                        <h4 class="ml-4"><i class="far fa-id-badge"></i> ${id}</h4>
                        <a href="mailto:${email}" class="email ml-4"><i class="fas fa-at"></i>
                            ${email}</a>
                        <h4 class=" ml-4"><i class="fas fa-school"></i>
                            ${school}</h4>
                    </div>
                </div>
                `
            }
    ).join('')}
            </div>
        </section>
    `
}



module.exports = templateData => {
    const { manager, engineersArr, internsArr } = templateData;
    console.log(manager);
    console.log(engineersArr);
    console.log(internsArr);
    console.log(templateData);
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div class="container align-center py-3">
            <h1 class="page-title text-secondary bg-dark py-2 px-3">Team</h1>
        </div>
    </header>
    <main class="container my-5">
        ${generateManager(manager)}
        ${generateEngineers(engineersArr)}
        ${generateInterns(internsArr)}
        
    </main>
    <footer class="container text-center py-3">
        <h3 class="text-dark">&copy; ${new Date().getFullYear()} by Team Generator </h3>
    </footer>
</body>
</html>
`;
}