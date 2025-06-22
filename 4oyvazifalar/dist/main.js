"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    try {
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
        const PORT = process.env.PORT || 3000;
        app.useGlobalPipes(new common_1.ValidationPipe());
        const config = new swagger_1.DocumentBuilder()
            .setTitle('Donate')
            .setDescription('Nestjs RESTFULL API')
            .setVersion('1.0')
            .addTag('Nestjs, Valudators, User roles, Autharization')
            .build();
        const documentFactory = () => swagger_1.SwaggerModule.createDocument(app, config);
        swagger_1.SwaggerModule.setup('api', app, documentFactory);
        await app.listen(PORT, () => {
            console.log(`server running on http://localhost:${PORT}`);
        });
    }
    catch (error) {
        console.log(error);
    }
}
bootstrap();
//# sourceMappingURL=main.js.map