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
            url: `http://localhost:${process.env.PORT || 3000}`, 
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
    console.log(`Swagger docs available at http://localhost:${process.env.PORT || 3000}/api-docs`);
};

module.exports = swaggerDocs;
