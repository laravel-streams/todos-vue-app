import { Entry } from '@laravel-streams/api-client';

export type TodoEntry = Todo & Entry

import { IServiceProviderClass } from '@radic/shared';
import { StartFn,Repository } from './foundation';


export type Config =
    Repository<Configuration>
    & Configuration


export interface Configuration {
    debug?: boolean;
    startFn?: StartFn;
}

export interface ApplicationInitOptions {
    dirname:string,
    providers?: IServiceProviderClass[];
    config?: Configuration;
}
