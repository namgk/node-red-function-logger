declare class Logger {
    runtime: any;
    setRuntime(runtime: any): void;
    debug(message: any): void;
    error: (message: any) => void;
}
declare const _default: Logger;
export default _default;
