const setApp = require('./server');

// set port, listen for requests
const PORT = 80;
setApp
    .then(server =>
        server.listen(PORT, () =>
            console.info(`Server is running on port ${PORT}.`),
        ),
    )
    .catch(error => {
        console.error(`ERRO: ${error}`);
        process.exit(1);
    });
// server.listen(PORT, () => console.info(`Server is running on port ${PORT}.`));
