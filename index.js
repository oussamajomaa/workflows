const express = require('express')

const app  = express()

app.get('/', (req,res)=> {
    res.json('Heloo from Workflows Gitactions')
})

app.get('/user', (req,res)=> {
    res.json('Voici une liste des utilisateurs')
})

const PORT = process.env.PORT || 3001
// Tester si ton fichier est exécuté directement, ou s’il est importé dans un autre fichier
if (require.main === module) {    
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  }

module.exports = app