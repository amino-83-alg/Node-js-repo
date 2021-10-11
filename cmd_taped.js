// creation des dossiers et des fichies et le s supprimer.
const fs = require("fs")
fs.mkdir("folder2", (err) => {
    if (err) console.log("err folder not created");
    else {
        fs.writeFile("./folder2/etat.txt", "2 2 3 viva l'algérie", (err) => {
            if (err) console.log("err file not created");
            else { console.log("seccsseful"); }
        })
    }

})
//supprimer fichier
/* fs.rm("./folder2/etat.txt",(err) => {
            if (err) console.log("err file not deleted");
            else { console.log("seccsseful"); }
        })

//supprimer folder=dossier
fs.rmdir("folder2",(err) => {
            if (err) console.log("err folder not deleted");
            else { console.log("seccsseful"); }
        }) */


        