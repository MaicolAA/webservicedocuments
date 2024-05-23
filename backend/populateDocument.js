const mongoose = require('mongoose');
const Document = require('./models/Document');
require('dotenv').config();



async function populateDocuments() {
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    try {
        const documents = [
            { 
                title: 'Documento Confidencial 2', 
                content: 'Contenido confidencial 2', 
                classification: 'Confidential', 
                url: 'https://drive.google.com/file/d/1w3_3Ve71ER0B87EP6SUiWmcosPgMOq7z/view?usp=drive_link' 
            },
            { 
                title: 'Documento Confidencial 1', 
                content: 'Contenido confidencial 1', 
                classification: 'Confidential', 
                url: 'https://drive.google.com/file/d/1_BoGecwJvAJxSQPia8rGUUSGootxyXcS/view?usp=drive_link' 
            },
            { 
                title: 'Documento Secreto 1', 
                content: 'Contenido secreto 1', 
                classification: 'Secret', 
                url: 'https://drive.google.com/file/d/1D89sMGrqID7Dafuu4FA2xafRZY2MBMD-/view?usp=drive_link' 
            },
            { 
                title: 'Documento Secreto 2', 
                content: 'Contenido secreto 2', 
                classification: 'Secret', 
                url: 'https://drive.google.com/file/d/1MoSkzZfcQI7x5o6k7aPH4K3_HMdzUlCG/view?usp=drive_link' 
            },
            { 
                title: 'Documento Secreto 3', 
                content: 'Contenido secreto 3', 
                classification: 'Secret', 
                url: 'https://drive.google.com/file/d/1QIrX1uiBQlaHcXyKksUzpNnUf2tnIG38/view?usp=drive_link' 
            },
            { 
                title: 'Documento Ultra Secreto', 
                content: 'Contenido ultra secreto', 
                classification: 'TopSecret', 
                url: 'https://drive.google.com/file/d/1laCKVmrbz_siWNYuucTTAtdi91KQTmyj/view?usp=drive_link' 
            },
        ];
        
        const createdDocuments = await Document.create(documents); 
        
        console.log('Documentos agregados con éxito:', createdDocuments);
    } catch (error) {
        console.error('Error al agregar documentos:', error.message);
    } finally {
        mongoose.disconnect();
    }
}

populateDocuments();
