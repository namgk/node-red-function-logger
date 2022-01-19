class Logger {
  runtime: any;

  setRuntime(runtime){
    this.runtime = runtime;
  }

  debug(message: any){
    if (!this.runtime){
      console.log(message);
      return;
    }
    try {
      this.runtime.log(JSON.stringify(message))
    } catch(e){
      this.runtime.log(message)
    }
  }

  error = message => {
    if (!this.runtime){
      console.error(message);
      return;
    }
    this.runtime.status({message})
  }
}

export default new Logger();
