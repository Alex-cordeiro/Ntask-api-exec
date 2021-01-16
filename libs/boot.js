module.exports = app =>{
    app.listen(app.get("port"), () => {
        console.log(`Ntask API = porta ${app.get("port")}`);
    });
}