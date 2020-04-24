import {Catch, ExceptionFilter, HttpException, ArgumentsHost} from '@nestjs/common';

@Catch()
export class HttpErrorFilter implements ExceptionFilter{
    catch(exception:HttpException, host:ArgumentsHost){
        const ctx=host.switchToHttp();
        const req=ctx.getRequest();
        const res=ctx.getResponse();
        const errResponse={
            code:exception.getStatus(),
            timestamp: new Date().toLocaleDateString(),
            path:req.url,
            method:req.method,
            message:exception.message || null,
        }
        res.status(404).json(errResponse)

    }

}