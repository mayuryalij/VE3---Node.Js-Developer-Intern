const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Task Management API',
        version: '1.0.0',
        description: 'API for managing tasks and user authentication.',
    },
    servers: [
        {
            url: `https://ve3-node-js-developer-intern.onrender.com`, 
            description: 'Development server',
        },
    ],
    components: {
        securitySchemes: {
            BearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            },
        },
    },
    security: [
        {
            BearerAuth: [],
        },
    ],
};


const swaggerOptions = {
    swaggerDefinition,
    apis: ['./src/Routes/authRoutes.js', './src/Routes/taskRoutes.js'],
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);


const swaggerDocs = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    console.log(`Swagger docs available at https://ve3-node-js-developer-intern.onrender.com/api-docs`);
};

module.exports = swaggerDocs;
