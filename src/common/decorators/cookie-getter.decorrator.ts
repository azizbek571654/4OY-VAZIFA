import { createParamDecorator, ExecutionContext, UnauthorizedException } from "@nestjs/common";


export const CookieGetter = createParamDecorator(
    async (data: string, context: ExecutionContext): Promise<string> =>{
        const request = context.switchToHttp().getRequest();

        const refreshToken = request.cookies[data];
        console.log(refreshToken);
        
        if (!refreshToken) {
            throw new UnauthorizedException("token not found ")
        }
        return refreshToken
    }
)