export interface Step {
    endpoint: string;
    state: string;
    calledOn?: string;
}

export class Status {
    running: boolean;
    activeEndpoint: string = 'NONE';
    steps: Step[] = [];
    errorMessages: string[];
    activeStoredProcedures: string[];
}